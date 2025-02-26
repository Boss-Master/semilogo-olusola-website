import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, GraduationCap, Award, Medal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
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

        {/* About Section */}
        <section id="about" className="about-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/Profile_pic.jpg"
                    alt="Semilogo Olusola OGUNGBURE"
                    className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
                  />
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

     {/* Featured Project Section */}
        <section className="featured-project py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Honored to be Featured on Electrical Engineering Portal
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-left">
                <div className="space-y-4">
                  <div className="w-full text-center">
                    <h3 className="text-2xl font-semibold dark:text-white">
                      11/0.4kV Substation Design
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive guide on the design and implementation of 11/0.4kV substations in Nigeria, focusing on power distribution and safety standards.
                  </p>
                  <div className="text-center">
                    <a 
                      href="https://electrical-engineering-portal.com/download-center/books-and-guides/power-substations/11-0-4kv-ss-nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-white dark:bg-white dark:text-gray-800 px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      View Full Project
                    </a>
                  </div>
                </div>
                <div>
                  <img 
                    src="EEP.png" 
                    alt="11/0.4kV Substation"
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-primary dark:text-white" size={24} />
                  <h3 className="text-xl font-semibold dark:text-white">
                    Master of Science in Electrical Engineering
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-left">
                  Vrije Brussels Universiteit (VUB)/ULB • 2024
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-left">
                  Thesis: Development of an AI/ML Model to Optimize Product Quality in Power Systems by integrating process parameters and inspection data.
                </p>
              </div>
              
              <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-primary dark:text-white" size={24} />
                  <h3 className="text-xl font-semibold dark:text-white">
                    Bachelor's in Engineering
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-left">
                  Federal University of Technology Akure (FUTA) • 2011-2016
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-left">
                  Control Systems, Digital and Wireless Communication, Power System Analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="work-experience-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Work Experience</h2>
            <div className="space-y-12 max-w-5xl mx-auto">
              {[
                {
                  title: "Power Systems Intern – Data Analyst",
                  company: "Agfa-Gevaert Group",
                  location: "Belgium",
                  period: "Dec 2023 – Apr 2024",
                  responsibilities: [
                    "Developed and deployed AI/ML models to analyze sensor data from power systems, optimizing energy generation and distribution efficiency.",
                    "Developed predictive maintenance models using machine learning techniques to forecast equipment failures, reducing downtime and enhancing system performance.",
                    "Communicated analysis results and recommendations to stakeholders through technical reports and visualizations, supporting decision-making for power system improvements."
                  ],
                  achievements: []
                },
                {
                  title: "Field Support Engineer",
                  company: "IPT Power Tech & IHS Telecom",
                  location: "Lebanon",
                  period: "Nov 2019 – Aug 2021",
                  responsibilities: [
                    "Performed root cause analysis on electrical faults (transformers, circuit breakers, and generators) and proposed corrective actions.",
                    "Implemented and ensured the functionality of hybrid power solutions (DCDG) including diesel and renewable energy integration for off-grid sites.",
                    "Used diagnostic tools and test equipment (multimeters, oscilloscopes) to identify system anomalies and resolve faults efficiently."
                  ],
                  achievements: []
                },
                {
                  title: "Power Systems Intern",
                  company: "Ondo State Power Company",
                  location: "Nigeria",
                  period: "Jun 2015 – Aug 2016",
                  responsibilities: [
                    "Designed and planned rural electrification power infrastructure, converting 11kV to 415V, which improved electricity distribution for over 1000 households in rural communities.",
                    "Developed technical documentation including transformer designs and system layouts using AutoCAD, reducing design errors by 10%.",
                    "Contributed to thesis research on optimizing power distribution networks, focusing on improving grid efficiency and fault tolerance in rural areas, resulting in a 25% performance improvement in 3 rural communities."
                  ],
                  achievements: []
                }
              ].map((job, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold dark:text-white mb-2">{job.title}</h3>
                  <p className="text-primary font-medium mb-1">{job.company}, {job.location}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{job.period}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 dark:text-white">Key Responsibilities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-left text-gray-600 dark:text-gray-300">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="ml-4">{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    {job.achievements.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2 dark:text-white">Achievements</h4>
                        <ul className="list-disc pl-5 space-y-2 text-left text-gray-600 dark:text-gray-300">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="ml-4">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

     {/* Projects Section */}
      <section id="projects" className="project-section py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
          {/* Updated to 3 columns on md+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Overview and Analysis of 11/0.415 kV, 500 kVA",
                description:
                  "This project involves the design, analysis, and performance evaluation of a 500 kVA, 11/0.415 kV distribution transformer, focusing on efficiency, losses, and voltage regulation.",
                image: "distribution-transformer.png",
                link: "/DESIGN_OF_500kVA_11_0_415kV_SUBSTATION_O (1).pdf",
              },
              {
                title: "Rural Electrification Design Project",
                description:
                  "Comprehensive internship project focusing on rural electrification design and implementation.",
                image: "Rural.png",
                link: "/RURAL_ELECTRIFICATION_DESIGN_INTERSHIP_P (1).pdf",
              },
              {
                title: "CMOS Project: Sawtooth Waveform Generation",
                description:
                  "This project implements a CMOS-based circuit to generate a sawtooth waveform with a period of 40ns and a voltage range from 0.1V to 2.2V. The design allows digital control using a 3-bit input and features voltage-controlled frequency modulation via an OTA.",
                image: "Sawtooth.png", // Replace if needed
                link: "https://github.com/SemilogoDan/Microelectronics-CMOS-Design",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group relative"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-center">{project.description}</p>
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 project-title dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-white hover:text-primary/90 dark:hover:text-gray-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


        {/* Certification Section */}
        <section className="certification-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {[
                {
                  title: "Solar Energy and Electrical System Design",
                  issuer: "Coursera",
                  date: "Dec 2024",
                  link: "https://www.coursera.org/accomplishments"
                },
                {
                  title: "Wind Energy",
                  issuer: "Coursera",
                  date: "Nov 2024",
                  link: "https://bit.ly/41k0GpN"
                },
                {
                  title: "Energy Transition: Innovation Towards a Low-Carbon Future",
                  issuer: "Coursera",
                  date: "Dec 2024",
                  link: "https://i.imgur.com/lzwUwtH.png"
                },
                {
                  title: "Microsoft Power BI Data Analyst Specialization",
                  issuer: "Microsoft",
                  date: "Nov 2024",
                  link: "https://www.coursera.org/account/accomplishments/professional-cert/EASHVEE1JIRG"
                },
                {
                  title: "Google Project Management",
                  issuer: "Google",
                  date: "Dec 2024",
                  link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NOTSLU24KEHA/CERTIFICATE_LANDING_PAGE~NOTSLU24KEHA.jpeg"
                }
              ].map((cert, index) => (
                <div key={index} className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md cursor-pointer">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Medal className="text-primary" size={24} />
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                      <span className="text-white text-sm">View Certificate</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honors & Awards Section */}
        <section className="honors-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Achievements</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <a 
                  href="https://i.imgur.com/35T7Fqa.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="text-primary" size={24} />
                      <h3 className="text-xl font-semibold award-title group-hover:text-primary transition-colors dark:text-white">
                        Agbami Scholarship
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Agbami Oilfield • 2013-2016</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Scholarship for Engineering and Medical Professions
                    </p>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                      <span className="text-white text-sm">View Scholarship Declaration</span>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://i.imgur.com/LCkQX43.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="text-primary" size={24} />
                      <h3 className="text-xl font-semibold award-title group-hover:text-primary transition-colors dark:text-white">
                        Best Student Award
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Professor Olufolaji D.B Scholarship Prize • 2014</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Awarded for outstanding academic performance in Year 2
                    </p>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                      <span className="text-white text-sm">View Scholarship Declaration</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Get In Touch</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="max-w-7xl mx-auto">
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send Message
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
