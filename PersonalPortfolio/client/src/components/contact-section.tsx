import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnasudan909@gmail.com",
      href: "mailto:krishnasudan909@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 6006277089",
      href: "tel:+916006277089",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/krishna908",
      href: "https://www.linkedin.com/in/krishna908/",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/krishna908/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Github,
      href: "https://github.com/krishnasudan909",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: Mail,
      href: "mailto:krishnasudan909@gmail.com",
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.subject.trim().length < 5) {
      newErrors.subject = "Please enter a subject (at least 5 characters).";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Unable to send message",
        description: error instanceof Error ? error.message : "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology. Feel free
            to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className={`${social.color} text-white p-3 rounded-lg transition-colors duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={`w-full ${errors.name ? "border-red-500" : ""}`}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className={`w-full ${errors.email ? "border-red-500" : ""}`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className={`w-full ${errors.subject ? "border-red-500" : ""}`}
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  className={`w-full resize-vertical ${errors.message ? "border-red-500" : ""}`}
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg btn-magnetic flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
