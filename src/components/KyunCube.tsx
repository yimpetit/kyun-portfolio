"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom, GodRays } from "@react-three/postprocessing";
import { KyunGLB } from "./KyunGLB";
import { useEffect } from "react";

function CameraLookAt({ target }: any) {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt({ ...target }); // 카메라가 target 좌표를 바라보도록 설정
  }, [camera, target]);

  return null;
}

const ThreeScene = () => {
  return (
    <div className="w-full h-96">
      <Canvas
        shadows
        camera={{
          position: [5, 2, 5], // 카메라 위치 (x, y, z)
          fov: 50, // 카메라 시야(Field of View)
          near: 0.1, // 카메라 근거리 클리핑
          far: 1000, // 카메라 원거리 클리핑
        }}
      >
        <CameraLookAt target={[0, 0, 0]} />
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
        <KyunGLB scale={[2, 2, 2]} rotation={[0, -Math.PI / 4, 0]} />

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
          <planeGeometry args={[5, 5]} />
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
