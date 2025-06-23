import { Download, Mail, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create resume content based on the provided PDF
    const resumeContent = `KRISHNA SUDAN
Pune, India | krishnasudan909@gmail.com | (+91) 6006277089 | LinkedIn: https://www.linkedin.com/in/krishna908/

EDUCATION
Vishwakarma Institute of Technology, Pune, India
Bachelor's of Information Technology
Cumulative GPA: 8.84

WORK EXPERIENCE

UBS Group AG, Pune, India
Software Engineer (August 2023 - Present)
• Boosted cloud monitoring efficiency by 20% by designing and deploying Azure Resource Manager (ARM) templates and building scalable RESTful APIs using Spring Boot for seamless infrastructure provisioning.
• Developed a machine learning model with 94% accuracy to predict SLA breaches, enabling proactive monitoring and improving incident response and system reliability.
• Enhanced user retention by 15% through a dynamic React.js UI (Tree and Tabular visualization) to surface SLA breaches with real-time filtering and improved user interaction.
• Automated health checks, feed chasers, and change management workflows, saving 210+ manual hours and improving operational efficiency.
• Created a QA utility to validate downstream system readiness, reducing manual verification by 50+ hours monthly, accelerating release cycles, and enhancing cross-team collaboration.
• Applied automated unit testing using JUnit within a CI/CD environment, contributing to reliable code deployment and reduced regression bugs.

UBS Group AG, Pune, India
Technology Intern (January 2023 - June 2023)
• Designed a predictive monitoring system for CPU load and system metrics, achieving 98% forecast accuracy over a 90-day period, enabling proactive scaling and performance optimization.
• Streamlined frequent user incidents by developing automated workflows, reducing manual workload for the Application Support and Reliability (ASR) team and enhancing operational uptime.

SKILLS
Programming Languages: C++, Java, Javascript, Python
Framework and Libraries: Spring Boot, React JS, Node JS, Microservices, REST API's
Databases: MySQL, PostgreSQL, MongoDB
Tools and other Technical Proficiencies: Git, Linux, Junit, HTML/CSS, Bootstrap
Concepts: SDLC, CI/CD, Test Automation, API Design

PROJECTS
UBS Optivision (Javascript, React JS, HTML, CSS)
• Developed a Chrome extension and responsive website utilizing Ishihara plates to test for Color Vision Deficiency (CVD), promoting accessibility and workplace inclusivity through intuitive UX design.

Popup Notification Sender (Java, Python, SQL)
• Built a backend service for Veritas LLC's Illuminate program, enabling multi-channel communication (Email, WhatsApp, SMS) for product update subscriptions, improving user engagement and message delivery flexibility.

Personal Khata (Java, Android SDK, Firebase)
• Built an Android application for managing and tracking categorized income and expenses to help users monitor personal finances.

ACHIEVEMENTS AND CERTIFICATIONS
• UBS India Hackathon Winner
• UBS Certified Engineer and Problem Solving Certified by Hackerrank`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Krishna_Sudan_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      const offsetTop = contactElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      const offsetTop = aboutElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            {/* Professional headshot */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl animate-float border-4 border-white dark:border-gray-800">
              <img 
                src={profileImage} 
                alt="Krishna Sudan - Java Full Stack Developer"
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Krishna Sudan
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-primary mb-6 animate-slide-up">
            Java Full Stack Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Full Stack Java Developer at UBS Group AG, architecting Spring Boot backends 
            and React.js frontends for enterprise applications. Proven track record of 
            improving system efficiency by 20% and user retention by 15%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delayed">
            <Button
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium btn-magnetic flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium btn-magnetic flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium btn-magnetic flex items-center space-x-2"
            >
              <a
                href="https://www.linkedin.com/in/krishna908/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-primary hover:text-primary/80 transition-colors duration-200"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
