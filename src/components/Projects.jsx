import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { ExternalLink, Github, Calendar } from 'lucide-react';
=======
import { Github } from 'lucide-react';
>>>>>>> dfeddeb (Clean up unused imports and simplify buttons)

const Projects = () => {
  const projects = [
    {
      title: "Duolingo MVP Dashboard",
      description: "Developed a full-stack dashboard to track and visualize key performance metrics for a Duolingo MVP, including user activity, lesson completion, and streaks. Features real-time updates and comprehensive analytics.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      features: [
        "Live metrics dashboard with real-time updates",
        "30-day trend analysis for key metrics",
        "User progress tracking",
        "Gamification elements visualization",
        "Download trend monitoring"
      ],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Full-Stack"
    },
    {
      title: "Modern Fitness Exercises App",
      description: "A comprehensive fitness application providing exercise database categorized by muscle group, equipment, and difficulty. Users can search exercises, view instructions, watch videos, and track progress.",
      technologies: ["MERN Stack", "Tailwind CSS", "MongoDB", "Express.js"],
      features: [
        "Search exercises by muscle group",
        "View detailed exercise instructions",
        "Watch related workout videos",
        "Discover similar exercises",
        "Smooth and responsive interface"
      ],
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web App"
    },
    {
      title: "PCM ChapterWise Question",
      description: "A web application designed to help students practice chapter-wise questions in Physics, Chemistry, and Mathematics. Features categorized question banks and progress tracking with an intuitive interface.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      features: [
        "Categorized question banks for PCM subjects",
        "Progress tracking for each chapter",
        "Responsive and intuitive user interface",
        "Chapter-wise organization",
        "Student-friendly design"
      ],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education"
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
            Crafted with intent, built with care. Here are some of my recent projects that showcase my skills and passion for development.
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
<<<<<<< HEAD
=======
                    loading="lazy"
>>>>>>> dfeddeb (Clean up unused imports and simplify buttons)
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
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
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

                {/* Key Features */}
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

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                    onClick={() => window.open('https://github.com/GitAjayYadavHub', '_blank')}
=======
                    onClick={() => window.open("https://github.com/GitAjayYadavHub", "_blank")}
>>>>>>> dfeddeb (Clean up unused imports and simplify buttons)
                    aria-label={`View ${project.title} source code`}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-dark font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </motion.button>
<<<<<<< HEAD
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('#', '_blank')}
                    aria-label={`View ${project.title} live demo`}
                    className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-dark transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.button>
=======
>>>>>>> dfeddeb (Clean up unused imports and simplify buttons)
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