"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Pure, seedable pseudo-random generator
function createRandom(seed = 1) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function InteractiveScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;
  
  // Distribute particles in a spherical field (deterministic & pure)
  const positions = useMemo(() => {
    const random = createRandom(42);
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = random();
      const v = random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5.0 + random() * 6.0; // radius between 5 and 11
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  // Store original colors for neon distribution
  const colors = useMemo(() => {
    const random = createRandom(1337);
    const cols = new Float32Array(count * 3);
    const cyan = new THREE.Color("#00f2fe");
    const purple = new THREE.Color("#9b51e0");
    const green = new THREE.Color("#00ff87");
    
    for (let i = 0; i < count; i++) {
      let mixedColor;
      const rand = random();
      if (rand < 0.4) {
        mixedColor = cyan;
      } else if (rand < 0.8) {
        mixedColor = purple;
      } else {
        mixedColor = green;
      }
      
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }
    return cols;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.pointer; // Normalised mouse positions (-1 to 1)

    // Parallax camera easing
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 3.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 3.5, 0.05);
    state.camera.lookAt(0, 0, 0);

    // Rotate particle system slowly
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = time * 0.01;
    }
  });

  return (
    <group>
      {/* 3D Particle Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors
          transparent
          opacity={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <InteractiveScene />
      </Canvas>
    </div>
  );
}
