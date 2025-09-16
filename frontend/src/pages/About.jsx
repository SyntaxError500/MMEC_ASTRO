import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

const About = () => {
  const features = [
    {
      title: "Event Pair Correlation",
      description: "Correlate pairs of astronomical events using time difference, angular separation, and source information. Our ML model predicts if two events are physically related.",
      icon: "🔗",
      color: "neon-blue"
    },
    {
      title: "ML Confidence Scoring",
      description: "Get a probability score for each event pair, showing how confident the model is in its correlation decision. High confidence means a strong astrophysical link.",
      icon: "📈",
      color: "neon-green"
    },
    {
      title: "API-Driven Integration",
      description: "A FastAPI backend serves the trained model, making predictions available to the React frontend and any external tools via a simple REST API.",
      icon: "🛰️",
      color: "neon-purple"
    },
    {
      title: "Real-Time, Multi-Source Support",
      description: "Supports data from multiple observatories and event types, enabling rapid, automated multi-messenger science across the electromagnetic and gravitational spectrum.",
      icon: "🌌",
      color: "neon-pink"
    }
  ];

  const challenges = [
    {
      title: "The Challenge",
      content: "Modern astronomy produces huge volumes of alerts from gravitational wave detectors, gamma-ray satellites, and optical surveys. Finding true multi-messenger correlations among these events is difficult, especially in real time."
    },
    {
      title: "Our Solution",
      content: "We built an end-to-end pipeline: a machine learning model trained to classify event pairs as correlated or not, a FastAPI backend to serve predictions, and a React frontend for interactive exploration. Users can submit event pairs and instantly see correlation results and confidence scores."
    },
    {
      title: "Impact",
      content: "This tool accelerates discovery of rare, physically linked cosmic events—like neutron star mergers seen in both gravitational waves and light—enabling new science and rapid follow-up by the global astronomy community."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <Stars 
            radius={150} 
            depth={50} 
            count={3000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.3}
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={true}
            autoRotateSpeed={0.1}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 ">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-space-neon-blue glow-effect">
            About MMEC
          </h1>
          <p className="text-xl md:text-2xl text-space-neon-purple max-w-4xl mx-auto">
            Revolutionizing astronomy through intelligent multi-messenger event correlation
          </p>
        </motion.div>

        {/* Challenge/Solution Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {challenges.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="cosmic-card rounded-2xl p-8 transform-gpu"
            >
              <h3 className="text-2xl font-bold mb-4 text-space-neon-blue glow-effect">
                {item.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-space-neon-purple glow-effect">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0, rotateX: -15 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: `0 20px 40px rgba(0, 212, 255, 0.3)`
                }}
                className={`cosmic-card rounded-2xl p-6 text-center transform-gpu border-space-${feature.color}/30 hover:border-space-${feature.color}/60 transition-all duration-300`}
              >
                <div className="text-6xl mb-4 animate-float">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 text-space-${feature.color} glow-effect`}>
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="cosmic-card rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-space-neon-green glow-effect text-center">
            Technical Architecture
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-space-neon-blue">
                Data Sources
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>• LIGO/Virgo Gravitational Wave Network</li>
                <li>• Fermi Gamma-Ray Space Telescope</li>
                <li>• Swift X-ray Observatory</li>
                <li>• Ground-based Optical Surveys (ZTF, ATLAS)</li>
                <li>• IceCube Neutrino Observatory</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-space-neon-purple">
                ML Pipeline
              </h3>
              <ul className="space-y-2 text-white/80">
               <li>• Collect and clean data in real-time</li>
<li>• Pick useful features from different signals</li>
<li>• Use Machine Learning models for classification</li>
<li>• Find patterns over time</li>
<li>• Give confidence scores and alerts</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;