import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const textures = {
  "Phishing Detector": "/textures/earth.jpg",
  "Malware Analysis": "/textures/mars.jpg",
  "SQLi Tester": "/textures/sun.jpg",
};

const slugs = {
  "Phishing Detector": "phishing-detector",
  "Malware Analysis": "malware-analysis",
  "SQLi Tester": "sqli-tester",
};

export default function PlanetCard({ project }) {
  const containerRef = useRef();
  const planetRef = useRef();
  const navigate = useNavigate();
  const [spinningFast, setSpinningFast] = useState(false);

  useEffect(() => {
    const width = 200;
    const height = 200;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(3, 3, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 10);
    pointLight.position.set(-3, 2, 2);
    scene.add(pointLight);

    const textureLoader = new THREE.TextureLoader();
    const texturePath = textures[project.name];

    textureLoader.load(texturePath, (texture) => {
      const geometry = new THREE.SphereGeometry(1, 64, 64);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.3,
        metalness: 0.4,
      });

      const planet = new THREE.Mesh(geometry, material);
      planetRef.current = planet;
      scene.add(planet);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.autoRotate = false;

      const animate = () => {
        if (planetRef.current) {
          planetRef.current.rotation.y += spinningFast ? 0.25 : 0.002;
        }
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    });

    return () => {
      if (
        renderer &&
        renderer.domElement &&
        containerRef.current?.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [project.name, spinningFast]);

  const handleClick = () => {
    setSpinningFast(true);
    setTimeout(() => {
      const slug = slugs[project.name];
      if (slug) navigate(`/project/${slug}`);
    }, 800); // מחכה לרגע האפקט
  };

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 1 }}
      animate={spinningFast ? { opacity: 0.4 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div ref={containerRef} className="w-[200px] h-[200px]"></div>
      <h2 className="text-white mt-2 font-semibold text-center">
        {project.name}
      </h2>
    </motion.div>
  );
}
