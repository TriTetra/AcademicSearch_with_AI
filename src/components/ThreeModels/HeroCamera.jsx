import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef, useState } from 'react'


const HeroCamera = ({children, isMobile}) => {

    const groupRef = useRef();
    const [isPointerOver, setIsPointerOver] = useState(false); // Fare durumu

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);

        if(!isMobile){
          if (isPointerOver) {
            // Fare üzerindeyken grup hareket eder
            easing.dampE(
              groupRef.current.rotation,
              [state.pointer.y / 3, -state.pointer.x / 5, 0],
              0.25,
              delta
            );
          } else {
            // Fare ayrıldıktan sonra eski pozisyona döner
            easing.dampE(groupRef.current.rotation, [0, 0, 0], 0.25, delta);
          }
        }
    })

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3} onPointerOver={() => setIsPointerOver(true)} onPointerOut={() => setIsPointerOver(false)}>
        {children}
    </group>
  )
}

export default HeroCamera