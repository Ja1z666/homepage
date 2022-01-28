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
    const gltf = useLoader(GLTFLoader, "/model/scene.gltf");
    return (
        <>
            <primitive
                object={gltf.scene}
                scale={3.5}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
            />
        </>
    );
};

export default function Scene() {
    return (
        <div className="scene">
            <Canvas style={{ minHeight: "300px"}} orthographic camera={{ zoom: 12, position: [0, 10, 20] }}>
                <Suspense fallback={null}>
                    <Model />
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={0.8} />
                    <spotLight intensity={0.3} position={[10, 10, 10]} />
                    <Controls />
                </Suspense>
            </Canvas>
        </div>
    );
}