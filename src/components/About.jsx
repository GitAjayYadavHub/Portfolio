import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Heart, Sparkles, Zap, Award, Coffee } from 'lucide-react';

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

  const floatingIcons = [
    { icon: Sparkles, position: 'top-10 left-10', delay: 0 },
    { icon: Zap, position: 'top-20 right-20', delay: 0.5 },
    { icon: Award, position: 'bottom-20 left-20', delay: 1 },
    { icon: Coffee, position: 'bottom-10 right-10', delay: 1.5 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-dark/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} opacity-5`}
            initial={{ y: 0, rotate: 0 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.icon size={60} className="text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <div className="w-20 h-1 bg-primary mx-auto relative">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-primary"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {/* Decorative Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-5 -left-5 text-primary text-9xl font-serif pointer-events-none"
            >
              "
            </motion.div>

            <h3 className="text-2xl font-semibold text-white relative z-10">
              Software Developer & Full-Stack Enthusiast
            </h3>
            
            <div className="space-y-4 relative z-10">
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a passionate software developer with a strong interest in web development, 
                full-stack applications, and creating impactful solutions in education and fitness 
                technology. Currently pursuing a B.Tech in Computer Science & Engineering at 
                Ajay Kumar Garg Engineering College.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I believe good code should speak softly but confidently, just like a well-written 
                function. My journey involves building things with purpose — from clean UIs to 
                robust backend systems, always focusing on creating meaningful digital experiences.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-3 mt-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {['React.js', 'Node.js', 'Python', 'Django', 'MongoDB', 'Machine Learning'].map((tech, index) => (
                <motion.span 
                  key={tech} 
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
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
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Icon with Gradient Background */}
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} p-2 mb-3 relative`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="text-white w-full h-full" />
                </motion.div>

                <h4 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats with Enhanced Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '3+', label: 'Projects Completed', icon: Award, color: 'from-blue-500 to-cyan-500' },
            { number: '100+', label: 'LeetCode Problems', icon: Code, color: 'from-green-500 to-emerald-500' },
            { number: '4+', label: 'Certifications', icon: Target, color: 'from-purple-500 to-pink-500' },
            { number: '7.8', label: 'CGPA', icon: Sparkles, color: 'from-yellow-500 to-orange-500' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="relative group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center relative z-10">
                {/* Icon */}
                <motion.div
                  className="inline-block mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.color} p-3 shadow-lg`}>
                    <stat.icon className="text-white w-full h-full" />
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div 
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/60"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-gray-400 mt-2 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Background Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-lg opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Fact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg px-6 py-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Coffee className="text-primary" size={24} />
              </motion.div>
              <p className="text-gray-300">
                <span className="text-primary font-semibold">Fun Fact:</span> I debug with coffee and solve problems with code ☕
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
