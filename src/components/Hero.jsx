import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import profileImage from '../assets/AjayPicture.jpg';
import sealIcon from '../assets/seal.gif';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Ajay Kumar Yadav";

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
    { 
      icon: Github, 
      href: 'https://github.com/GitAjayYadavHub', 
      label: 'GitHub',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/ajay-kumar-yadav-a41715282/', 
      label: 'LinkedIn',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { 
      icon: Mail, 
      href: 'mailto:ajayyadav0653987@gmail.com', 
      label: 'Email',
      target: '_self',
      rel: 'noopener noreferrer'
    },
  ];



  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Code Animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
          <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-start mb-8 lg:mb-0"
            >
              <div className="relative group">
                <motion.div
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 65, 0.6)' }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profileImage}
                    alt="Ajay Kumar Yadav"
                    className="w-full h-full object-cover object-center grayscale transition-all duration-300 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute inset-0 rounded-2xl ring-4 ring-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                {/* Animated ring around profile picture */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4 text-center lg:text-left lg:max-w-2xl lg:ml-auto">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-white">{displayText}</span>
                <span className="text-primary animate-blink">|</span>
              </motion.h1>
              
              <motion.ul
                className="space-y-2 text-xl md:text-2xl text-gray-300 font-light font-mono tracking-wide leading-relaxed select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <li className="group flex items-center gap-3 rounded-lg px-2 py-1 transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_22px_rgba(0,255,65,0.45)]">
                  <img src={sealIcon} alt="" className="h-5 w-5 transition-transform duration-300 group-hover:animate-bounce [animation-duration:1.6s]" />
                  <span className="transition-colors duration-300 group-hover:text-primary/90">Software Developer</span>
                </li>
                <li className="group flex items-center gap-3 rounded-lg px-2 py-1 transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_22px_rgba(0,255,65,0.45)]">
                  <img src={sealIcon} alt="" className="h-5 w-5 transition-transform duration-300 group-hover:animate-bounce [animation-duration:1.6s]" />
                  <span className="transition-colors duration-300 group-hover:text-primary/90">MERN-Stack & ML Enthusiast</span>
                </li>
                <li className="group flex items-center gap-3 rounded-lg px-2 py-1 transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_22px_rgba(0,255,65,0.45)]">
                  <img src={sealIcon} alt="" className="h-5 w-5 transition-transform duration-300 group-hover:animate-bounce [animation-duration:1.6s]" />
                  <span className="transition-colors duration-300 group-hover:text-primary/90">Competitive Programmer (⭐⭐⭐)</span>
                </li>
              </motion.ul>

            </div>
          </div>

          {/* Code Block */}
          <motion.div
            className="w-full max-w-5xl mx-auto code-block text-left"
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
            className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400"
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
            className="w-full max-w-5xl mx-auto flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                aria-label={link.label}
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
            <motion.a
              href="#projects"
              aria-label="View my projects"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: '#00ff41',
                color: '#0a0a0a',
                border: 'none',
                outline: 'none'
              }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
