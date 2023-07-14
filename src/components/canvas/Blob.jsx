import React, { useMemo, useRef, Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";  

const Blob = ({ isMobile }) => {
  const mesh = useRef();
  const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });
  return (
    <mesh
      ref={mesh}
      scale={1.68}
      position={[0, -1, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const BlobCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  
      return (
      <Canvas
        camera={{position: [0,0,8]}}
        gl={{ preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
          enableZoom={false}
          maxPolarAngle = {Math.PI / 2}
          minPolarAngle = {Math.PI / 2}
          />
          <Blob isMobile={isMobile}/>
        </Suspense>
  
        <Preload all />
      </Canvas>
    )
}

export default BlobCanvas;