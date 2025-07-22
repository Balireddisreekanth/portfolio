import React from 'react';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-200 dark:bg-teal-900 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-indigo-200 dark:bg-indigo-900 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-60 h-60 rounded-full bg-amber-200 dark:bg-amber-900 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 font-medium text-sm animate-fadeIn">
              <span>MERN Full-Stack Developer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6 animate-slideUp">
            Creating High-Impact Web Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500"> Empower Businesses</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-slideUp animation-delay-200">
            Full-Stack Web Developer with 2 years of experience in building scalable web applications using JavaScript, React.js, and Node.js. Skilled in responsive design, RESTful APIs, and optimizing user experiences to deliver high-performance, maintainable solutions aligned with business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp animation-delay-300">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
              <a 
                href="/sreekanthupdateresume.pdf" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-sm hover:shadow rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                download
              >
                Resume
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-2/5 flex justify-center animate-slideRight">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500 flex items-center justify-center animate-float">
                <img 
                  src="ptofile1.jpeg" 
                  alt="Professional Portrait" 
                  className="w-60 h-60 sm:w-76 sm:h-76 object-cover rounded-full border-4 border-white dark:border-gray-800"
                />
              </div>
              <div className="absolute top-0 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-bounce-slow">
                <div className="text-amber-500 font-bold">2 years</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Experience</div>
              </div>
              {/* <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-bounce-slow animation-delay-500">
                <div className="text-teal-500 font-bold">50+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Projects</div>
              </div> */}
              <div className="text-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">Balireddisreekanth</span>
        </div>
            </div>
          </div>
        </div>

        {/* Add your name with a gradient effect */}
        
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
