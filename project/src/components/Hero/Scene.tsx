import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model: React.FC = () => {
  const { scene } = useGLTF('/base_basic_shaded.glb');

  return (
    <primitive
      object={scene}
      scale={2}
      position={[7, -2, 0]} // Increased x-coordinate further to move right
      rotation={[0, -Math.PI / 2+0.5, 0]} // Rotated by -90 degrees around the Y-axis to show the front
    />
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [7, 2, 7], fov: 50 }} // Adjusted camera to accommodate the new position and rotation
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[9, 7, 7]} intensity={1} /> {/* Adjusted light position */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        target={[3, -1.5, 0]} // Keep the orbit target somewhat central
      />
    </Canvas>
  );
};

export default Scene;