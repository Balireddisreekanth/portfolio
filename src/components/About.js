import React from 'react';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with a focus on creating exceptional digital experiences.
            Here's a glimpse into my background and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I began my development journey 2 years ago, driven by a passion for transforming creative ideas into functional and impactful digital products. Since then, I’ve collaborated with clients and teams to build solutions that are both effective and user-friendly.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My approach blends solid technical skills with a strong focus on user-centered design. I believe the best digital experiences are not only reliable and high-performing but also intuitive and enjoyable to use.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-5 h-5 text-teal-500 mr-2" />
                  <h4 className="font-bold text-gray-900 dark:text-white">Experience</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  2 years of professional development experience
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-5 h-5 text-teal-500 mr-2" />
                  <h4 className="font-bold text-gray-900 dark:text-white">Education</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  B.S. in Chemistry with honors, continuous learning through courses
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-teal-500 mr-2" />
                  <h4 className="font-bold text-gray-900 dark:text-white">Awards</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Recognized for outstanding contributions to multiple high-impact projects
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-teal-500 mr-2" />
                  <h4 className="font-bold text-gray-900 dark:text-white">Teamwork</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Collaborative approach with effective communication and leadership skills
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Working on laptop" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <blockquote className="text-white italic font-light">
                    "I believe in creating digital experiences that not only solve problems but also delight users."
                  </blockquote>
                </div>
              </div>
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Projects Completed</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;