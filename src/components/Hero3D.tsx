"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  // Создаём 5000 частиц
  const points = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Позиции в сфере
      const r = 2.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Яркие цвета: розовый, фиолетовый, голубой, оранжевый
      const colorChoice = Math.random();
      if (colorChoice < 0.25) {
        // Розовый
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 0.7;
      } else if (colorChoice < 0.5) {
        // Фиолетовый
        colors[i * 3] = 0.6;
        colors[i * 3 + 1] = 0.2;
        colors[i * 3 + 2] = 1;
      } else if (colorChoice < 0.75) {
        // Голубой
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 1;
      } else {
        // Оранжевый
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.5;
        colors[i * 3 + 2] = 0;
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Вращение частиц
      ref.current.rotation.x -= delta * 0.1;
      ref.current.rotation.y -= delta * 0.15;
      
      // Пульсация
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Points ref={ref} positions={points.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        colors={points.colors}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingShapes() {
  const shapes = useRef<THREE.Mesh[]>([]);
  
  const geometries = useMemo(() => [
    new THREE.IcosahedronGeometry(0.3, 0),
    new THREE.OctahedronGeometry(0.4, 0),
    new THREE.TetrahedronGeometry(0.35, 0),
    new THREE.TorusGeometry(0.25, 0.1, 8, 16),
  ], []);
  
  const colors = ["#ff0080", "#7c3aed", "#00d4ff", "#ff8000"];
  
  useFrame((state, delta) => {
    shapes.current.forEach((shape, i) => {
      // Вращение фигур
      shape.rotation.x += delta * 0.2 * (i + 1);
      shape.rotation.y += delta * 0.3 * (i + 1);
      
      // Движение по синусоиде
      shape.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.5;
    });
  });

  return (
    <>
      {geometries.map((geo, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) shapes.current[i] = el; }}
          position={[
            (i - 1.5) * 1.2,
            0,
            Math.sin(i) * 2
          ]}
        >
          <primitive object={geo} attach="geometry" />
          <meshStandardMaterial
            color={colors[i]}
            emissive={colors[i]}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0080" />
      
      {/* Частицы */}
      <Particles />
      
      {/* Плавающие фигуры */}
      <FloatingShapes />
    </Canvas>
  );
}
