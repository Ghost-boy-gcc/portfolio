import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact form" />
      </Head>
      <Navbar />
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Contact Me</h1>
        <form className="space-y-4">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline transition transform focus:scale-105"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </motion.div>
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline transition transform focus:scale-105"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </motion.div>
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline transition transform focus:scale-105"
              id="message"
              placeholder="Your message"
              rows="5"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
} 