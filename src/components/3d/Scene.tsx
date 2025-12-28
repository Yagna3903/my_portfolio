"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CloudNetwork } from "@/components/3d/CloudNetwork";
import { Environment, OrbitControls } from "@react-three/drei";

export function Scene({ theme }: { theme: string | undefined }) {
    return (
        <div className="absolute inset-0 -z-10 hidden md:block">
            <Canvas camera={{ position: [0, 0, 20], fov: 45 }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    {/* Fog for depth */}
                    <fog attach="fog" args={['#030712', 5, 30]} />

                    {/* Neutral ambient light */}
                    <ambientLight intensity={0.5} />
                    {/* Directional light that doesn't colorize too much */}
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />

                    <CloudNetwork theme={theme} />
                    <Environment preset="city" />

                    {/* Interactive Controls - Drag to rotate */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI - Math.PI / 4}
                        autoRotate={false}
                        rotateSpeed={0.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
