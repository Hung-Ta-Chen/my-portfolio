import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description:
      "This project is a personal portfolio website meticulously crafted using React and CSS, \
      showcasing a seamless blend of functionality and aesthetics. It serves as a digital showcase, \
      featuring an 'About Me' narrative, a curated gallery of projects, sections on skills, \
      a curated gallery of projects, and a contact form for easy outreach.",
    technologies: "React.js, CSS",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/my-portfolio",
  },
  {
    id: 2,
    title: "Event Management API",
    description:
      "A NestJS-based Event Management API project showcasing CRUD operations, \
      event merging capabilities, and database integration using Prisma ORM with PostgreSQL. \
      Highlights include RESTful API design, comprehensive Jest testing, and Docker deployment, \
      illustrating advanced backend development techniques and practices.",
    technologies: "NestJS, PostgreSQL, Docker",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/event-management-API",
  },
  {
    id: 3,
    title: "Food Waste Reduction App",
    description:
      "This project involved the development of a food recognition mobile application,\
      featuring a React Native frontend and a Django backend API. With an integration of Clarifai’s recognition model, \
      the backend API was responsible for handling various tasks such as image processing, classification, and data retrieval. \
      By implementing robust API endpoints, the project ensured seamless communication between the frontend and backend systems, \
      resulting in a user-friendly and responsive application experience.",
    technologies: "React Native, Django, SQLite",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/",
  },
  {
    id: 4,
    title: "Job Application Tracker",
    description:
      "Developed using C# within Visual Studio, this application serves as an efficient tool for job seekers to manage \
      and track their applications throughout their job search journey. Designed with a user-friendly interface, \
      it allows users to add and count their applications in real-time. This project highlights my skills in software development, \
      problem-solving, and user experience design, offering a practical solution to streamline the job application process.",
    technologies: "C#, .NET framework",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/Job-Application-Counter",
  },
  {
    id: 6,
    title: "AI-Powered Coding Problem Classifier",
    description:
      "This project harnesses advanced natural language processing techniques to predict LeetCode problem topics from their descriptions, \
      utilizing BERT embeddings for accurate categorization through multi-label classification. A comprehensive dataset of over 2500+ coding problems, \
      scraped from various coding websites and stored in a MySQL database, underpins the model's training, \
      ensuring a broad and effective problem-solving tool for efficient navigation and challenge tackling in the coding community.",
    technologies: "Python, PyTorch, MySQL",
    image: "",
    github:
      "https://github.com/Hung-Ta-Chen/AI-Powered-Coding-Problem-Classifier",
  },
  {
    id: 7,
    title: "English Vocabulary Learning App",
    description:
      "This application, developed with JavaFX and utilizing MVC architecture, \
      offers users an engaging platform to enhance their English vocabulary. \
      It features an interactive user interface and leverages Java Database Connectivity (JDBC) for efficient data management. \
      Users can enrich their learning experience by adding flashcards and testing their knowledge through quizzes, \
      making vocabulary building both effective and enjoyable.",
    technologies: "Java, JavaFX, MySQL",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/English-Vocabulary-Learning-App",
  },
  {
    id: 8,
    title: "UAV Object Detection System",
    description:
      "Leveraged YOLOv5 and OpenCV to create a cutting-edge object detection system for UAVs, \
      tailored for optimal performance across various conditions. \
      This project also integrates a robust UDP protocol for seamless UAV remote control and efficient image streaming, \
      enhancing operational efficiency and real-time monitoring capabilities.",
    technologies: "Python, PyTorch",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/UAV-object-detection-with-yolov3",
  },
  {
    id: 9,
    title: "ROS-Based Trail Classification System",
    description:
      "The project developed a Convolutional Neural Network model in PyTorch for accurate trail classification, \
      seamlessly integrated with the Robot Operating System (ROS) for dynamic, real-time image analysis and robotic adjustments. \
      The system enhances autonomous navigation by enabling robots to intelligently recognize and adjust to different trail environments.",
    technologies: "Python, PyTorch, ROS",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/Lane-Following-Robot",
  },
  {
    id: 10,
    title: "Real-Time Chatroom Application",
    description:
      "This project features a real-time chatroom server developed with JavaScript and Socket.io, \
      complemented by a sleek client interface designed in Swift. Utilizing HTML for server-side design, \
      the application facilitates seamless communication, offering an intuitive and responsive user experience across platforms.",
    technologies: "JavaScript, Socket.io, Swift",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/Simple-Chatroom-Project",
  },
  {
    id: 11,
    title: "Employee Resignation Prediction Project",
    description:
      "This project aims to forecast employee resignations using advanced machine learning techniques. \
      By employing a variety of models, including Gaussian Naive Bayes, Decision Tree, Random Forest, and XGBoost, \
      the data is meticulously analyzed. A VotingClassifier from sklearn further enhances accuracy through ensemble learning, \
      providing reliable predictions on employee turnover.",
    technologies: "Python, Scikit-learn, XGBoost",
    image: "",
    github:
      "https://github.com/Hung-Ta-Chen/Employee-Resignation-Prediction-with-ML-methods",
  },
  {
    id: 12,
    title: '"Dad n Me" 2D Action Game Remake',
    description:
      'A simple implementation of the classic action game "Dad n Me" using SDL 2.0 in C. \
      This project features side-scrolling maps, precise collision detection, and responsive keyboard controls, \
      recreating the iconic gaming experience with enhanced functionality and immersive gameplay.',
    technologies: "C, SDL 2.0",
    image: "",
    github: "https://github.com/Hung-Ta-Chen/Action-Game-Project",
  },
];

function Projects() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section id="projects" className="projects section">
      <h1 className="section-title">My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p className="project-skills">
              <i>{project.technologies}</i>
            </p>
            <p className="project-description">
              <strong>
                Description: <br />
              </strong>
              {project.description}
            </p>
            <button
              onClick={() => openInNewTab(project.github)}
              className="github-link"
            >
              GitHub
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
