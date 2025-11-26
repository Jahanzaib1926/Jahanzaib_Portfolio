import { Code2, Sparkles } from 'lucide-react';

export const Home = () => {
  // Tech-related code snippets and symbols for background animation
  const techElements = [
    { text: '<React />', delay: '0s', size: 'md' },
    { text: 'const dev = {}', delay: '2s', size: 'sm' },
    { text: 'function()', delay: '4s', size: 'sm' },
    { text: '{ }', delay: '1s', size: 'lg' },
    { text: 'npm install', delay: '3s', size: 'sm' },
    { text: 'export default', delay: '5s', size: 'sm' },
    { text: 'async await', delay: '1.5s', size: 'sm' },
    { text: 'useState()', delay: '3.5s', size: 'md' },
    { text: '</>', delay: '0.5s', size: 'lg' },
    { text: '=>', delay: '2.5s', size: 'md' },
    { text: 'import', delay: '4.5s', size: 'sm' },
    { text: 'console.log', delay: '1.2s', size: 'sm' },
    { text: 'TypeScript', delay: '2.2s', size: 'md' },
    { text: 'Next.js', delay: '4.2s', size: 'md' },
    { text: 'Node.js', delay: '1.8s', size: 'md' },
    { text: 'useEffect', delay: '3.8s', size: 'sm' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Tech Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tech Code Elements with Glow */}
        {techElements.map((element, index) => {
          const sizeClasses = {
            sm: 'text-xs md:text-sm',
            md: 'text-sm md:text-base',
            lg: 'text-base md:text-lg',
          };
          return (
            <div
              key={index}
              className={`absolute font-mono font-bold select-none ${sizeClasses[element.size as keyof typeof sizeClasses]} text-teal-500/25 dark:text-teal-400/25 drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]`}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animation: `float ${15 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: element.delay,
                textShadow: '0 0 10px rgba(20, 184, 166, 0.4)',
              }}
            >
              {element.text}
            </div>
          );
        })}
        
        {/* Floating brackets with enhanced visibility */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`bracket-${i}`}
            className="absolute font-mono font-bold select-none text-3xl md:text-5xl text-teal-500/20 dark:text-teal-400/20 drop-shadow-[0_0_12px_rgba(20,184,166,0.4)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${20 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${i * 1.5}s`,
              textShadow: '0 0 15px rgba(20, 184, 166, 0.5)',
            }}
          >
            {i % 2 === 0 ? '{' : '}'}
          </div>
        ))}

        {/* Floating code symbols with glow */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute font-mono font-bold select-none text-2xl md:text-4xl text-teal-500/20 dark:text-teal-400/20 drop-shadow-[0_0_10px_rgba(20,184,166,0.4)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${18 + Math.random() * 8}s infinite ease-in-out`,
              animationDelay: `${i * 1.2}s`,
              textShadow: '0 0 12px rgba(20, 184, 166, 0.5)',
            }}
          >
            {['<', '>', '/', '=', ';', '()', '[]', '{}', '||', '&&'][i]}
          </div>
        ))}

        {/* Animated gradient orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-2xl"
            style={{
              width: `${100 + Math.random() * 150}px`,
              height: `${100 + Math.random() * 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(20, 184, 166, 0.5), transparent)'
                : 'radial-gradient(circle, rgba(59, 130, 246, 0.5), transparent)',
              animation: `floatSlow ${30 + Math.random() * 20}s infinite ease-in-out`,
              animationDelay: `${i * 3}s`,
              opacity: 0.25,
            }}
          />
        ))}

        {/* Tech stack icons/text floating */}
        {['React', 'Node', 'TS', 'Next', 'WP', 'Git'].map((tech, i) => (
          <div
            key={`tech-${i}`}
            className="absolute font-mono font-bold select-none text-lg md:text-xl text-teal-500/15 dark:text-teal-400/15"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animation: `float ${22 + Math.random() * 8}s infinite ease-in-out`,
              animationDelay: `${i * 2.5}s`,
              textShadow: '0 0 8px rgba(20, 184, 166, 0.3)',
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
              Full-Stack Developer | React, Node.js, WordPress, DevOps
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Building end-to-end web solutions with modern frontend frameworks, robust backend APIs,
            custom WordPress development, and seamless cloud deployments. Passionate about creating
            scalable, performant applications that deliver exceptional user experiences.
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
