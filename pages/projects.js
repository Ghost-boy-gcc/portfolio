import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Projects() {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1', link: '#' },
    { title: 'Project 2', description: 'Description of Project 2', link: '#' },
    { title: 'Project 3', description: 'Description of Project 3', link: '#' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Projects showcase" />
      </Head>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">My Projects</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-accent font-bold">
                View Project &rarr;
              </a>
            </motion.li>
          ))}
        </ul>
      </main>
    </div>
  );
} 