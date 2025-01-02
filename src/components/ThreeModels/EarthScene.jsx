import { useGLTF } from '@react-three/drei'
import React from 'react'
import earthModel from './models/earth.glb'
import { Group } from 'lucide-react';

const EarthScene = () => {

    const { nodes } = useGLTF(earthModel);

  return (
    <group>
        <mesh {...nodes.earthModel} ></mesh>
    </group>
  )
}

export default EarthScene