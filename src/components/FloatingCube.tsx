import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Edges } from "@react-three/drei";
import type { Mesh } from "three";

const AnimatedCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <MeshDistortMaterial
          color="#f97316"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
        <Edges scale={1.02} threshold={15} color="#fb923c" />
      </mesh>
    </Float>
  );
};

const ParticleRing = () => {
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.5, 0.02, 16, 100]} />
      <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.5} />
    </mesh>
  );
};

const SecondRing = () => {
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.2, 0.015, 16, 100]} />
      <meshStandardMaterial color="#fb923c" emissive="#fb923c" emissiveIntensity={0.3} />
    </mesh>
  );
};

export const FloatingCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f97316" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1} />
        <AnimatedCube />
        <ParticleRing />
        <SecondRing />
      </Canvas>
    </div>
  );
};
