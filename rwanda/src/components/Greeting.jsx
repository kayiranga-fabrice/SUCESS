// src/components/Greeting.jsx
import React, { useState } from 'react';
import './Greeting.css'; // Import the CSS file for styling

const Greeting = () => {
  // State to toggle the visibility of additional services
  const [showServices, setShowServices] = useState(false);

  // Function to toggle the state
  const toggleServices = () => {
    setShowServices(prev => !prev);
  };

  return (
    <div className="greeting-container">
      {/* Header Section */}
      <header className="header">
        <h1>Fabrice KAYIRANGA</h1>
        <nav className="nav">
          <ul>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Work Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        {/* Introduction Section */}
        <section className="intro">
          <h2>Welcome to My Portfolio</h2>
          <p>
            Hi, I’m Fabrice KAYIRANGA. I am a skilled professional with expertise in IoT, cloud computing, and software development. 
            I have a strong background in both education and hands-on projects, and I am passionate about leveraging technology to solve real-world problems.
          </p>
          <button className="toggle-button" onClick={toggleServices}>
            {showServices ? 'Hide Services' : 'Show Services'}
          </button>
          {showServices && (
            <ul className="services-list">
              <li>Cloud Consulting</li>
              <li>AI & ML Projects</li>
              <li>Software Development</li>
              <li>IoT Solutions</li>
            </ul>
          )}
        </section>

        {/* Education Section */}
        <section id="education" className="education">
          <h3>Education</h3>
          <div className="edu-item">
            <h4>MSc in Internet of Things (Wireless Intelligent Sensor Networking)</h4>
            <p><strong>University of Rwanda</strong>, 2023 - 2025</p>
            <p>
              Actively contributed to the development of a smart wearable device, focusing on low-level software for hardware control. 
              Collaborated on a research study assessing stakeholder needs for IoT remote monitoring solutions in high-risk cold chains, 
              funded by NCST.
            </p>
          </div>
          <div className="edu-item">
            <h4>BSc in Electronics and Telecommunication Engineering</h4>
            <p><strong>University of Rwanda</strong>, 2017 - 2022</p>
            <p>
              Focused on Mathematics for engineers, Computer Networks, and Programming in C, C++, and Java. Academic performance evaluated at 3.45/4 using WES iGPA Calculator.
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="work-experience">
          <h3>Work Experience</h3>
          <div className="work-item">
            <h4>Cloud Consultant</h4>
            <p><strong>Nedamco Africa</strong>, December 2023 - Present</p>
            <p>
              Specialize in cloud technologies including Microsoft Azure, AWS, and GCP. Design and implement innovative cloud solutions addressing environmental and societal challenges.
            </p>
          </div>
          <div className="work-item">
            <h4>Artificial Intelligence Intern</h4>
            <p><strong>DunavNET, Novisad Serbia</strong>, February 2024 - Present</p>
            <p>
              Engaged in IoT, ML/AI, and edge/cloud technologies. Supported development of turnkey digital solutions aligned with sustainable business goals.
            </p>
          </div>
          <div className="work-item">
            <h4>Security Specialist (Part-time)</h4>
            <p><strong>African Center of Excellence in Internet of Things</strong>, October 2023 - November 2023</p>
            <p>
              Contributed to the development of a smart wearable device, working on low-level software to control hardware components.
            </p>
          </div>
          <div className="work-item">
            <h4>Software Apprenticeship Program Trainee</h4>
            <p><strong>SOLVIT Africa</strong>, October 2022 - January 2023</p>
            <p>
              Modules included JavaScript fundamentals, Node.js, EXPRESS Framework, RESTful API development, and MongoDB aggregation.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <h3>Projects</h3>
          <div className="project-item">
            <h4>IBM Attrition Model</h4>
            <p>Developed a predictive model to analyze employee attrition patterns using machine learning techniques.</p>
          </div>
          <div className="project-item">
            <h4>Smart Contract Based Mail Transfer System</h4>
            <p>Created a secure and efficient mail transfer system using blockchain technology.</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <h3>Skills</h3>
          <p>
            Proficient in Dev-C++, MATLAB, LTspice, Python, Cisco Packet Tracer, Octave, JavaScript, Linux, NI Multisim, MS Office.
          </p>
          <p>
            Languages: English (Working Proficiency), French (Elementary), Swahili (Basic)
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:kayiranga1998@gmail.com">kayiranga1998@gmail.com</a></p>
          <p>Phone: +250784538491</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kayiranga-fabrice-0155341aa/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/kayiranga-fabrice-0155341aa/</a></p>
          <p>Certificates: <a href="https://drive.google.com/drive/folders/180yQCDrRdiBTzbA33IDaIG6Xe9a9Imjn?usp=drive_link" target="_blank" rel="noopener noreferrer">Google Drive</a></p>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <section className="footer-links">
            <h3>References</h3>
            <ul>
              <li><a href="mailto:pbakunzibake@gmail.com">Dr. Pierre Bakunzibake, PhD</a></li>
              <li><a href="mailto:ogatera@gmail.com">Dr. Omar GATERA, Ph.D.</a></li>
            </ul>
          </section>
        </footer>
      </main>
    </div>
  );
};

export default Greeting;
