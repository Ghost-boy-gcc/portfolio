'use client';  // Add this at the top
import Navbar from './Navbar';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import the Footer component
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 