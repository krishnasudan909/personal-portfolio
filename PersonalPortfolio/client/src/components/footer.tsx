import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const contactInfo = [
    { icon: Mail, text: "krishnasudan909@gmail.com" },
    { icon: null, text: "(+91) 6006277089" },
    { icon: null, text: "Pune, India" },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Krishna Sudan</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Software Engineer passionate about creating innovative
              solutions and driving technological advancement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/krishna908/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/krishnasudan909"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:krishnasudan909@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>krishnasudan909@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 text-blue-400 flex-shrink-0 text-center">📞</span>
                <span>(+91) 6006277089</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 text-blue-400 flex-shrink-0 text-center">📍</span>
                <span>Pune, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Krishna Sudan. All rights reserved. Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
