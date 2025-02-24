import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, GraduationCap, Award, Medal } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <div>
        <h1>SemiLogo Ogunbure</h1>
        <p>Electrical Engineer specializing in Power Systems, AI/ML, and Substation Design</p>
        <button>View Projects</button>
      </div>

      {/* About Section */}
      <div>
        <h2>About Me</h2>
        <p>
          Recent graduate with a Master's degree in Electrical Engineering from Vrije Universiteit Brussel (VUB), specializing in power systems optimization using AI/ML models. 
          Possessing hands-on experience in electricity generation, transmission, distribution, and substation design.
        </p>
        <p>
          Proficient in Python, MATLAB, AutoCAD, and LaTeX for designing and analyzing electrical systems. Experienced in integrating renewable energy sources into power grids.
        </p>
        <h3>Interests</h3>
        <ul>
          <li>Power System Optimization</li>
          <li>AI/ML Model Development</li>
          <li>Substation Design & Automation</li>
          <li>Renewable Energy Integration</li>
          <li>Network Infrastructure & Security</li>
        </ul>
      </div>

      {/* Education Section */}
      <div>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Master of Science in Electrical Engineering</strong><br />
            Vrije Universiteit Brussel (VUB) • 2022 - 2024<br />
            Thesis: Development of an AI/ML Model to Optimize Product Quality by Integrating Process Parameters and Inspection Data.
          </li>
          <li>
            <strong>Bachelor of Engineering in Electrical and Electronics Engineering</strong><br />
            Federal University of Technology Akure (FUTA) • 2011 - 2016<br />
            Relevant Courses: Electrical Power Principles, Control Engineering, Renewable Energy Systems.
          </li>
        </ul>
      </div>

      {/* Work Experience Section */}
      <div>
        <h2>Work Experience</h2>
        {[
          {
            title: "Data Analyst",
            company: "Agfa-Gevaert Group",
            location: "Brussels, Belgium",
            period: "December 2023 – April 2024",
            responsibilities: [
              "Developed and deployed AI/ML models to analyze sensor data from power systems, optimizing energy generation and distribution efficiency.",
              "Created predictive maintenance models using machine learning techniques to forecast equipment failures, reducing downtime and enhancing system performance.",
              "Communicated analysis results and recommendations to stakeholders through technical reports and visualizations."
            ],
            achievements: ["Improved energy distribution efficiency by 15%."]
          },
          {
            title: "Field Support Engineer",
            company: "IPT Power Tech & IHS Telecom",
            location: "Lebanon",
            period: "November 2019 – August 2021",
            responsibilities: [
              "Conducted root cause analysis on electrical faults (transformers, circuit breakers, generators) and proposed corrective actions.",
              "Implemented hybrid power solutions integrating diesel and renewable energy for off-grid sites.",
              "Used diagnostic tools (multimeters, oscilloscopes) to identify system anomalies and resolve faults efficiently."
            ],
            achievements: ["Designed and implemented hybrid power solutions that enhanced overall efficiency by 20%."]
          },
          {
            title: "Power Systems Intern",
            company: "Ondo State Power Company",
            location: "Nigeria",
            period: "June 2015 – August 2016",
            responsibilities: [
              "Designed and planned rural electrification infrastructure, converting 11kV to 415V, improving electricity distribution for over 1,000 households in rural communities.",
              "Developed technical documentation, including transformer designs and system layouts using AutoCAD, reducing design errors by 10%."
            ],
            achievements: ["Contributed to research that improved system performance by 25% in three rural communities."]
          }
        ].map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}, {job.location} • {job.period}</p>
            <h4>Key Responsibilities</h4>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            {job.achievements.length > 0 && (
              <div>
                <h4>Achievements</h4>
                <ul>
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Featured Projects Section */}
      <div>
        <h2>Featured Projects</h2>
        {[
          {
            title: "Design of a 500kVA, 11/0.415kV Distribution Substation",
            description: "Designed a substation to step down voltage from 11kV to 415V, prioritizing reliability, safety, and efficiency in electricity distribution for rural areas.",
            link: "/DESIGN_OF_500kVA_11_0_415kV_SUBSTATION.pdf"
          },
          {
            title: "Rural Electrification System Design",
            description: "Comprehensive rural electrification system incorporating overhead lines, feeder pillars, and connections to the national grid for remote areas.",
            link: "/RURAL_ELECTRIFICATION_DESIGN_PROJECT.pdf"
          }
        ].map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project →</a>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div>
        <h2>Certifications</h2>
        {[
          {
            title: "Solar Energy and Electrical System Design",
            issuer: "Coursera",
            date: "2023"
          },
          {
            title: "Wind Energy",
            issuer: "Coursera",
            date: "2023"
          },
          {
            title: "Energy Transition: Innovation Towards a Low-Carbon Future",
            issuer: "Coursera",
            date: "2023"
          },
          {
            title: "Microsoft Power BI Data Analyst Specialization",
            issuer: "Coursera",
            date: "2023"
          },
          {
            title: "Google Project Management",
            issuer: "Coursera",
            date: "2023"
          }
        ].map((cert, index) => (
          <div key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer} • {cert.date}</p>
          </div>
        ))}
      </div>

      {/* Honors & Awards Section */}
      <div>
        <h2>Honors & Awards</h2>
        <ul>
          <li>
            <strong>Agbami Scholarship</strong><br />
            Agbami Oilfield • 2013-2016<br />
            Scholarship for Engineering and Medical Professions.
          </li>
          <li>
            <strong>Professor Olufolaji D.B Scholarship Prize</strong><br />
            Awarded for outstanding academic performance in Year 2.
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Index;
