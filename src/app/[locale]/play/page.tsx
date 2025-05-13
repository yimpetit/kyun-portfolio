"use client";
import * as THREE from "three";
import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ShaderMaterial } from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 distortedUv = vUv;
    float dist = distance(vUv, uMouse);
    distortedUv += (uMouse - vUv) * 0.2 * exp(-10.0 * dist);

    vec4 color = texture2D(uTexture, distortedUv);
    gl_FragColor = color;
  }
`;

function DistortionPlane({ texture }: { texture: THREE.Texture }) {
  const materialRef = useRef<ShaderMaterial>(null);
  const { viewport } = useThree();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;
      materialRef.current?.uniforms.uMouse.value.set(x, y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uTime: { value: 0 },
        },
      }),
    [texture]
  );

  useFrame((state) => {
    shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <primitive object={shaderMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
}

export default function BackgroundDistortion() {
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load("/main_profile.jpeg"); // 퍼블릭 폴더에 이미지 넣어야 함
  }, []);

  return (
    <div>
      <Canvas>
        <DistortionPlane texture={texture} />
      </Canvas>
    </div>
  );
}
