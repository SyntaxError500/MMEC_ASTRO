import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

const API_URL = 'http://localhost:8000/predict';

const Input = () => {
  const [formData, setFormData] = useState({
    delta_time_sec: '',
    angular_sep_deg: '',
    cross_source: '0',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    let a = 0;
    if(formData.cross_source === '1') {
      a = 1;
    } 
    // console.log('Submitting form data:', formData);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          delta_time_sec: parseFloat(formData.delta_time_sec),
          angular_sep_deg: parseFloat(formData.angular_sep_deg),
          cross_source: a,
        })
      });
      if (!res.ok) throw new Error('Prediction failed');
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError('Could not get prediction. Backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 relative overflow-hidden "
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 ">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <Stars 
            radius={100} 
            depth={50} 
            count={2000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.5}
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={true}
            autoRotateSpeed={0.2}
          />
        </Canvas>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-space-neon-blue ">
              Event Query Interface
            </h1>
            <p className="text-xl text-space-neon-purple">
              Search for multi-messenger astronomical events across the cosmos
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="cosmic-card rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-space-neon-blue mb-3">
                    Δ Time (seconds)
                  </label>
                  <input
                    type="number"
                    name="delta_time_sec"
                    value={formData.delta_time_sec}
                    onChange={handleChange}
                    placeholder="Time difference between events (sec)"
                    className="w-full px-4 py-3 bg-space-dark/50 border border-space-neon-blue/30 rounded-lg text-white placeholder-white/40 focus:border-space-neon-blue focus:ring-2 focus:ring-space-neon-blue/20 focus:outline-none transition-all duration-300 hover:border-space-neon-blue/60"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-space-neon-blue mb-3">
                    Angular Separation (deg)
                  </label>
                  <input
                    type="number"
                    name="angular_sep_deg"
                    value={formData.angular_sep_deg}
                    onChange={handleChange}
                    placeholder="Angular separation (deg)"
                    className="w-full px-4 py-3 bg-space-dark/50 border border-space-neon-blue/30 rounded-lg text-white placeholder-white/40 focus:border-space-neon-blue focus:ring-2 focus:ring-space-neon-blue/20 focus:outline-none transition-all duration-300 hover:border-space-neon-blue/60"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-space-neon-purple mb-3">
                  Cross Source
                </label>
                <select
                  name="cross_source"
                  value={formData.cross_source}
                  onChange={handleChange}
                  className="w-full bg-black px-4 py-3 bg-space-dark/50 border border-space-neon-purple/30 rounded-lg text-white focus:border-space-neon-purple focus:ring-2 focus:ring-space-neon-purple/20 focus:outline-none transition-all duration-300 hover:border-space-neon-purple/60"
                  required
                >
                  <option value="0">Same Observatory/Source</option>
                  <option value="1">Different Observatories/Sources</option>
                </select>
              </div>
              <div className="text-center pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-gradient-to-r from-space-neon-blue via-space-neon-purple to-space-neon-pink rounded-lg text-xl font-semibold neon-border hover:shadow-lg hover:shadow-space-neon-blue/50 transition-all duration-300 animate-pulse-glow"
                  disabled={loading}
                >
                  {loading ? 'Predicting...' : 'Check Correlation'}
                </motion.button>
              </div>
            </form>
            {result && (
              <div className="mt-8 text-center">
                <div className="inline-block bg-black/80 text-white px-6 py-4 rounded-xl border border-space-neon-blue">
                  <div><span className="font-bold">Predicted Label:</span> {result.predicted_label === 1 ? 'Correlated' : 'Not Correlated'}</div>
                  <div><span className="font-bold">Correlation Confidence:</span> {result.correlation_confidence !== null ? (result.correlation_confidence.toFixed(3))*100 : 'N/A'}</div>
                </div>
              </div>
            )}
            {error && (
              <div className="mt-8 text-center text-red-400">
                {error}
              </div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center text-white/60"
          >
            <p className="text-sm">
              Our ML algorithms will correlate events across gravitational wave, optical, and high-energy observatories
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Input;