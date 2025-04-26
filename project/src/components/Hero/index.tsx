import React from 'react';
import { motion } from 'framer-motion';
import Scene from './Scene';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20 dark:from-primary-900/40 dark:to-accent-900/40" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-70 dark:opacity-80">
        <Scene />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Manaswi
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> Patil</span> 
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Tinkerer!<br></br>
Building intelligent systems that think, sense, and solve...
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full shadow-lg transition-all flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-full flex items-center justify-center transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;