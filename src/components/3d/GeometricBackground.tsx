"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Float, Sphere, Box, Cone, Torus } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ 
  geometry, 
  position, 
  color, 
  scale = 1, 
  rotationSpeed = 1 
}: { 
  geometry: 'sphere' | 'box' | 'cone' | 'torus';
  position: [number, number, number];
  color: string;
  scale?: number;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * rotationSpeed;
      meshRef.current.rotation.y += 0.01 * rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const Shape = useMemo(() => {
    switch (geometry) {
      case 'sphere':
        return Sphere;
      case 'box':
        return Box;
      case 'cone':
        return Cone;
      case 'torus':
        return Torus;
      default:
        return Sphere;
    }
  }, [geometry]);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Shape ref={meshRef} args={[0.5]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.3}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Shape>
    </Float>
  );
}

function GeometricField() {
  const shapes = useMemo(() => [
    { geometry: 'sphere' as const, position: [-3, 1, -2] as [number, number, number], color: "#3b82f6", scale: 0.8, rotationSpeed: 1.2 },
    { geometry: 'box' as const, position: [3, -1, -1] as [number, number, number], color: "#8b5cf6", scale: 0.6, rotationSpeed: 0.8 },
    { geometry: 'cone' as const, position: [0, 2, -3] as [number, number, number], color: "#06b6d4", scale: 0.7, rotationSpeed: 1.5 },
    { geometry: 'torus' as const, position: [-2, -2, 1] as [number, number, number], color: "#ec4899", scale: 0.5, rotationSpeed: 1.1 },
    { geometry: 'sphere' as const, position: [2, 2, 2] as [number, number, number], color: "#10b981", scale: 0.9, rotationSpeed: 0.9 },
    { geometry: 'box' as const, position: [-1, 0, -1] as [number, number, number], color: "#f59e0b", scale: 0.4, rotationSpeed: 1.3 },
  ], []);

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          geometry={shape.geometry}
          position={shape.position}
          color={shape.color}
          scale={shape.scale}
          rotationSpeed={shape.rotationSpeed}
        />
      ))}
    </>
  );
}

export function GeometricBackground({ className }: { className?: string }) {
  return (
    <div className={`${className} w-full h-full`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        <pointLight position={[10, -10, 10]} intensity={0.4} color="#8b5cf6" />
        
        <GeometricField />
      </Canvas>
    </div>
  );
}

export default GeometricBackground;
