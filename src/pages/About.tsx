import { Code, Palette, Zap, Database, Globe, Server, Settings, Cloud } from 'lucide-react';
import { useState } from 'react';

export const About = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Flatten all skills into a single array with category info
  const allSkills = [
    // Frontend Skills
    { name: 'HTML', category: 'frontend', icon: '🌐' },
    { name: 'CSS', category: 'frontend', icon: '🎨' },
    { name: 'JavaScript', category: 'frontend', icon: '⚡' },
    { name: 'TypeScript', category: 'frontend', icon: '📘' },
    { name: 'React.js', category: 'frontend', icon: '⚛️' },
    { name: 'Next.js', category: 'frontend', icon: '▲' },
    { name: 'Solid.js', category: 'frontend', icon: '🔷' },
    { name: 'Tailwind CSS', category: 'frontend', icon: '💨' },
    { name: 'GSAP Animations', category: 'frontend', icon: '✨' },
    { name: 'Shadcn UI', category: 'frontend', icon: '🎯' },
    { name: 'Material UI', category: 'frontend', icon: '🎨' },
    { name: 'Ant Design', category: 'frontend', icon: '🐜' },
    { name: 'Redux', category: 'frontend', icon: '🔄' },
    { name: 'Zustand', category: 'frontend', icon: '🐻' },
    
    // Backend Skills
    { name: 'Node.js', category: 'backend', icon: '🟢' },
    { name: 'Express.js', category: 'backend', icon: '🚂' },
    { name: 'NestJS', category: 'backend', icon: '🪺' },
    { name: 'RESTful APIs', category: 'backend', icon: '🔌' },
    { name: 'GraphQL', category: 'backend', icon: '📊' },
    { name: 'PostgreSQL', category: 'backend', icon: '🐘' },
    { name: 'MongoDB', category: 'backend', icon: '🍃' },
    { name: 'MySQL', category: 'backend', icon: '🗄️' },
    { name: 'Supabase', category: 'backend', icon: '⚡' },
    { name: 'Firebase', category: 'backend', icon: '🔥' },
    { name: 'JWT', category: 'backend', icon: '🔐' },
    { name: 'OAuth', category: 'backend', icon: '🔑' },
    { name: 'Stripe', category: 'backend', icon: '💳' },
    { name: 'PayPal', category: 'backend', icon: '💰' },
    
    // WordPress Skills
    { name: 'WordPress', category: 'wordpress', icon: '📝' },
    { name: 'Custom Themes', category: 'wordpress', icon: '🎨' },
    { name: 'Plugin Integration', category: 'wordpress', icon: '🔌' },
    { name: 'Elementor Pro', category: 'wordpress', icon: '🧩' },
    { name: 'Bricks Builder', category: 'wordpress', icon: '🧱' },
    { name: 'WPBakery', category: 'wordpress', icon: '🍞' },
    { name: 'WooCommerce', category: 'wordpress', icon: '🛒' },
    { name: 'ACF', category: 'wordpress', icon: '📋' },
    
    // DevOps Skills
    { name: 'Git', category: 'devops', icon: '📦' },
    { name: 'GitHub', category: 'devops', icon: '🐙' },
    { name: 'GitHub Actions', category: 'devops', icon: '⚙️' },
    { name: 'CI/CD Pipelines', category: 'devops', icon: '🔄' },
    { name: 'Docker', category: 'devops', icon: '🐳' },
    { name: 'Vercel', category: 'devops', icon: '▲' },
    { name: 'Netlify', category: 'devops', icon: '🌐' },
    { name: 'Firebase Hosting', category: 'devops', icon: '🔥' },
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === selectedCategory);

  const expertise = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'Expert in React, Next.js, and modern JavaScript frameworks. Specialized in responsive UI/UX development with Tailwind CSS, GSAP animations, and component libraries like Shadcn UI, Material UI, and Ant Design.',
    },
    {
      icon: <Server size={32} />,
      title: 'Backend & API Development',
      description: 'Building robust server-side applications with Node.js, Express.js, and NestJS. Experienced in RESTful APIs, GraphQL, database management (PostgreSQL, MongoDB, MySQL), authentication systems, and payment gateway integrations.',
    },
    {
      icon: <Globe size={32} />,
      title: 'WordPress Development',
      description: 'Creating custom WordPress themes and plugins. Expert in page builders (Elementor Pro, Bricks Builder, WPBakery), custom post types, ACF, WooCommerce customization, and performance optimization.',
    },
    {
      icon: <Settings size={32} />,
      title: 'DevOps & Tools',
      description: 'Proficient in Git, GitHub Actions, CI/CD pipelines, Docker, and cloud deployment on Vercel, Netlify, Firebase Hosting, and Supabase. Focused on automation and efficient workflows.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Front-End Developer dedicated to building exceptional digital experiences
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a Full-Stack Developer with expertise spanning frontend, backend, WordPress, and DevOps.
              I specialize in building modern, scalable web applications using React, Next.js, Node.js, and NestJS.
              My experience includes creating custom WordPress solutions, integrating payment gateways, and
              deploying applications to cloud platforms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about delivering pixel-perfect, performant applications that exceed client expectations.
              From responsive UI/UX development to complex backend systems and WordPress customization, I bring
              a comprehensive skill set to every project.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our comprehensive range of expertise empowers businesses to seize new opportunities and achieve remarkable results.
            </p>
          </div>

          {/* Category Navigation Bar */}
          <div className="mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-lg transform scale-105'
                      : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="text-4xl md:text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all hover:shadow-lg"
              >
                <div className="text-teal-600 dark:text-teal-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
