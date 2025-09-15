import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

export const LogoContainer = styled.div`
  width: 300px;
  height: 200px;
  margin: 0 auto;
`;

export const ThreeJSLogo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // 기본 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000); // 정사각형 비율
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300); // 🟣 조그맣게!
    mount.appendChild(renderer.domElement);

    // 조명
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Font 로드 + 텍스트 만들기
    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const geometry = new TextGeometry('ㅎㅁㅇ', {
        font,
        size: 5,
        height: 2,
        bevelEnabled: true,
        bevelThickness: 0.2,
        bevelSize: 0.3,
        bevelSegments: 5,
      });

      geometry.computeBoundingBox();
      const centerOffset = (geometry.boundingBox.max.x - geometry.boundingBox.min.x) / 2;

      const material = new THREE.MeshPhongMaterial({ color: 0xff66aa });
      const textMesh = new THREE.Mesh(geometry, material);
      textMesh.position.x = -centerOffset;

      scene.add(textMesh);

      // 클릭 감지용 Raycaster
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const onClick = (event) => {
        const bounds = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(textMesh);

        if (intersects.length > 0) {
          // 반응: 색 바꾸기
          material.color.set(Math.random() * 0xffffff);
          console.log('Clicked!');
        }
      };

      renderer.domElement.addEventListener('click', onClick);

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      mount.innerHTML = '';
    };
  }, []);

  return <LogoContainer ref={mountRef} />;
};

// export const ThreeJSLogo = () => {

//   const mountRef = useRef(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cubeRef = useRef(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

//     renderer.setSize(300, 200);
//     renderer.setClearColor(0x000000, 0);
//     mount.appendChild(renderer.domElement);

//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(1, 1, 1).normalize();
//     scene.add(light);

//     const loader = new FontLoader();
//     loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
//       const textGeo = new TextGeometry('ㅅㅎㅇ', {
//         font,
//         size: 1,
//         height: 1,
//         curveSegments: 12,
//         bevelEnabled: true,
//         bevelThickness: 0.1,
//         bevelSize: 0.2,
//         bevelSegments: 3,
//       });

//       const material = new THREE.MeshPhongMaterial({ color: 0xff66aa });
//       const textMesh = new THREE.Mesh(textGeo, material);

//       // 중앙 정렬
//       textGeo.computeBoundingBox();
//       const centerOffset =
//         (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x) / 2;
//       textMesh.position.x = -centerOffset;

//       scene.add(textMesh);

//       // 애니메이션
//       const animate = () => {
//         camera.position.z = 30;
//         requestAnimationFrame(animate);
//         textMesh.rotation.y += 0.01;
//         renderer.render(scene, camera);
//       };

//       animate();
//     });

//     // cleanup
//     return () => {
//       mount.innerHTML = '';
//     };
//   }, []);

//   return (
//     <LogoContainer
//       ref={mountRef}
//     />
//   );
// }

// export const ThreeJSLogo = () => {
//   const mountRef = useRef(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cubeRef = useRef(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
//     renderer.setSize(300, 200);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);

//     const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
//     const material = new THREE.MeshBasicMaterial({ 
//       color: 0x007bff,
//       wireframe: true 
//     });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 4;

//     sceneRef.current = scene;
//     rendererRef.current = renderer;
//     cubeRef.current = cube;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (cubeRef.current) {
//         cubeRef.current.rotation.x += 0.008;
//         cubeRef.current.rotation.y += 0.008;
//       }
//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   return <LogoContainer ref={mountRef} />;
// };