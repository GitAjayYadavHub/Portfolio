import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Developer and Technology Job Simulation',
      issuer: 'Accenture',
      date: 'June 2025',
      description: 'Completed comprehensive simulation covering software development practices and technology implementation strategies.',
      category: 'Professional Development'
    },
    {
      title: 'AWS APAC Solutions Architecture',
      issuer: 'Amazon Web Services',
      date: 'May 2025',
      description: 'Gained expertise in designing and implementing scalable cloud architectures on AWS platform.',
      category: 'Cloud Computing'
    },
    {
      title: 'Full Stack Development with PHP & MySQL',
      issuer: 'E & ICT Academy, IIT Kanpur',
      date: 'April 2025',
      description: 'Comprehensive training in full-stack web development using PHP and MySQL technologies.',
      category: 'Web Development'
    },
    {
      title: 'Machine Learning with MATLAB',
      issuer: 'Infosys Springboard',
      date: 'March 2025',
      description: 'Learned machine learning concepts and implementation using MATLAB programming environment.',
      category: 'Machine Learning'
    }
  ];

  const categoryColors = {
    'Professional Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Cloud Computing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'Web Development': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Machine Learning': 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  };

  return (
    <section id="certificates" className="py-20 bg-gray-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certificates & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Curated learning & growth through professional certifications and specialized training programs.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[cert.category]}`}>
                  {cert.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              
              <div className="flex items-center text-primary font-medium mb-3">
                <span>{cert.issuer}</span>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {cert.date}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-primary hover:text-white transition-colors text-sm font-medium"
                >
                  <ExternalLink size={14} />
                  <span>View Certificate</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Continuous Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-primary mb-2">4+</div>
              <div className="text-gray-400">Professional Certificates</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-primary mb-2">3+</div>
              <div className="text-gray-400">Specialized Bootcamps</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-400">Hours of Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;