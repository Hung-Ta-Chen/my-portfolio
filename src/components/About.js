import React from "react";
import "../styles/About.css";
import profile_pic from "../assets/images/profile-pic.jpg";

function About() {
  return (
    <section id="about" className="about section">
      <img src={profile_pic} alt="Hung-Ta Chen" className="about-img" />
      <div className="about-text">
        <h1>About Me</h1>
        <p>Welcome to my portfolio!</p>
        <p>
          I'm Hung-Ta Chen, currently advancing my studies in Statistics at the
          University of California, Davis, after earning my Bachelor's in
          Electrical & Computer Engineering from National Chiao Tung University.
          My academic and practical experiences have cultivated a strong
          foundation in both software engineering and machine learning, with a
          keen interest in applying these disciplines to solve complex
          real-world challenges. Through academic projects and dedicated
          self-learning, I've developed a proficiency in a variety of
          programming languages and frameworks, aiming to leverage my skills to
          make impactful technological advancements.
        </p>
        <p>
          Join me in exploring the intersection of technology and innovation!
        </p>
      </div>
    </section>
  );
}

export default About;
