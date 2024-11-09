import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-primary text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
    </motion.div>
  );
};

export default Hero;