import React, { useRef } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function KyunGLB(props: any) {
  const { nodes, materials }: any = useGLTF<any>("/models/kyun_cube.glb");

  const boxRef = useRef<any>();

  useFrame(() => {
    if (boxRef.current) {
      // boxRef.current.rotation.x += 0.01; // X축 회전
      boxRef.current.rotation.y -= 0.001; // Y축 회전
    }
  });

  return (
    <group {...props} dispose={null} ref={boxRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kyun.geometry}
        // material={materials.text}
        position={[-0.416, 0.083, 0.428]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial emissive="#86bdff" emissiveIntensity={0.3} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kyun002.geometry}
        material={materials.text}
        position={[-0.425, 0.083, -0.423]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <meshPhongMaterial emissive="#86bdff" emissiveIntensity={0.3} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kyun001.geometry}
        material={materials.text}
        position={[-0.416, 0.083, -0.434]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial emissive="#86bdff" emissiveIntensity={0.3} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kyun003.geometry}
        material={materials.text}
        position={[0.417, 0.083, -0.423]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <meshPhongMaterial emissive="#86bdff" emissiveIntensity={0.3} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[-0.027, 0.629, 0.035]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.448, -0.029, -0.448]}
      >
        <MeshReflectorMaterial
          blur={[400, 300]}
          resolution={2048}
          mixBlur={1}
          mixStrength={2}
          roughness={1}
          depthScale={0}
          minDepthThreshold={0}
          maxDepthThreshold={1.4}
          color="#5c5967"
          metalness={1}
          mirror={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[-0.027, 0.044, 0.035]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.448, -0.029, -0.448]}
      >
        <MeshReflectorMaterial
          blur={[400, 300]}
          resolution={2048}
          mixBlur={1}
          mixStrength={8}
          roughness={1}
          depthScale={0}
          minDepthThreshold={0}
          maxDepthThreshold={1.4}
          color="#5c5967"
          metalness={1}
          mirror={0}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/kyun_cube.glb");
