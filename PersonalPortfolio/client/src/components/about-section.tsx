import { MapPin, Building, GraduationCap, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  const metrics = [
    { value: "20%", label: "Boost in cloud monitoring efficiency" },
    { value: "94%", label: "ML model accuracy for SLA prediction" },
    { value: "15%", label: "Enhancement in user retention" },
    { value: "210+", label: "Manual hours saved through automation" },
  ];

  const quickFacts = [
    { icon: MapPin, label: "Pune, India" },
    { icon: Building, label: "UBS Group AG" },
    { icon: GraduationCap, label: "B.Tech IT, VIT Pune (GPA: 8.84)" },
    { icon: Mail, label: "krishnasudan909@gmail.com" },
    { icon: Phone, label: "(+91) 6006277089" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Java Full Stack Developer currently working at
              UBS Group AG, where I specialize in building enterprise-grade applications
              using Java Spring Boot for backend and React.js for frontend development.
              With a strong foundation in Java ecosystem and modern web technologies,
              I deliver robust, scalable solutions for complex business requirements.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise spans the entire Java full stack development lifecycle,
              from designing RESTful APIs and microservices architecture to creating
              intuitive user interfaces. I'm driven by the challenge of building
              high-performance applications that seamlessly integrate backend efficiency
              with exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <fact.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
