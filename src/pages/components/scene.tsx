import { Suspense, useRef, useState } from "react";
import { Canvas, useLoader, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef<any>();
  const [speed, setSpeed] = useState<any>(140);
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
    if(speed !== 1) setSpeed(speed <=1 ? 1 : speed - Math.PI);
  });

  return (
    <OrbitControls
        autoRotate
        autoRotateSpeed={speed}
        args={[camera, gl.domElement]}
        ref={orbitRef}
    />
  );
};

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./model/scene.gltf");
    return (
        <>
            <primitive
                object={gltf.scene}
                scale={1 / 15}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
            />
        </>
    );
};

export default function Scene() {
    return (
        <div className="App">
            <Canvas style={{ minHeight: "30vh" }} camera={{ fov: 75, position: [0, 10, 20] }}>
                <Suspense fallback={null}>
                    <Model />
                    <ambientLight intensity={0.5} />
                    <Controls />
                </Suspense>
            </Canvas>
        </div>
    );
}