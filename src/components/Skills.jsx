import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      color: "blue",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/40",
      skills: [
        { name: "JavaScript", level: 80, progressColor: "bg-gradient-to-r from-yellow-500 to-yellow-400" },
        { name: "Python", level: 75, progressColor: "bg-gradient-to-r from-blue-500 to-blue-400" },
        { name: "React.js", level: 85, progressColor: "bg-gradient-to-r from-cyan-500 to-cyan-400" },
        { name: "Node.js", level: 80, progressColor: "bg-gradient-to-r from-green-500 to-green-400" },
        { name: "Django", level: 75, progressColor: "bg-gradient-to-r from-emerald-500 to-emerald-400" },
        { name: "C++", level: 70, progressColor: "bg-gradient-to-r from-indigo-500 to-indigo-400" }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "green",
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      hoverBorder: "hover:border-green-500/40",
      skills: [
        { name: "MongoDB", level: 75, progressColor: "bg-gradient-to-r from-green-500 to-green-400" },
        { name: "MySQL", level: 70, progressColor: "bg-gradient-to-r from-blue-500 to-blue-400" },
        { name: "PostgreSQL", level: 70, progressColor: "bg-gradient-to-r from-sky-500 to-sky-400" }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "purple",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/40",
      skills: [
        { name: "Git & GitHub", level: 75, progressColor: "bg-gradient-to-r from-orange-500 to-orange-400" },
        { name: "Tailwind CSS", level: 80, progressColor: "bg-gradient-to-r from-cyan-500 to-cyan-400" },
        { name: "Bootstrap", level: 75, progressColor: "bg-gradient-to-r from-purple-500 to-purple-400" },
        { name: "VSCode", level: 80, progressColor: "bg-gradient-to-r from-blue-500 to-blue-400" },
        { name: "Postman", level: 75, progressColor: "bg-gradient-to-r from-amber-500 to-amber-400" }
      ]
    },
    {
      icon: Brain,
      title: "Concepts & Methodologies",
      color: "orange",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      hoverBorder: "hover:border-orange-500/40",
      skills: [
        { name: "Data Structures", level: 75, progressColor: "bg-gradient-to-r from-pink-500 to-pink-400" },
        { name: "Algorithms", level: 70, progressColor: "bg-gradient-to-r from-red-500 to-red-400" },
        { name: "REST APIs", level: 80, progressColor: "bg-gradient-to-r from-teal-500 to-teal-400" },
        { name: "Responsive Design", level: 85, progressColor: "bg-gradient-to-r from-violet-500 to-violet-400" }
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
              className={`${category.bgColor} p-6 rounded-lg border ${category.borderColor} ${category.hoverBorder} transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`${category.iconColor} mr-3`} size={24} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className={`${category.iconColor} text-sm font-semibold`}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className={`${skill.progressColor} h-full rounded-full shadow-lg`}
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.02 }}
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
