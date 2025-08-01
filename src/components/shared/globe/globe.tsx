/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/constants/earth/globe.json";
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: any;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings = [0];

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) || { r: 255, g: 255, b: 255 };

      // Validate coordinates
      if (isNaN(arc.startLat) || isNaN(arc.startLng) || isNaN(arc.endLat) || isNaN(arc.endLng)) {
        continue;
      }

      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng and validate data
    const filteredPoints = points.filter((v, i, a) => {
      // First check if the point has valid coordinates
      if (!v || isNaN(v.lat) || isNaN(v.lng) || v.lat === null || v.lng === null) {
        return false;
      }

      // Then check for duplicates
      return (
        a.findIndex(
          (v2) =>
            v2 &&
            !isNaN(v2.lat) &&
            !isNaN(v2.lng) &&
            Math.abs(v2.lat - v.lat) < 0.001 &&
            Math.abs(v2.lng - v.lng) < 0.001,
        ) === i
      );
    });

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor((e) => {
          return defaultProps.polygonColor;
        });
      startAnimation();
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    // Filter valid data
    const validData = data.filter(
      (d) => !isNaN(d.startLat) && !isNaN(d.startLng) && !isNaN(d.endLat) && !isNaN(d.endLng) && !isNaN(d.arcAlt),
    );

    globeRef.current
      .arcsData(validData)
      .arcStartLat((d) => {
        const lat = (d as { startLat: number }).startLat;
        return isNaN(lat) ? 0 : lat;
      })
      .arcStartLng((d) => {
        const lng = (d as { startLng: number }).startLng;
        return isNaN(lng) ? 0 : lng;
      })
      .arcEndLat((d) => {
        const lat = (d as { endLat: number }).endLat;
        return isNaN(lat) ? 0 : lat;
      })
      .arcEndLng((d) => {
        const lng = (d as { endLng: number }).endLng;
        return isNaN(lng) ? 0 : lng;
      })
      .arcColor((e: any) => (e as { color: string }).color || "#ffffff")
      .arcAltitude((e) => {
        const alt = (e as { arcAlt: number }).arcAlt;
        return isNaN(alt) ? 0.1 : alt;
      })
      .arcStroke((e) => {
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => {
        const order = (e as { order: number }).order;
        return isNaN(order) ? 1 : order;
      })
      .arcDashGap(15)
      .arcDashAnimateTime((e) => defaultProps.arcTime);

    globeRef.current
      .pointsData(validData)
      .pointColor((e) => (e as { color: string }).color || "#ffffff")
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor((e: any) => (t: any) => e.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;

      // Validate globeData before using
      const validGlobeData = globeData.filter(
        (d) => d && !isNaN(d.lat) && !isNaN(d.lng) && d.lat !== null && d.lng !== null,
      );

      if (validGlobeData.length === 0) return;

      numbersOfRings = genRandomNumbers(0, validGlobeData.length, Math.floor((validGlobeData.length * 4) / 5));

      globeRef.current.ringsData(validGlobeData.filter((d, i) => numbersOfRings.includes(i)));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export default function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight color={globeConfig.directionalLeftLight} position={new Vector3(-400, 100, 400)} />
      <directionalLight color={globeConfig.directionalTopLight} position={new Vector3(-200, 500, 200)} />
      <pointLight color={globeConfig.pointLight} position={new Vector3(-200, 500, 200)} intensity={0.8} />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  // Validate input
  if (!hex || typeof hex !== "string") {
    return { r: 255, g: 255, b: 255 }; // Default to white
  }

  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    // Validate parsed values
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return { r: 255, g: 255, b: 255 };
    }

    return { r, g, b };
  }

  return { r: 255, g: 255, b: 255 }; // Default to white if parsing fails
}

export function genRandomNumbers(min: number, max: number, count: number) {
  // Validate inputs
  if (isNaN(min) || isNaN(max) || isNaN(count) || min >= max || count <= 0) {
    return [];
  }

  const arr = [];
  const maxAttempts = count * 10; // Prevent infinite loops
  let attempts = 0;

  while (arr.length < count && attempts < maxAttempts) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
    attempts++;
  }

  return arr;
}
