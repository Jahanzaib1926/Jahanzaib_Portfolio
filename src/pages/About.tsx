import { Code, Palette, Zap, Database } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'WordPress', level: 88 },
    { name: 'NestJS', level: 80 },
    { name: 'JavaScript', level: 92 },
  ];

  const expertise = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with React and modern JavaScript frameworks.',
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, beautiful interfaces that provide exceptional user experiences.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Ensuring fast load times and smooth interactions through code optimization.',
    },
    {
      icon: <Database size={32} />,
      title: 'Full Stack Integration',
      description: 'Seamlessly connecting frontend applications with backend services and databases.',
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
              With several years of experience in front-end development, I specialize in creating
              modern, responsive web applications that combine aesthetic design with robust functionality.
              My expertise spans across React ecosystem, Tailwind CSS, and WordPress development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm constantly learning and adapting to new technologies, currently expanding my skills
              in NestJS for backend development. My goal is to deliver pixel-perfect, performant
              applications that exceed client expectations.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-600 dark:bg-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
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
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
