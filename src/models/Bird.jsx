import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
    const birdRef = useRef();
    const directionRef = useRef(1);
    const targetRotationYRef = useRef(0);

    // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(birdScene);

    // Get access to the animations for the bird
    const { actions } = useAnimations(animations, birdRef);

    // Play the animation when the component mounts
    useEffect(() => {
        if (actions["Take 001"]) {
            actions["Take 001"].play();
        }
    }, [actions]);

    // Animation and movement logic
    useFrame((state, delta) => {
        if (!birdRef.current) return;

        birdRef.current.position.x += directionRef.current * delta * 0.5;
        birdRef.current.rotation.y += (targetRotationYRef.current - birdRef.current.rotation.y) * delta * 2;

        if (birdRef.current.position.x >= 5 || birdRef.current.position.x <= -5) {
            directionRef.current *= -1;
            targetRotationYRef.current += Math.PI;
        }
    });

    return (
        <mesh ref={birdRef} position={[0, 0, 0]}>
            <primitive object={scene} scale={[0.003, 0.003, 0.003]} />
        </mesh>
    );
};

export default Bird;
