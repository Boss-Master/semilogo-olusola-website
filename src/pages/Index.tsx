import React, { useState } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'New Contact Form Message'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        subject: formData.subject,
        name: formData.name,
        message: formData.message,
        from_email: formData.email,
        to_name: 'Semilogo OGUNGBURE'
      };

      console.log('Sending email with params:', templateParams);

      await emailjs.send(
        'service_h6yyt45',
        'template_xlaanla',
        templateParams,
        'x6vgvGnMcJAOBqnZL'
      );

      toast({
        title: "Message sent!",
        description: "Your message has been sent successfully.",
      });

      setFormData({
        name: '',
        email: '',
        message: '',
        subject: 'New Contact Form Message'
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <section id="home" className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg backdrop-blur-sm">
              <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                  Electrical Engineering
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Focused on Power Systems: Electricity Generation, Transmission, Distribution, and Renewable Energy Integration
                </p>
                <a
                  href="#projects"
                  className="inline-block bg-primary text-white dark:bg-white dark:text-gray-800 px-8 py-3 rounded-xl hover:bg-primary/90 dark:hover:bg-white/90 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="profile-container relative w-64 h-64 mx-auto">
                    <div className="profile-glow absolute inset-0 rounded-full"></div>
                    <img
                      src="/Profile_pic.jpg"
                      alt="Semilogo Olusola OGUNGBURE"
                      className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg relative z-10"
                    />
                  </div>
                  <div className="flex justify-center mt-6 space-x-4">
                    <a
                      href="https://github.com/SemilogoDan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/semilogo-dan-s-ba86b2206/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:semilogoolusola@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-left dark:text-white">About Me</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-left">
                    I am a recent graduate with a Master's degree in Electrical Engineering, specializing in power systems and renewable energy integration. My thesis focused on developing an AI/ML model to optimize product quality in power systems by integrating process parameters and inspection data. My field experience as a Power Systems Intern and Field Support Engineer has given me a solid foundation in electrical power principles, system design, and grid optimization.
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-left dark:text-white">Scholarships</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-left">
                      <li>
                        <a 
                          href="https://imgur.com/35T7Fqa" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary dark:hover:text-primary"
                        >
                          ✓ Agbami Scholarship (2013-2016)
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.facebook.com/profile/100001585760055/search/?q=OLUFOLAJI%2FCAC%20GLORY%20SCHORLARSHIP%20AWARD" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary dark:hover:text-primary"
                        >
                          ✓ Professor Olufolaji D.B Scholarship Prize (2014)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-left dark:text-white">Interests</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-left">
                    <li>✓ Power Systems Design & Analysis</li>
                    <li>✓ Grid Stability & Control</li>
                    <li>✓ Power System Protection</li>
                    <li>✓ Renewable Energy Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Get In Touch</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="max-w-7xl mx-auto">
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="Your message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
