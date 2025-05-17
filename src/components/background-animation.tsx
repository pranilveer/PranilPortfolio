import { useRef  } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleProps {
  darkMode: boolean;
}

const Particles: React.FC<ParticleProps> = ({ darkMode }) => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  // Initialize particle positions and velocities
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    velocities[i * 3] = (Math.random() - 0.5) * 0.02;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
  }

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary check
        for (let j = 0; j < 3; j++) {
          if (Math.abs(positions[i * 3 + j]) > 10) {
            positions[i * 3 + j] *= -1;
            velocities[i * 3 + j] *= -1;
          }
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        color={darkMode ? '#ffffff' : '#1976d2'}
        size={0.1}
        transparent
        opacity={0.6}
      />
    </points>
  );
};

interface BackgroundAnimationProps {
  darkMode: boolean;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ darkMode }) => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 15], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Particles darkMode={darkMode} />
    </Canvas>
  );
};

export default BackgroundAnimation;