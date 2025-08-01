"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedText3D({ text, position = [0, 0, 0] }: { text: string, position?: [number, number, number] }) {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        ref={textRef}
        fontSize={1.5}
        position={position}
        color="#3b82f6"
        anchorX="center"
        anchorY="middle"
      >
        {text}
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.8}
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </Text>
    </Float>
  );
}

export function Text3DComponent({ className, text = "Welcome" }: { className?: string, text?: string }) {
  return (
    <div className={`${className} w-full h-full`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        <AnimatedText3D text={text} />
      </Canvas>
    </div>
  );
}

export default Text3DComponent;
