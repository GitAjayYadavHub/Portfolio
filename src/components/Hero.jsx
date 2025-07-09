import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import profileImage from '../assets/AjayPicture.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hello, I'm Ajay Kumar Yadav";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/GitAjayYadavHub', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ajay-kumar-yadav-a41715282/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ajayyadav0653987@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Code Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 font-mono text-sm animate-float">
          const developer = &#123;<br />
          &nbsp;&nbsp;name: "Ajay",<br />
          &nbsp;&nbsp;skills: ["Web", "Full-Stack", "ML"]<br />
          &#125;;
        </div>
        <div className="absolute bottom-20 right-10 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
          function createImpact() &#123;<br />
          &nbsp;&nbsp;return innovation + passion;<br />
          &#125;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 65, 0.6)' }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Ajay Kumar Yadav"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              {/* Animated ring around profile picture */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white">{displayText}</span>
              <span className="text-primary animate-blink">|</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Software Developer | Full-Stack & ML Enthusiast
            </motion.p>
          </div>

          {/* Code Block */}
          <motion.div
            className="max-w-2xl mx-auto code-block text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <div className="text-primary mb-2">// About me</div>
            <div className="text-gray-300">
              <span className="text-blue-400">const</span>{' '}
              <span className="text-yellow-400">aboutMe</span> = &#123;
            </div>
            <div className="ml-4 text-gray-300">
              <span className="text-red-400">education</span>: <span className="text-green-400">"B.Tech CSE @ AKGEC"</span>,
            </div>
            <div className="ml-4 text-gray-300">
              <span className="text-red-400">location</span>: <span className="text-green-400">"Ghaziabad, India"</span>,
            </div>
            <div className="ml-4 text-gray-300">
              <span className="text-red-400">passion</span>: <span className="text-green-400">"Building impactful solutions"</span>,
            </div>
            <div className="ml-4 text-gray-300">
              <span className="text-red-400">currentFocus</span>: [<span className="text-green-400">"Web Dev"</span>, <span className="text-green-400">"Machine Learning"</span>]
            </div>
            <div className="text-gray-300">&#125;;</div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Ghaziabad, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>IST (UTC+5:30)</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary hover:text-dark transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 + index * 0.1 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
          >
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;