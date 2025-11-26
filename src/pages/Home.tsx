import { Code2, Sparkles } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 blur-3xl opacity-20 animate-pulse"></div>
              <Code2 size={80} className="text-teal-600 dark:text-teal-400 relative" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Dev Jahanzaib
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <Sparkles size={20} className="text-teal-600 dark:text-teal-400" />
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              Front-End Developer | React, Tailwind, WordPress
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences with modern technologies.
            Passionate about clean code and pixel-perfect designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-teal-600 dark:hover:border-teal-400 rounded-lg font-medium transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
