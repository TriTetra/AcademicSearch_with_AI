
import React, { Suspense } from 'react';
import HeroCamera from './HeroCamera'
import CanvasLoader from './CanvasLoader'
import DNA_GLB from './modelsGLB/DNA_GLB';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

const HumanDNAScene = () => {
  return (
    <section>
        {/* 3D Sahne Alanı */}
        <div className="w-[200px] h-[300px] relative border border-gray-300 rounded-lg shadow-md">

            <Canvas className="w-full h-full items-center">
            <Suspense fallback={<CanvasLoader />}>

                {/* Kamera */}
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <HeroCamera>
                <DNA_GLB scale={7}/>
                </HeroCamera>

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />

            </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default HumanDNAScene