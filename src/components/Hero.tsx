'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function Hero3D() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.5;
  });
  return (
    <mesh ref={meshRef} scale={1.2}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color="orange" metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10" />
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Hero3D />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white z-20">
        <h1 className="text-5xl font-bold mb-6 leading-tight">WE BUILD DIGITAL EXPERIENCES THAT MOVE.</h1>
        <p className="text-xl max-w-2xl mb-8">Creating immersive, interactive, and unforgettable digital experiences that push the boundaries of technology and creativity.</p>
        <a href="/work" className="btn-primary px-8 py-4 rounded-full text-lg">EXPLORE OUR WORK</a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-white/70 z-20">
        <div className="w-8 h-px bg-white/70" />
        <span className="text-sm tracking-widest">SCROLL DOWN</span>
      </div>
    </section>
  );
}