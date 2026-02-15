import React from 'react'
import { OrbitControls } from '@react-three/drei'

const Dog = () => {
    return (
        <>
            <mesh>
                <meshBasicMaterial color={0x00FF00} />
                <boxGeometry args={[1, 1, 1]} />
            </mesh>
            <OrbitControls />
        </>
    )
}

export default Dog