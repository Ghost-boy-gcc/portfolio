'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com' },
    { icon: <FaTwitter />, link: 'https://twitter.com' },
  ];

  return (
    <motion.footer
      className="bg-gray-900 py-6 mt-12"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
              whileHover={{ scale: 1.2, color: '#ec4899' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </motion.footer>
  );
} 