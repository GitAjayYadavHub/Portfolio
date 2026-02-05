import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Development Engineering Intern',
      company: 'Bluestock Fintech',
      location: 'Remote',
      period: 'July 2025',
      duration: '4 weeks',
      description: 'Successfully completed a 4-weeks remote internship focused on web technologies.',
      highlights: [
        'Frontend: HTML, CSS, JavaScript, Bootstrap 5',
        'Backend: Python, Django, Django REST Framework, PostgreSQL',
        'Tools: Postman, Git & GitHub, VSCode',
        'Developed features: IPO Display, Search & Filter, Admin Panel, REST API, User Authentication'
      ],
      icon: Briefcase
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (CSE)',
      institution: 'Ajay Kumar Garg Engineering College',
      location: 'Ghaziabad, Uttar Pradesh',
      period: '2022 - 2026',
      cgpa: '7.8',
      icon: GraduationCap
    },
    {
      degree: 'Class XII',
      institution: 'Saraswati Vidya Mandir Inter College',
      location: 'Saharanpur, Uttar Pradesh',
      period: '2018 - 2020',
      percentage: '78%',
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 100+ Questions on LeetCode',
      icon: Award
    },
    {
      title: 'Product Management Bootcamp',
      description: 'Attended 4-Week Immersive Bootcamp by E-Cell, IIT Guwahati',
      icon: Award
    },
    {
      title: 'DSA Bootcamp',
      description: 'Completed 30 Days DSA Bootcamp in C++ on Unstop Platform',
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through education, professional experience, and personal achievements.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience & Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Briefcase className="mr-3 text-primary" size={24} />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.location} • {exp.duration}</p>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center mt-12">
              <GraduationCap className="mr-3 text-primary" size={24} />
              Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  {edu.cgpa && (
                    <p className="text-gray-300">
                      <span className="font-medium">CGPA:</span> {edu.cgpa}
                    </p>
                  )}
                  {edu.percentage && (
                    <p className="text-gray-300">
                      <span className="font-medium">Percentage:</span> {edu.percentage}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Award className="mr-3 text-primary" size={24} />
              Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <achievement.icon className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-primary mb-2">7.8</div>
                <div className="text-gray-400">Current CGPA</div>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-400">LeetCode Problems</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
