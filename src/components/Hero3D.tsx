"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);

  // Создаём 10000 частиц - ещё больше!
  const points = useMemo(() => {
    const positions = new Float32Array(10000 * 3);
    const colors = new Float32Array(10000 * 3);

    for (let i = 0; i < 10000; i++) {
      // Позиции в очень большой сфере
      const r = 6 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Яркие цвета: розовый и голубой
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        // Розовый/малиновый
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8;
      } else {
        // Голубой/циан
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.3;
        colors[i * 3 + 2] = 1;
      }
    }

    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Вращение частиц
      ref.current.rotation.x -= delta * 0.03;
      ref.current.rotation.y -= delta * 0.05;

      // Пульсация
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Points ref={ref} positions={points.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        colors={points.colors}
        opacity={1}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingRings() {
  const rings = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    rings.current.forEach((ring, i) => {
      // Вращение колец
      ring.rotation.x += delta * 0.1 * (i + 1);
      ring.rotation.z += delta * 0.15 * (i + 1);

      // Движение по синусоиде
      ring.position.y = Math.sin(state.clock.elapsedTime * 0.4 + i * 0.5) * 0.8;
    });
  });

  const colors = ["#ff0080", "#00d4ff", "#ff1493"];

  return (
    <>
      {colors.map((color, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh
            ref={(el) => { if (el) rings.current[i] = el; }}
            position={[(i - 1) * 3.5, 0, 0]}
          >
            <torusGeometry args={[1.2, 0.08, 16, 100]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={2}
              roughness={0.1}
              metalness={1}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function FloatingSpheres() {
  const spheres = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    spheres.current.forEach((sphere, i) => {
      sphere.rotation.y += delta * 0.2;
      sphere.position.x = Math.sin(state.clock.elapsedTime * 0.3 + i) * 4;
      sphere.position.z = Math.cos(state.clock.elapsedTime * 0.3 + i) * 3;
    });
  });

  const colors = ["#ff69b4", "#00ced1", "#ff1493"];

  return (
    <>
      {colors.map((color, i) => (
        <Float key={i} speed={3} rotationIntensity={1} floatIntensity={1}>
          <mesh
            ref={(el) => { if (el) spheres.current[i] = el; }}
            position={[0, (i - 1) * 2, 0]}
          >
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={1.5}
              roughness={0.1}
              metalness={0.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ff0080" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#00d4ff" />
      <pointLight position={[0, 0, 10]} intensity={1} color="#ff1493" />

      {/* Частицы */}
      <Particles />

      {/* Плавающие кольца */}
      <FloatingRings />

      {/* Плавающие сферы */}
      <FloatingSpheres />
    </Canvas>
  );
}
