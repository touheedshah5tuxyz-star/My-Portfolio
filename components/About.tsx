'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🤖</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I am a Bachelor of Science in Artificial Intelligence (BSAI) student currently enrolled in a 3-4 month AI Robotics course at NAVTTC. I'm passionate about leveraging AI and robotics to solve real-world problems and create innovative solutions.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in tech has equipped me with a solid foundation in AI algorithms, machine learning, and full-stack development. I'm eager to apply my knowledge in practical projects and contribute to the field of intelligent systems.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring the latest advancements in robotics or working on personal projects that combine AI with creative problem-solving.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {['AI/ML', 'Robotics', 'Full Stack Development', 'Python', 'JavaScript', 'React'].map((skill) => (
                <span key={skill} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;