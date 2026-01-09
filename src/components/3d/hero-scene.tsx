"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const { clock, mouse } = state;
        // Rotate slightly based on mouse
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            mouse.y * 0.2,
            0.1
        );
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            mouse.x * 0.2,
            0.1
        );
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} scale={2.5} ref={meshRef}>
                <MeshDistortMaterial
                    color="#1e1e1e" // Dark charcoal
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.9} // Shiny metallic look
                    emissive="#7000ff" // Purple glow
                    emissiveIntensity={0.2}
                />
            </Sphere>
        </Float>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} intensity={1} color="#00ff9d" />
                <pointLight position={[-5, 5, -5]} intensity={10} color="#00f3ff" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
}
