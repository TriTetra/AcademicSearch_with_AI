
import React, { Suspense } from 'react';
import HeroCamera from './HeroCamera'
import CanvasLoader from './CanvasLoader'
import Turtle_3D from './modelsGLB/Turtle_3D'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

const TurtleScene = () => {
  return (
    <section>
        {/* 3D Sahne Alanı */}
        <div className="w-[400px] h-[600px] relative border border-gray-300 rounded-lg shadow-md">

            <Canvas className="w-full h-full items-center">
            <Suspense fallback={<CanvasLoader />}>

                {/* Kamera */}
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <HeroCamera>
                <Turtle_3D 
                    position={[0.2, -7.5, -10.0]}
                    rotation={[3.4, -7.8, 3.3]}
                    scale={[0.10, 0.10, 0.10]}
                />
                </HeroCamera>

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />

            </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default TurtleScene