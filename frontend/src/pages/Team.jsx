import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

const Team = () => {
  const teamMembers = [
  {
    name: "Gourav Bansal",
    role: "Astrophysics Lead",
    description: "Works with data science, Python, and machine learning in astrophysics projects.",
    skills: ["Data Science","Python","Machine Learning","Astrophysics"],
    avatar: "👨‍🚀",
    color: "neon-blue"
  },
  {
    name: "Anvesha Goyal",
    role: "Data Analyst",
    description: "Focuses on data analysis, big data systems, and designing simple user interfaces.",
    skills: ["Data Analysis", "Astrophysics", "Big Data", "Ui/UX Design"],
    avatar: "📊",
    color: "neon-purple"
  },
  {
    name: "Kshitij Verma",
    role: "AI/ML",
    description: "Works on feature engineering and model optimization for AI tasks.",
    skills: ["Feature Engineering", "Model Optimization"," Python","Machine Learning"],
    avatar: "🤖",
    color: "neon-green"
  },
  {
    name: "Sahil Vaswani",
    role: "AI & Web Developer",
    description: "Builds web apps with React, Node.js, and AI features, also works with 3D graphics.",
    skills: ["React", "Node.js", "AI Integration", "API Development","Three.js"],
    avatar: "💻",
    color: "neon-pink"
  },
  {
    name: "Sahil Jain",
    role: "UI/UX Designer",
    description: "Designs UI/UX with Figma and React, and creates visuals with Three.js.",
    skills: ["Three.js", "Figma", "React" , "Node.js"],
    avatar: "🎨",
    color: "neon-blue"
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
            radius={120} 
            depth={50} 
            count={4000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.4}
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={true}
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-space-neon-blue glow-effect">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-space-neon-purple max-w-4xl mx-auto">
            Meet the brilliant minds behind the Multi-Messenger Event Correlator
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 100, opacity: 0, rotateX: -20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                rotateX: 5,
                z: 50
              }}
              className={`cosmic-card rounded-2xl p-8 transform-gpu perspective-1000 group cursor-pointer border-space-${member.color}/30 hover:border-space-${member.color}/60 transition-all duration-500`}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 92, 246, 0.2)'
              }}
            >
              {/* Avatar and Name */}
              <div className="text-center mb-6 transform group-hover:translateZ-20">
                <div className="text-8xl mb-4 animate-float group-hover:animate-pulse">
                  {member.avatar}
                </div>
                <h3 className={`text-2xl font-bold mb-2 text-space-${member.color} glow-effect group-hover:text-white transition-colors duration-300`}>
                  {member.name}
                </h3>
                <p className={`text-lg font-semibold text-space-${member.color}/80 group-hover:text-space-${member.color} transition-colors duration-300`}>
                  {member.role}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6 transform group-hover:translateZ-10">
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {member.description}
                </p>
              </div>

              {/* Skills */}
              <div className="transform group-hover:translateZ-5">
                <h4 className="text-sm font-semibold mb-3 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  Specializations:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 text-xs rounded-full bg-space-${member.color}/20 text-space-${member.color} border border-space-${member.color}/30 group-hover:bg-space-${member.color}/30 group-hover:border-space-${member.color}/50 transition-all duration-300`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-4 right-4 w-2 h-2 bg-space-${member.color} rounded-full animate-twinkle`} />
                <div className={`absolute bottom-6 left-6 w-1.5 h-1.5 bg-space-${member.color} rounded-full animate-twinkle`} style={{ animationDelay: '0.5s' }} />
                <div className={`absolute top-1/2 left-4 w-1 h-1 bg-space-${member.color} rounded-full animate-twinkle`} style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Team Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="cosmic-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-space-neon-green glow-effect">
              Our Mission
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
             Our Multi-Messenger Event Correlator delivers real-time astrophysical insights, bridges critical gaps in multi-messenger astronomy, and empowers the next generation of cosmic event discovery and classification. We're not just collecting data; we're connecting the cosmos.

            </p>
            <p className="text-lg text-white/80 leading-relaxed">
             Thanks you 
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Team;