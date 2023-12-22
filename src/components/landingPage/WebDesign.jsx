import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from 'react'
import styled from "styled-components";
import { ReactLogo } from "./3D/React";

const Desc = styled.div`
  width: 200px;
  height: 140px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  right: 50px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
    const ref = useRef()
    return (
        <>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
                        false
                        <ReactLogo />
                        false
                    </Stage>
                </Suspense>
                <OrbitControls ref={ref} enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and
                ensuring your product is a market success.
            </Desc>
        </>
    )
}

export default WebDesign;