import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Starfield() {
  const mountRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    const canvas = renderer.domElement;
    mountRef.current.appendChild(canvas);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current?.contains(canvas)) {
        mountRef.current.removeChild(canvas);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
