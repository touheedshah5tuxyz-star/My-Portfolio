'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'Developed an intelligent chatbot using natural language processing and machine learning algorithms. The bot can handle customer queries, provide recommendations, and learn from interactions.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    image: '/project1.jpg', // Placeholder
    github: '#',
    demo: '#'
  },
  {
    title: 'Robotic Arm Simulation',
    description: 'Created a 3D simulation of a robotic arm using ROS and Gazebo. Implemented inverse kinematics for precise movement control and path planning algorithms.',
    technologies: ['ROS', 'Gazebo', 'Python', 'C++'],
    image: '/project2.jpg', // Placeholder
    github: '#',
    demo: '#'
  },
  {
    title: 'Full Stack Data Visualization App',
    description: 'Built a web application for real-time data visualization using React and D3.js. Integrated with AI models to provide predictive analytics and insights.',
    technologies: ['React', 'Node.js', 'D3.js', 'MongoDB'],
    image: '/project3.jpg', // Placeholder
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-4xl">{index === 0 ? '💬' : index === 1 ? '🤖' : '📊'}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-600 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-blue-400 hover:text-blue-300 transition-colors">
                    GitHub
                  </a>
                  <a href={project.demo} className="text-blue-400 hover:text-blue-300 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;