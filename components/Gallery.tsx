'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    title: 'Robotics Project',
    category: 'Robotics',
    image: '🤖'
  },
  {
    id: 2,
    title: 'AI Development',
    category: 'AI/ML',
    image: '🧠'
  },
  {
    id: 3,
    title: 'Full Stack App',
    category: 'Web Development',
    image: '💻'
  },
  {
    id: 4,
    title: 'Data Visualization',
    category: 'Data Science',
    image: '📊'
  },
  {
    id: 5,
    title: 'Machine Learning',
    category: 'AI/ML',
    image: '🤖'
  },
  {
    id: 6,
    title: 'Web Design',
    category: 'Design',
    image: '🎨'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery & Showcase</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of my work, projects, and creative endeavors in AI, Robotics, and Full Stack Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg h-64 cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                {item.image}
              </div>
              
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;