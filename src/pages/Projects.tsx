import { useState } from 'react';
import { ExternalLink, Github, X, Calendar, User, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
  duration?: string;
  role?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Halal Table',
    description: 'UK-based restaurant management system for Halal-certified restaurants with dual Admin and Vendor panels.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80',
    tech: ['React.js', 'React Hook Form', 'Material UI', 'JWT', 'Firebase', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    duration: 'Jan 2025 – July 2025',
    role: 'Developer',
    details: 'Developed and maintained a robust restaurant management system specifically designed for UK-based Halal-certified restaurants. Built dual panels for Admin and Vendors with comprehensive features. Admin Panel: Oversee restaurant approvals, handle reviews, manage payments, and manage Help Center support tickets. Vendor Panel: Manage restaurant profiles, define opening and closing time slots, and create dynamic menus and cuisines with seamless CRUD functionality. Implemented JWT authentication for secure user access, integrated Firebase for real-time chat and push notifications. Built modular architecture with optimized code structure under features/admin and features/vendor for better maintainability and clear separation of concerns. Ensured responsive UI and consistent state management with scalable performance.',
  },
  {
    id: 2,
    title: 'Learn Local',
    description: 'Comprehensive school management platform enabling seamless interaction between ambassadors, attendees, and parents.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    tech: ['React.js', 'TypeScript', 'JWT', 'React Hooks'],
    liveUrl: '#',
    githubUrl: '#',
    duration: 'August 2024 - Present',
    role: 'Front-End Developer',
    details: 'Developed a comprehensive school management platform with multiple modules including profiles, family details, experiences, wallet, and resource library. Implemented scalable architecture using React.js and TypeScript. Integrated JWT authentication with complete auth flow (login, signup, OTP verification, password reset) for secure user sessions. Designed dynamic role-based dashboards for Ambassador and Attendee panels, featuring modular navigation, reusable components, and custom hooks for shared logic. Focused on performance optimization through lazy loading, code splitting, and custom React hooks for API interactions. Delivered a responsive, accessible, and maintainable frontend aligned with modern UX standards.',
  },
  {
    id: 3,
    title: 'Lotus Pro',
    description: 'Modern E-commerce platform for furniture sales with Admin, Vendor, and User panels, plus dedicated mobile app.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    tech: ['React.js', 'Firebase', 'Payment Gateways', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    duration: 'April 2024 - September 2024',
    role: 'Front-End Developer',
    details: 'Built a modern E-commerce platform for furniture sales with Admin, Vendor, and User panels, along with a dedicated user-side mobile app for seamless shopping experiences. Designed and implemented dynamic booking and pricing flows, integrated secure payment gateways, and enhanced usability through real-time availability checks and product comparisons. Developed an intuitive Admin Panel for managing products, vendors, orders, inventory, and reports, with full content and settings control. Designed a dedicated Vendor Dashboard to manage listings, orders, and shipping, featuring real-time customer communication via Firebase chat.',
  },
  {
    id: 4,
    title: 'UMS - University Management System',
    description: 'Comprehensive University Management App with role-based system for Super Admin, Organization, and Student portal.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    tech: ['React.js', 'TypeScript', 'Date-fns', 'Styled Components'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Developed a comprehensive University Management App in React.js with TypeScript. It\'s a role-based system with three main roles: Super Admin, Organization (University), and Eportal (Student Side). Super Admin: Responsible for adding organizations, assigning admins to each organization and managing their permissions, and assigning roles to different users. Admin: Can announce Admissions in different programs, announce different programs, announce merit list and calculate students eligibility for programs, and assign tasks and assignments to students. Eportal (Student side): Students can submit their assignments and take lectures, see their attendance and tasks assigned to them. Teachers can also check their HR system on it.',
  },
  {
    id: 5,
    title: 'Hyper Index',
    description: 'Credit-based SaaS platform designed for distributors, resellers, and clients to manage digital tools and assign credits.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Hyper Index is a credit-based SaaS platform designed for distributors, resellers, and clients. It manages digital tools, assigns credits, and tracks usage in an organized way. It\'s a role-based system with multiple panels. Super Admin: Create and manage distributors, assign credits and control their distribution, manage categories, tools, authors, and global settings, track transactions and tool usage requests. Distributor Panel: Receive credits from Super Admin, create and manage resellers under them, assign credits to resellers and clients, monitor clients\' tool usage and transactions. Client Panel: Browse and purchase credits, access and use available tools, submit assignments, projects, or assessments depending on the tool, view tool usage history and balance credits.',
  },
  {
    id: 6,
    title: 'SP-Venture-Club',
    description: 'Platform connecting startups and investors through a structured, user-friendly, and professional website.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    tech: ['Next.js', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'SP-Venture Club is a platform designed to connect startups and investors through a structured, user-friendly, and professional website. The platform offers startup profiles, investor discovery, marketplace services, deal flow management, and pitch submissions. Designed and developed the complete frontend UI/UX of the platform using Tailwind CSS. The design focused on being professional, minimalist, and responsive. The new interface provides intuitive navigation, trust-building visuals, and a smooth user experience across all pages including Startup Discovery, Investor Profiles, Marketplace, Events, and Blog sections.',
  },
  {
    id: 7,
    title: 'Invest Saudi',
    description: 'Official investment platform under the Ministry of Investment - Performance-driven platform with server-side rendering.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Developed and redesigned the frontend of Invest Saudi, the official investment platform under the Ministry of Investment, using Next.js for performance-driven server-side rendering and Tailwind CSS for rapid, scalable UI development. Built a responsive, mobile-first interface optimized for cross-browser compatibility and accessibility, ensuring a smooth user experience across desktop, tablet, and mobile devices. Implemented dynamic routing, reusable UI components, and modular layouts in Next.js to ensure the platform is scalable and easy to maintain. Designed interactive sections like hero banners, investment sector showcases, resource hubs, and news insights, maintaining consistency with Invest Saudi\'s branding and Vision 2030 identity. Optimized frontend performance through image optimization, lazy loading, and code-splitting to reduce load times and enhance SEO rankings. Integrated real-time data-driven pages displaying investment opportunities, market trends, and sector insights. Delivered a professional and business-focused design system to build trust with international investors while maintaining a modern, minimalist aesthetic.',
  },
  {
    id: 8,
    title: 'Custom WordPress E-Commerce',
    description: 'Custom WordPress theme with WooCommerce integration, Elementor Pro, and advanced product management features.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tech: ['WordPress', 'WooCommerce', 'Elementor Pro', 'PHP', 'ACF', 'Custom Post Types'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Developed a custom WordPress theme with full WooCommerce integration for a client\'s e-commerce needs. Implemented custom post types for products, integrated Advanced Custom Fields (ACF) for flexible content management, and used Elementor Pro for drag-and-drop page building. Created dynamic product pages with custom pricing options, inventory management, and seamless checkout flow. Optimized performance through caching, image optimization, and database queries. Implemented security hardening measures and SEO optimization for better search engine rankings. Added custom API integrations for third-party services and payment gateways.',
  },
  {
    id: 9,
    title: 'Task Management API',
    description: 'RESTful API backend with NestJS, PostgreSQL, JWT authentication, and role-based access control.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    tech: ['NestJS', 'PostgreSQL', 'JWT', 'TypeScript', 'RESTful API', 'Role-Based Access'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Built a robust RESTful API backend using NestJS framework with PostgreSQL database. Implemented JWT-based authentication system with refresh tokens, role-based access control (RBAC) for different user permissions, and secure password hashing. Developed comprehensive CRUD operations for task management, user management, and team collaboration features. Integrated database migrations, query optimization, and caching strategies for improved performance. Implemented webhooks for real-time notifications and third-party integrations. Created comprehensive API documentation and error handling mechanisms.',
  },
  {
    id: 10,
    title: 'Real-Time Chat Application',
    description: 'Real-time messaging application with Firebase, React, and push notifications for seamless communication.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    tech: ['React.js', 'Firebase', 'Firebase Auth', 'Push Notifications', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    details: 'Developed a real-time chat application using React.js and Firebase for instant messaging capabilities. Implemented Firebase Authentication for secure user login and registration. Built real-time message synchronization using Firebase Realtime Database, ensuring messages appear instantly across all connected clients. Integrated push notifications to alert users of new messages even when the app is closed. Created user presence indicators, typing indicators, and message read receipts. Implemented file sharing capabilities and emoji support for enhanced user experience. Designed responsive UI that works seamlessly across desktop and mobile devices.',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing various technologies and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl shadow-lg animate-slide-up"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-teal-500/10 to-blue-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold text-lg flex items-center gap-2">
                    View Details
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {project.tech.length} Technologies
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.duration && (
                    <div className="flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 mb-2">
                      <Calendar size={14} />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <User size={14} />
                      <span>{project.role}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-teal-100 to-teal-50 dark:from-teal-900/50 dark:to-teal-800/30 text-teal-700 dark:text-teal-300 text-xs font-medium rounded-full border border-teal-200 dark:border-teal-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-72 lg:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110 shadow-lg z-10"
                aria-label="Close"
              >
                <X size={24} className="text-gray-900 dark:text-white" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {selectedProject.title}
                </h2>
                {selectedProject.duration && (
                  <div className="flex items-center gap-2 text-white/90 mb-1">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{selectedProject.duration}</span>
                  </div>
                )}
                {selectedProject.role && (
                  <div className="flex items-center gap-2 text-white/80">
                    <User size={16} />
                    <span className="text-sm">{selectedProject.role}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 lg:p-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-teal-100 to-teal-50 dark:from-teal-900/50 dark:to-teal-800/30 text-teal-700 dark:text-teal-300 text-sm font-medium rounded-lg border border-teal-200 dark:border-teal-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base whitespace-pre-line">
                  {selectedProject.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
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
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-all transform hover:scale-105 font-medium"
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
