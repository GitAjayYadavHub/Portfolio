import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Django", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 75 },
        { name: "VSCode", level: 80 },
        { name: "Postman", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "Concepts & Methodologies",
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "Responsive Design", level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <category.icon className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Other Technologies & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'Data Visualization', 'UI/UX Design', 
              'Testing', 'Game Development', 'Product Management',
              'Agile Methodology', 'Problem Solving'
            ].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-primary hover:text-dark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;