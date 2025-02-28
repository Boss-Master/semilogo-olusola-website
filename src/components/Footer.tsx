import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const Footer = () => {
  // Function to scroll to the About section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Existing function to scroll to hero (optional if still needed)
  const scrollToHero = () => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* Clickable heading that scrolls to About */}
            <h3
              onClick={scrollToAbout}
              className="text-lg font-semibold mb-4 text-black dark:text-white text-left cursor-pointer"
            >
              Semilogo
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SemilogoDan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/semilogo-dan-s-ba86b2206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:semilogoolusola@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                {/* Button that scrolls to hero (optional if you still need it) */}
                <button
                  onClick={scrollToHero}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Connect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-left">
              Feel free to reach out through any of my social media channels or send me an email directly.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Semilogo Olusola OGUNGBURE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
