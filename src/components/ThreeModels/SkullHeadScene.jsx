import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import SkullHead from "./modelsGLB/SkullHead";
import CanvasLoader from "./CanvasLoader";

const AnimatedSkull = () => {
  const skullRef = useRef(); // Skull modeline referans

  // Animasyonu ve pozisyonu ayarla
  useFrame(() => {
    if (skullRef.current) {
      // Y ekseni etrafında döndürme
      skullRef.current.rotation.y += 0.009;

      // Yukarı ve aşağı hareket (opsiyonel)
      skullRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5 - 1.5; // -1.5 ile daha aşağıda
    }
  });

  return (
    <group ref={skullRef}>
      {/* SkullHead modelini manuel pozisyonlandır */}
      <SkullHead scale={0.2} position={[0, 1, 0]} /> {/* -2 ile daha aşağıya taşıdık */}
    </group>
  );
};

const SkullHeadScene = () => {
  return (
    <div className="h-full w-full">
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
            {/* Işıklar */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

            {/* 3D Model */}
            <AnimatedSkull />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SkullHeadScene;
