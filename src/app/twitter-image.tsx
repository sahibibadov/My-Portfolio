import OpengraphImage, {
  alt as ogAlt,
  size as ogSize,
  contentType as ogContentType,
} from "./opengraph-image";

// `runtime` must be a literal in this file — Next 16 / Turbopack rejects
// re-exports of route-segment config. Keep in sync with opengraph-image.tsx.
export const runtime = "nodejs";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default OpengraphImage;
