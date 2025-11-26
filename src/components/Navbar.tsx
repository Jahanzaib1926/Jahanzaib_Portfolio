import { Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jahanzaib_Resume.pdf';
    link.download = 'Jahanzaib_Resume.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-mono font-bold text-gray-900 dark:text-white">
            Dev Jahanzaib
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium text-sm"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4 flex space-x-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors text-gray-700 dark:text-gray-300`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
