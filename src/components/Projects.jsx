import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BarChart } from 'lucide-react';
import DuoInsightsImage from '../assets/DuoInsights.jpg';
import CareTrixImage from '../assets/CareTrix.png';
import DrawSyncImage from '../assets/DrawSync.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'DuoInsights – Learning Insights & Performance Metrics',
      tagline: 'Turning Learning Data into Insights.',
      category: 'Data analysis / Visualisation',
      description:
        'The DuoInsights is a data-driven project that visualizes user learning behavior and engagement metrics. It presents insights using interactive charts and dashboards, helping to understand progress trends, user activity, and learning performance through clear and meaningful visualizations.',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Shadcn UI'],
      features: [
        'User progress analysis & lesson completion trends',
        'Learning streak visualization and performance comparison charts',
        'Interactive dashboards with data-driven views'
      ],
      impact: 'Transforms DuoInsights learning data into interactive dashboards revealing engagement trends and performance insights.',
      image: DuoInsightsImage,
      codeUrl: 'https://github.com/GitAjayYadavHub/Duolingo-Analysis-Dashboard',
      liveUrl: 'https://duolingo-mvp-plan-analysis.netlify.app/'
    },
    {
      title: 'CareTrix',
      tagline: 'Smart Healthcare Management Platform',
      category: 'MERN Stack',
      description:
        'CareTrix is a healthcare management web application designed to simplify hospital operations. It allows efficient management of patients, doctors, and appointments through a centralized and user-friendly dashboard. The platform focuses on improving workflow efficiency, reducing manual effort, and enhancing the overall healthcare experience.',
      technologies: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MongoDB', 'Socket.io'],
      features: [
        'Patient and staff views with organized workflows',
        'Responsive UI for admin and operator use',
        'Fast navigation with clear action affordances'
      ],
      impact: 'Streamlines hospital operations through centralized patient, doctor, and appointment management dashboards, improving patient care and reducing administrative burden.',
      image: CareTrixImage,
      codeUrl: 'https://github.com/GitAjayYadavHub/CareTrix',
      liveUrl: 'https://hospitrix-frontend.onrender.com/'
    },
    {
      title: 'DrawSync – Live Collaborative Whiteboard',
      tagline: 'Stay in Sync. Draw in Real Time.',
      category: 'Digital learning',
      description:
        'DrawSync is a real-time collaborative drawing application that enables multiple users to draw together on a shared canvas. It is built to support brainstorming, teaching, and team collaboration by providing a smooth, interactive, and easy-to-use drawing experience directly in the browser.',
      technologies: ['React', 'WebSockets', 'Tailwind CSS', 'Canvas', 'BarChart', 'Chart.js'],
      features: [
        'Live multi-user drawing and cursor presence',
        'Shared canvases that sync instantly',
        'Smooth interactions for ideation sessions'
      ],
      impact: 'Enables seamless real-time collaborative drawing for brainstorming and Learning and teaching sessions.',
      image: DrawSyncImage,
      codeUrl: 'https://github.com/GitAjayYadavHub/DrawSync',
      liveUrl: 'https://collabydraw-web.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crafted with intent, built with care. Here are some projects that showcase my focus on impactful software.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  className="relative group overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-primary text-sm mb-2">{project.tagline}</p>
                  <div className="text-green-300 bg-green-500/10 border border-green-500/20 rounded-md px-3 py-2 transition-colors duration-300 hover:bg-primary/10 hover:border-primary/30">
                    <span className="text-gray-300 font-semibold">Impact:</span> {project.impact}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${project.title} source code`}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-dark font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${project.title} live demo`}
                    className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-dark transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/GitAjayYadavHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-dark transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
