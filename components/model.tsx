"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function PortfolioModel() {
  const modelRef = useRef<THREE.Group>(null);
  const pointerPosition = useRef({ x: 0, y: 0 });
  const { scene } = useGLTF("/ball.glb");

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      pointerPosition.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      pointerPosition.current.y =
        ((event.clientY / window.innerHeight) * 2 - 1);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useFrame((_, delta) => {
    if (!modelRef.current) {
      return;
    }

    const targetRotationX = pointerPosition.current.y * 0.8;
    const targetRotationY = pointerPosition.current.x * 1.4;

    modelRef.current.rotation.x = THREE.MathUtils.damp(
      modelRef.current.rotation.x,
      targetRotationX,
      5,
      delta,
    );

    modelRef.current.rotation.y = THREE.MathUtils.damp(
      modelRef.current.rotation.y,
      targetRotationY,
      5,
      delta,
    );
  });

  return (
    <group ref={modelRef}>
      <Center>
        <primitive object={scene} scale={7.5} />
      </Center>
    </group>
  );
}

export default function InteractiveModel() {
  return (
    <div className="hidden h-[300px] w-[300px] shrink-0 lg:block">
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 35,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 5, 5]} intensity={2.5} />
        <directionalLight position={[-4, -2, -3]} intensity={1} />

        <Suspense fallback={null}>
          <PortfolioModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/ball.glb");