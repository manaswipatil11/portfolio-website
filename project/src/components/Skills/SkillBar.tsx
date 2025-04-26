import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons] || LucideIcons.Circle;
  
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div 
          className="bg-gradient-to-r from-primary-600 to-accent-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
        />
      </div>
      
      <div className="flex justify-end">
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
    </motion.div>
  );
};

export default SkillBar;