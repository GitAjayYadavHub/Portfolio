import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
            {
          icon: Code,
          title: "Analytical Problem Solver",
          description: "Skilled at analyzing complex challenges and translating them into efficient, scalable solutions through structured thinking.",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          icon: Lightbulb,
          title: "Continuous Learner & Innovator",
          description: "Proactively explores emerging technologies, tools, and best practices to stay ahead in a rapidly evolving tech landscape.",
          gradient: "from-yellow-500 to-orange-500"
        },
        {
          icon: Target,
          title: "Results-Driven Professional",
          description: "Committed to delivering high-impact projects with a strong focus on quality, performance, and measurable outcomes.",
          gradient: "from-green-500 to-emerald-500"
        },
        {
          icon: Heart,
          title: "Technology Enthusiast",
          description: "Passionate about building meaningful, user-centric solutions that create real-world value through technology.",
          gradient: "from-pink-500 to-rose-500"
        }

  ];

  return (
    <section id="about" className="py-20 bg-gray-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Software Developer & Full-Stack Enthusiast
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software developer with a strong interest in web development, 
              full-stack applications, and creating impactful solutions in education and fitness 
              technology. Currently pursuing a B.Tech in Computer Science & Engineering at 
              Ajay Kumar Garg Engineering College.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I believe good code should speak softly but confidently, just like a well-written 
              function. My journey involves building things with purpose — from clean UIs to 
              robust backend systems, always focusing on creating meaningful digital experiences.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['React.js', 'Node.js', 'Python', 'Django', 'MongoDB', 'Machine Learning'].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/10"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <item.icon className="text-primary mb-3" size={24} />
                </motion.div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { number: '3+', label: 'Projects Completed' },
            { number: '100+', label: 'LeetCode Problems' },
            { number: '4+', label: 'Certifications' },
            { number: '7.8', label: 'CGPA' }
          ].map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
