import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "#", label: "Email" },
  ];

  const footerItems = [
    { title: "Navigation", links: ["Home", "Projects", "Skills", "About", "Contact"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookies"] },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.h3 
              className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio.
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Creating immersive digital experiences and 3D worlds.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerItems.map((item, idx) => (
            <div key={idx} className="md:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {item.title}
              </h4>
              <ul className="space-y-2">
                {item.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to my newsletter for the latest projects and insights.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button 
                type="submit"
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {year} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;