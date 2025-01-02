import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import Blackhole from "./modelsGLB/BlackHole"; // Blackhole modeli

const BlackholeScene = () => {
  return (
    <div className="h-full w-full ">
      <Canvas>

        {/* Işıklar */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        {/* 3D Model */}
        <Blackhole scale={1.5} />
      </Canvas>
    </div>
  );
};

export default BlackholeScene;
