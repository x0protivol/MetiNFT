import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GUI } from "pyqt";
import { CannonJS } from "cannon.js";
import { HowlerJS } from "howler.js";
import { AFrame } from "aframe";

const ModelViewer = () => {
  const [container, setContainer] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [camera, setCamera] = useState(null);
  const [scene, setScene] = useState(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRenderer(new THREE.WebGLRenderer({ antialias: true }));
    setScene(new THREE.Scene());
    setCamera(
      new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      )
    );

    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const objLoader = new OBJLoader();
    objLoader.load("model.obj", (object) => {
      setModel(object);
      scene.add(model);
      setLoading(false);
    });

    camera.position.z = 5;

    const physicsWorld = new CannonJS.World();
    physicsWorld.addBody(model);

    const audio = new HowlerJS.Howl({
      src: ["audio.mp3"],
    });

    let animationId = null;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      physicsWorld.step(1 / 60);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      audio.stop();
    };
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div ref={(el) => setContainer(el)}>
      <GUI>
        {/* Add controls for camera and model movement */}
      </GUI>
    </div>
  );
};

export default ModelViewer;