import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A combination of technical proficiency and creative vision to bring digital concepts to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;