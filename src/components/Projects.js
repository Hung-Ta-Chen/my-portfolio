import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "An innovative project solving X problem using Y technology.",
    technologies: "React, Node.js, MongoDB",
    image: "/path-to-project-image.jpg",
    github: "https://github.com/yourusername/project-one",
  },
  {
    id: 1,
    title: "Project One",
    description: "This is a short project description.",
    link: "#",
  },
  {
    id: 1,
    title: "Project One",
    description: "This is a short project description.",
    link: "#",
  },
  {
    id: 1,
    title: "Project One",
    description: "This is a short project description.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <h1 className="section-title">My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
