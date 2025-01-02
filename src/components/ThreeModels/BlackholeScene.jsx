
import React, { Suspense } from 'react';
import HeroCamera from './HeroCamera'
import CanvasLoader from './CanvasLoader'
import DNA_GLB from './modelsGLB/DNA_GLB';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Blackhole from './modelsGLB/BlackHole';

const BlackholeScene = () => {
  return (
    <section>
        {/* 3D Sahne Alanı */}
        <div className="w-[200px] h-[300px] relative border border-gray-300 rounded-lg shadow-md">

            <Canvas className="w-full h-full items-center">
                <Blackhole />
            </Canvas>
        </div>
    </section>
  )
}

export default BlackholeScene