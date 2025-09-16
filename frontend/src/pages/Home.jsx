import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Sphere, Ring } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

// 3D Components for the cosmic background
function RotatingBlackHole() {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02;
    }
  });

  return (
    <group position={[2, 0, -5]}>
      {/* Black hole core */}
      <Sphere ref={meshRef} args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#000000" />
      </Sphere>
      
      {/* Accretion disk */}
      <Ring ref={ringRef} args={[0.8, 2, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial 
          color="#ff6b00" 
          transparent 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>
      
      <Ring args={[1.2, 2.5, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial 
          color="#ff0066" 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Ring>
    </group>
  );
}

function PulsatingStars() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        
        speed={0.5}
      />
    </group>
  );
}

function Supernova() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.3);
      meshRef.current.material.opacity = 0.7 + Math.sin(time * 3) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.3, 32, 32]} position={[-3, 2, -8]}>
      <meshBasicMaterial 
        color="#00d4ff" 
        transparent 
        opacity={0.7}
      />
    </Sphere>
  );
}

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <PulsatingStars />
            <RotatingBlackHole />
            <Supernova />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-space-neon-blue  animate-pulse-glow"
        >
          Multi-Messenger Event Correlator
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-space-neon-purple  font-light"
        >
          Connecting the Cosmos across Gravitational, Optical, and High-Energy Events
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            to="/input"
            className="inline-block px-12 py-4 text-xl font-semibold bg-gradient-to-r from-space-neon-blue to-space-neon-purple rounded-lg neon-border hover:shadow-lg hover:shadow-space-neon-blue/50 transition-all duration-300 transform hover:scale-105 animate-float"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-space-neon-green rounded-full animate-twinkle opacity-60" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-space-neon-pink rounded-full animate-twinkle opacity-70" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-space-neon-blue rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-space-neon-purple rounded-full animate-twinkle opacity-80" style={{ animationDelay: '0.5s' }} />
      </div>
    </motion.div>
  );
};

export default Home;