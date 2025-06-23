import { Code, Layers, Database, Settings } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Java", level: 90 },
        { name: "C++", level: 90 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "green",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "purple",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools",
      icon: Settings,
      color: "orange",
      skills: [
        { name: "Automation", level: 90 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Linux", level: 80 },
        { name: "CI/CD", level: 70 },
      ],
    },
    {
      title: "Concepts",
      icon: Code,
      color: "purple",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 85 },
        { name: "System Design", level: 80 },
        { name: "API Design", level: 90 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700",
        icon: "text-blue-600 dark:text-blue-400",
        bar: "bg-blue-600",
      },
      green: {
        bg: "from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700",
        icon: "text-green-600 dark:text-green-400",
        bar: "bg-green-600",
      },
      purple: {
        bg: "from-purple-50 to-violet-100 dark:from-gray-800 dark:to-gray-700",
        icon: "text-purple-600 dark:text-purple-400",
        bar: "bg-purple-600",
      },
      orange: {
        bg: "from-orange-50 to-red-100 dark:from-gray-800 dark:to-gray-700",
        icon: "text-orange-600 dark:text-orange-400",
        bar: "bg-orange-600",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colorClasses.bg} p-6 rounded-xl hover-lift animate-scale-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <category.icon
                    className={`w-5 h-5 ${colorClasses.icon} mr-2`}
                  />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className={`${colorClasses.bar} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
