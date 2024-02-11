import React from "react";
import "../styles/Skills.css";

const skills = {
  "Programming Languages": [
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "R",
    "C#",
    "C",
    "SQL",
    "HTML",
    "CSS",
  ],
  "Frameworks & Libraries (Web/App)": [
    "React.js",
    "React Native",
    "Django",
    "Express.js",
    "NestJS",
    "Node.js",
    ".NET",
    "JavaFX",
    "WebGL",
  ],
  "Frameworks & Libraries (AI/ML)": [
    "NumPy",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "OpenCV",
    "Hugging Face",
    "Pandas",
  ],
  "Tools & Platforms": [
    "Linux",
    "Git",
    "RESTful API",
    "MySQL",
    "Selenium",
    "GraphQL",
    "Docker",
    "PostgreSQL",
    "Figma",
    "AWS",
  ],
  "Soft Skills": ["Problem-solving", "Communication", "Teamwork"],
};

function Skills() {
  return (
    <section id="skills" className="skills section">
      <h1 className="section-title">Skills & Technologies</h1>
      {Object.keys(skills).map((category) => (
        <div key={category} className="skills-list-div">
          <h3>{category}</h3>
          <ul className="skills-list">
            {skills[category].map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
