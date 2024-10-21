"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // 배경을 투명하게 설정
    renderer.shadowMap.enabled = true; // 그림자 활성화
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 그림자 품질 설정

    mountRef.current.appendChild(renderer.domElement);

    // Bloom 관련 설정
    const bloomLayer = new THREE.Layers();
    bloomLayer.set(1); // Bloom 효과를 적용할 레이어 설정

    const bloomComposer = new EffectComposer(renderer);
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    // **조명 추가 및 그림자 설정**
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 장면 전체를 밝히는 빛
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100); // 광원 추가
    pointLight.position.set(5, 5, 5); // 빛의 위치 설정
    pointLight.castShadow = true; // 그림자 활성화
    pointLight.shadow.mapSize.width = 1024; // 그림자 맵 크기 설정
    pointLight.shadow.mapSize.height = 1024;
    scene.add(pointLight);

    // 바닥 추가 (그림자를 받을 수 있도록 설정)
    const planeGeometry = new THREE.PlaneGeometry(500, 500);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 }); // 그림자를 잘 보이게 하려면 ShadowMaterial 사용
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.5;
    plane.receiveShadow = true; // 바닥이 그림자를 받음
    scene.add(plane);

    // GLTFLoader로 GLB 파일 로드
    const loader = new GLTFLoader();
    loader.load("/models/kyun_cube.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // 특정 메쉬에만 Bloom 효과 적용 및 그림자 설정
      model.traverse((object: any) => {
        if (object.isMesh) {
          if (object.name === "Kyun") {
            object.layers.enable(1); // Bloom 효과를 적용할 메쉬
            object.castShadow = true; // 그림자를 던질 메쉬
          } else {
            object.layers.disable(1);
            object.castShadow = true; // 그림자를 던질 메쉬로 설정
          }
          object.receiveShadow = true; // 그림자를 받을 수 있도록 설정
        }
      });

      camera.position.set(2, 1, 2);
      camera.lookAt(0, 0, 0);

      const animate = () => {
        requestAnimationFrame(animate);

        // 일반 렌더링
        renderer.autoClear = false;
        renderer.clear();
        camera.layers.set(0);
        renderer.render(scene, camera);

        // Bloom 렌더링
        bloomComposer.render();
      };

      animate();
    });

    // 창 크기 변경 시 리사이즈 처리
    const handleResize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        bloomComposer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div id="three-container" className="w-full h-96" ref={mountRef} />;
};

export default ThreeScene;
