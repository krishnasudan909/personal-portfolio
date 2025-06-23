import { Eye, Bell, Smartphone, Github, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "UBS Optivision",
      description:
        "Chrome extension and website for Color Vision Deficiency testing, providing accessible vision screening tools for users.",
      icon: Eye,
      technologies: ["JavaScript", "React.js", "HTML/CSS"],
      gradient: "from-blue-400 to-purple-600",
      techColor: "blue",
    },
    {
      title: "Popup Notification Sender",
      description:
        "Multi-channel communication backend service for Veritas LLC, enabling efficient notification delivery across various platforms.",
      icon: Bell,
      technologies: ["Java", "Python", "SQL"],
      gradient: "from-green-400 to-blue-500",
      techColor: "green",
    },
    {
      title: "Personal Khata",
      description:
        "Android financial tracking application designed to help users manage their personal finances with intuitive expense tracking and budget management.",
      icon: Smartphone,
      technologies: ["Java", "Android SDK", "Firebase"],
      gradient: "from-purple-400 to-pink-500",
      techColor: "purple",
    },
  ];

  const getTechColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      green: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      purple:
        "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover-lift overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project mockup */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="text-white text-center">
                  <project.icon className="w-16 h-16 mx-auto mb-2" />
                  <div className="text-lg font-semibold">
                    {project.title}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${getTechColorClasses(
                        project.techColor
                      )}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            For more projects and contributions, visit my GitHub profile
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <a
              href="https://github.com/krishnasudan909"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
