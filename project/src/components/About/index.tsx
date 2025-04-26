import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import Testimonial from './Testimonial';
import { timeline, testimonials } from '../../data/skills';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
           A budding AI-ML Engineer, Researcher and a Data Analyst
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
    My Journey
</h3>
<div className="space-y-4 text-gray-600 dark:text-gray-300">
    <p>
        My journey is defined by a passion for AI and a commitment to solving real-world challenges. With a background in research and development, I'm dedicated to creating innovative solutions that make a tangible difference.
    </p>
    <p>
        I've explored optimizing energy systems using PVLib, developed AI-based tools for preliminary dermatological diagnosis, and built real-time queue detection systems. This experience has equipped me with a versatile skill set in machine learning, data visualization, and full-stack development.
    </p>
    <p>
        My approach centers on combining rigorous analysis with creative problem-solving to deliver impactful applications. I'm driven to push the boundaries of what's possible with AI and web technologies.
    </p>
</div>
          </motion.div>
          
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Career Path
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-9">
              {timeline.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What People Say
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;