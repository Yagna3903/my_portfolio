"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Sphere, Torus } from "@react-three/drei";

export function CloudNetwork({ theme }: { theme: string | undefined }) {
    const { viewport } = useThree();
    // Use aspect ratio to detect mobile (portrait mode)
    // viewport.width < 5 was failing because camera is far away (z=20)
    const isMobile = viewport.width < viewport.height;

    // Theme-based Colors (Minimalist Palette)
    const isDark = theme === 'dark' || !theme; // Default to dark if undefined

    const colors = {
        core: isDark ? "#ffffff" : "#475569", // White vs Slate 600
        coreEmissive: isDark ? "#ffffff" : "#475569",
        shell: isDark ? "#a5b4fc" : "#94a3b8", // Indigo vs Slate 400
        ring: isDark ? "#ffffff" : "#64748b", // White vs Slate 500
        packet1: isDark ? "#ec4899" : "#db2777", // Pink 500 vs Pink 600 (darker)
        packet2: isDark ? "#06b6d4" : "#2563eb", // Cyan vs Blue 600
    };

    // "The Cyber Gyroscope" (Desktop) vs "Tech Core" (Mobile)

    // Animation Refs
    const packet1 = useRef<THREE.Mesh>(null!);
    const packet2 = useRef<THREE.Mesh>(null!);
    const ring1Ref = useRef<THREE.Group>(null!);
    const ring2Ref = useRef<THREE.Group>(null!);
    const coreRef = useRef<THREE.Group>(null!);
    const mobileCoreRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        // Desktop Animation
        if (!isMobile) {
            if (coreRef.current) {
                coreRef.current.rotation.y = time * 0.2;
                coreRef.current.rotation.x = time * 0.1;
            }
            if (ring1Ref.current) {
                ring1Ref.current.rotation.x = time * 0.1;
                ring1Ref.current.rotation.y = time * 0.15;
                if (packet1.current) {
                    const angle = time * 0.8;
                    packet1.current.position.x = Math.cos(angle) * 2.2;
                    packet1.current.position.y = Math.sin(angle) * 2.2;
                    packet1.current.position.z = 0;
                }
            }
            if (ring2Ref.current) {
                ring2Ref.current.rotation.x = time * 0.12 + Math.PI / 2;
                ring2Ref.current.rotation.y = time * -0.1;
                if (packet2.current) {
                    const angle = time * 0.6 + 2;
                    const rad = 3;
                    packet2.current.position.x = Math.cos(angle) * rad;
                    packet2.current.position.y = Math.sin(angle) * rad;
                    packet2.current.position.z = 0;
                }
            }
        }
        // Mobile Animation (Simple Rotation)
        else {
            if (mobileCoreRef.current) {
                mobileCoreRef.current.rotation.y = time * 0.15;
                mobileCoreRef.current.rotation.z = time * 0.05;
            }
        }
    });

    // --- MOBILE VIEW: "The Digital Brain" ---
    // A clean, single geometric structure. No messy rings.
    if (isMobile) {
        return (
            <group scale={1.2} position={[0, -1.5, 0]} ref={mobileCoreRef}>
                {/* Main Wireframe Structure */}
                <Sphere args={[1.5, 24, 24]}>
                    <meshStandardMaterial
                        color={colors.shell}
                        emissive={colors.shell}
                        emissiveIntensity={0.2}
                        wireframe
                        transparent
                        opacity={0.3}
                    />
                </Sphere>
                {/* Inner Glow Core */}
                <Sphere args={[0.9, 32, 32]}>
                    <meshStandardMaterial
                        color={colors.core}
                        emissive={colors.coreEmissive}
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.5}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
                {/* Floating Data Particles (Constellation) */}
                {[...Array(8)].map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const yOffset = Math.sin(i) * 0.5;
                    return (
                        <Sphere key={i} args={[0.06, 16, 16]} position={[Math.cos(angle) * 1.8, yOffset, Math.sin(angle) * 1.8]}>
                            <meshStandardMaterial color={colors.packet2} emissive={colors.packet2} emissiveIntensity={0.8} />
                        </Sphere>
                    )
                })}
            </group>
        );
    }

    // --- DESKTOP VIEW: "The Cyber Gyroscope" ---
    return (
        <group scale={2} position={[0, 0, 0]}>

            {/* CENTRAL CORE */}
            <group ref={coreRef}>
                <Sphere args={[0.8, 32, 32]}>
                    <meshStandardMaterial
                        color={colors.core}
                        emissive={colors.coreEmissive}
                        emissiveIntensity={0.2}
                        roughness={0.1}
                        metalness={0.9}
                        transparent={true}
                        opacity={0.4}
                    />
                </Sphere>
                <Sphere args={[1.2, 16, 16]}>
                    <meshStandardMaterial
                        color={colors.shell}
                        emissive={colors.shell}
                        emissiveIntensity={0.1}
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </Sphere>
                {[...Array(6)].map((_, i) => {
                    const angle = (i / 6) * Math.PI * 2;
                    return (
                        <Sphere key={i} args={[0.08, 16, 16]} position={[Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0]}>
                            <meshStandardMaterial color={colors.core} emissive={colors.core} emissiveIntensity={0.8} />
                        </Sphere>
                    )
                })}
            </group>

            {/* ORBITAL RINGS */}
            <group ref={ring1Ref}>
                <Torus args={[2.2, 0.03, 16, 100]}>
                    <meshStandardMaterial color={colors.ring} transparent opacity={0.15} emissive={colors.ring} emissiveIntensity={0.1} />
                </Torus>
                <mesh ref={packet1}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial color={colors.packet1} emissive={colors.packet1} emissiveIntensity={0.8} />
                </mesh>
            </group>

            <group ref={ring2Ref}>
                <Torus args={[3, 0.03, 16, 100]}>
                    <meshStandardMaterial color={colors.ring} transparent opacity={0.1} emissive={colors.ring} emissiveIntensity={0.05} />
                </Torus>
                <mesh ref={packet2}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={colors.packet2} emissive={colors.packet2} emissiveIntensity={0.8} />
                </mesh>
            </group>

        </group>
    );
}
