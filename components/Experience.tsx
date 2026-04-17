'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'AI Robotics Course',
    company: 'NAVTTC',
    period: 'Current - 3-4 months',
    description: 'Enrolled in an intensive AI Robotics program focusing on practical applications of artificial intelligence in robotics systems. Learning advanced concepts in machine learning, computer vision, and robotic control systems.'
  },
  {
    title: 'BSAI Student',
    company: 'Bachelor of Science in Artificial Intelligence',
    period: 'Ongoing',
    description: 'Pursuing comprehensive education in artificial intelligence, covering machine learning algorithms, neural networks, data science, and software engineering principles.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-2">{exp.company}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;