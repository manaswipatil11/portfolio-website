import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../../types';

interface TestimonialProps {
  testimonial: TestimonialItem;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 text-primary-500 dark:text-primary-400">
        <Quote size={32} />
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
        "{testimonial.comment}"
      </p>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;