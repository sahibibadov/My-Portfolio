/**
 * One pointer tracker shared by every `GlowingEffect` on the page.
 *
 * Each effect used to own a `pointermove` listener that measured its box and
 * started a fresh JS animation per event. With a grid of cards that meant one
 * forced layout *per card per event*, because every callback interleaved a read
 * (`getBoundingClientRect`) with a write (`style.setProperty`).
 *
 * Here a single listener schedules one animation frame, measures every
 * registered element up front, then writes — so a frame costs one layout flush
 * no matter how many cards are mounted. Only cards the pointer is actually near
 * touch the DOM at all.
 */

type GlowOptions = {
  /** How far outside its box a card still reacts, in pixels. */
  proximity: number;
  /** Fraction of the card's smallest side that stays unlit around the centre. */
  inactiveZone: number;
};

type GlowTarget = GlowOptions & {
  element: HTMLElement;
  left: number;
  top: number;
  width: number;
  height: number;
  angle: number;
  active: boolean;
};

/** Share of the remaining angle covered each frame — the glow's easing. */
const FOLLOW = 0.18;
/** Below this many degrees the glow counts as settled and stops writing. */
const ANGLE_EPSILON = 0.1;

const targets = new Set<GlowTarget>();

let pointerX = Number.NEGATIVE_INFINITY;
let pointerY = Number.NEGATIVE_INFINITY;
let frameId = 0;

const shortestAngleDelta = (from: number, to: number) => ((((to - from) % 360) + 540) % 360) - 180;

const schedule = () => {
  if (!frameId) frameId = requestAnimationFrame(tick);
};

function tick() {
  frameId = 0;

  // Read phase: measure everything before touching a single style.
  for (const target of targets) {
    const rect = target.element.getBoundingClientRect();
    target.left = rect.left;
    target.top = rect.top;
    target.width = rect.width;
    target.height = rect.height;
  }

  // Write phase: no layout is invalidated by the reads above any more.
  let unsettled = false;

  for (const target of targets) {
    const { left, top, width, height } = target;
    if (width === 0 || height === 0) continue;

    const withinReach =
      pointerX > left - target.proximity &&
      pointerX < left + width + target.proximity &&
      pointerY > top - target.proximity &&
      pointerY < top + height + target.proximity;

    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const inactiveRadius = 0.5 * Math.min(width, height) * target.inactiveZone;
    const active = withinReach && Math.hypot(pointerX - centerX, pointerY - centerY) >= inactiveRadius;

    if (active !== target.active) {
      target.active = active;
      target.element.style.setProperty("--active", active ? "1" : "0");
    }

    if (!active) continue;

    const desired = (Math.atan2(pointerY - centerY, pointerX - centerX) * 180) / Math.PI + 90;
    const delta = shortestAngleDelta(target.angle, desired);
    if (Math.abs(delta) < ANGLE_EPSILON) continue;

    target.angle += delta * FOLLOW;
    target.element.style.setProperty("--start", target.angle.toFixed(2));
    unsettled = true;
  }

  // Keep easing until every lit card has caught up with the pointer.
  if (unsettled) schedule();
}

const onPointerMove = (event: PointerEvent) => {
  pointerX = event.clientX;
  pointerY = event.clientY;
  schedule();
};

// Scrolling and resizing move the cards, not the pointer, but both change which
// card sits under it.
const onLayoutChange = () => schedule();

function start() {
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("scroll", onLayoutChange, { passive: true });
  window.addEventListener("resize", onLayoutChange, { passive: true });
}

function stop() {
  window.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("scroll", onLayoutChange);
  window.removeEventListener("resize", onLayoutChange);
  cancelAnimationFrame(frameId);
  frameId = 0;
}

/**
 * Starts driving `--active` / `--start` on `element`. Returns the unsubscribe
 * function; the shared listeners live only while at least one target is registered.
 *
 * No-ops on touch devices, where there is no cursor for the glow to follow.
 */
export function registerGlow(element: HTMLElement, options: GlowOptions): () => void {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return () => {};

  const target: GlowTarget = {
    element,
    ...options,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    angle: 0,
    active: false,
  };

  if (targets.size === 0) start();
  targets.add(target);

  return () => {
    targets.delete(target);
    if (targets.size === 0) stop();
  };
}
