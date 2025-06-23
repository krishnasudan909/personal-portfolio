import { CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "UBS Group AG",
      period: "August 2023 - Present",
      current: true,
      achievements: [
        "Boosted cloud monitoring efficiency by 20% by designing and deploying Azure ARM templates and building scalable RESTful APIs using Spring Boot",
        "Developed ML model with 94% accuracy for SLA breach prediction, enabling proactive monitoring and system reliability",
        "Enhanced user retention by 15% through dynamic React.js UI with real-time filtering and improved user interaction",
        "Automated health checks, feed chasers, and change management workflows, saving 210+ manual hours",
        "Created QA utility to validate downstream system readiness, reducing manual verification by 50+ hours monthly",
        "Applied automated unit testing using JUnit within CI/CD environment for reliable code deployment",
      ],
      technologies: ["Java", "Spring Boot", "React.js", "Azure", "JUnit", "CI/CD"],
    },
    {
      title: "Technology Intern",
      company: "UBS Group AG",
      period: "January 2023 - June 2023",
      current: false,
      achievements: [
        "Designed predictive monitoring system for CPU load and system metrics, achieving 98% forecast accuracy over 90-day period",
        "Streamlined frequent user incidents by developing automated workflows, reducing manual workload for ASR team",
        "Enhanced operational uptime through proactive scaling and performance optimization",
      ],
      technologies: ["Java", "Python", "Spring Boot", "Cloud Monitoring"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                <div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${
                    exp.current ? "bg-primary" : "bg-gray-400"
                  } rounded-full border-4 border-white dark:border-gray-800 z-10`}
                ></div>
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:w-1/2 md:pr-8 md:text-right"
                      : "md:w-1/2 md:pl-8 md:ml-auto"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div
                      className={`text-sm ${
                        exp.current
                          ? "text-primary"
                          : "text-gray-500 dark:text-gray-400"
                      } font-semibold mb-2`}
                    >
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                      {exp.company}
                    </div>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            exp.current
                              ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
