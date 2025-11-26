import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with cart, checkout, and payment integration.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'Tailwind', 'Stripe', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Full-featured e-commerce platform with real-time inventory management, secure payment processing, and responsive design. Built with React and integrated with Stripe for payment processing.',
  },
  {
    id: 2,
    title: 'Portfolio CMS',
    description: 'Custom WordPress theme for creative professionals.',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    liveUrl: '#',
    details: 'A beautiful, customizable WordPress theme designed for creative professionals. Features a drag-and-drop page builder, custom post types, and optimized performance.',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'NestJS', 'PostgreSQL', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Real-time collaborative task management application with team features, notifications, and progress tracking. Built with React frontend and NestJS backend.',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Interactive weather app with forecasts and visualizations.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'TypeScript', 'API Integration'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Beautiful weather dashboard with 7-day forecasts, interactive maps, and detailed weather metrics. Features location search and geolocation support.',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Modern blogging platform with markdown support.',
    image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'Next.js', 'MDX', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'SEO-optimized blogging platform with markdown/MDX support, syntax highlighting, and responsive design. Built with Next.js for optimal performance.',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Track workouts, nutrition, and fitness goals.',
    image: 'https://images.pexels.com/photos/4162483/pexels-photo-4162483.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'Chart.js', 'Firebase', 'PWA'],
    liveUrl: '#',
    details: 'Progressive web app for tracking fitness activities, nutrition, and goals. Features charts, streaks, and push notifications.',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work showcasing various technologies and solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {selectedProject.details}
              </p>

              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
