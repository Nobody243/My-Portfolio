"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedSphere({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingGeometry() {
  const shapes = useMemo(() => [
    { position: [-4, 2, -2] as [number, number, number], color: "#3b82f6", scale: 0.8 },
    { position: [4, -1, -1] as [number, number, number], color: "#8b5cf6", scale: 1.2 },
    { position: [0, 3, -3] as [number, number, number], color: "#06b6d4", scale: 0.6 },
    { position: [-2, -2, 1] as [number, number, number], color: "#ec4899", scale: 0.9 },
    { position: [3, 1, 2] as [number, number, number], color: "#10b981", scale: 0.7 },
  ], []);

  return (
    <>
      {shapes.map((shape, index) => (
        <AnimatedSphere
          key={index}
          position={shape.position}
          color={shape.color}
          scale={shape.scale}
        />
      ))}
    </>
  );
}

export function Scene3D({ className }: { className?: string }) {
  return (
    <div className={`${className} w-full h-full`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Environment preset="studio" />
        
        <FloatingGeometry />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;
