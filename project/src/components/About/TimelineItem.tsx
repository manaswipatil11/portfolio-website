import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../../types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex md:contents ${isEven ? '' : 'flex-row-reverse'}`}>
      <div className="col-start-1 col-end-2 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-primary-300 dark:bg-primary-700 pointer-events-none"></div>
        </div>
        <motion.div 
          className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-600 dark:bg-primary-500 shadow-md"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        ></motion.div>
      </div>
      
      <motion.div 
        className={`bg-white dark:bg-gray-800 col-start-2 col-end-12 p-6 rounded-xl my-4 mr-auto shadow-md w-full md:w-1/2 ${
          isEven ? 'md:mr-4 md:ml-auto' : 'md:ml-4 md:mr-auto'
        }`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.year}</span>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;