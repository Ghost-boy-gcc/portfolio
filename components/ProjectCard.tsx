import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="p-4 border rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default ProjectCard;