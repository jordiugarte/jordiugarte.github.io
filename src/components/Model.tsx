import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei';
import { Box } from '@mui/material';

interface ModelProps {
  modelPath: string;
  scale?: number;
}

// Inner component that loads and renders the 3D model
function ModelMesh({ modelPath, scale = 1 }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  
  return (
    <Center>
      <primitive object={scene} scale={scale} />
    </Center>
  );
}

// Loading fallback component
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" wireframe />
    </mesh>
  );
}

interface Model3DViewerProps {
  modelPath: string;
  scale?: number;
  height?: string | number;
  backgroundColor?: string;
}

// Main exported component
function Model3DViewer({ 
  modelPath, 
  scale = 1, 
  height = 200,
  backgroundColor = 'transparent' 
}: Model3DViewerProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height,
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor,
      }}
    >
      <Canvas
        camera={{ position: [0, 5, 5], fov: 30 }}
        style={{ background: backgroundColor }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[30, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Environment for realistic reflections (optional) */}
        <Environment preset="city" />

        {/* Suspense wrapper for async model loading */}
        <Suspense fallback={<Loader />}>
          <ModelMesh modelPath={modelPath} scale={scale} />
        </Suspense>

        {/* Controls for rotating/zooming the model */}
        <OrbitControls 
          enablePan={true}
          enableZoom={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </Box>
  );
}

export default Model3DViewer;
