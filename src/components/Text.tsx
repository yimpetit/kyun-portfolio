"use client";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  OrbitControls,
  Reflector,
  useGLTF,
} from "@react-three/drei";
import { EffectComposer, Bloom, GodRays } from "@react-three/postprocessing";
import { KyunGLB } from "./KyunGLB";
import { useRef } from "react";

const ThreeScene = () => {
  return (
    <div className="w-full h-96">
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <hemisphereLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]} // 태양의 위치
          intensity={1} // 빛의 강도
          // castShadow // 그림자 생성
          shadow-mapSize-width={2048} // 그림자 해상도
          shadow-mapSize-height={2048}
          shadow-camera-far={50} // 그림자가 적용되는 거리
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* <Reflector
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          args={[5, 5]} // 바닥 크기
          resolution={512} // 반사 해상도
          mirror={0.7} // 반사 강도
          // mixBlur={3} // 블러 처리
          mixBlur={4}
          mixStrength={2} // 반사의 강도
          depthScale={1} // 깊이 스케일
          minDepthThreshold={0.1}
          maxDepthThreshold={1}
        /> */}
        <KyunGLB scale={[2, 2, 2]} rotation={[0, -Math.PI / 4, 0]} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
          <planeGeometry args={[5, 5]} />
          {/* <meshStandardMaterial color={"#29253d"} /> */}
          <MeshReflectorMaterial
            blur={[400, 300]}
            resolution={2048}
            mixBlur={1}
            mixStrength={7}
            roughness={1}
            depthScale={0}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#29253d"
            metalness={0.7}
            mirror={0}
          />
        </mesh>
        {/* <mesh position={[1, 1, 3]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial
            color="orange"
            emissive="yellow"
            emissiveIntensity={3}
          />
        </mesh> */}
        <EffectComposer>
          <Bloom
            intensity={1} // Bloom 강도
            luminanceThreshold={0.1} // Bloom이 적용되는 밝기 임계값
            luminanceSmoothing={0.9} // Bloom이 부드럽게 적용되는 정도
          />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
