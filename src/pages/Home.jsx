import React from "react";
import "./Home.css"; // make sure you create and link this CSS file

const Home = () => {
  return (
    <section className="home-section">
      <div className="intro-card">
        <h1 className="name">Muhammad Arslan Shahzad</h1>
        <p className="tagline">Aspiring Software Engineer | AI & Data Enthusiast | Full-Stack Developer</p>
        <p className="summary">
          I'm passionate about building intelligent systems and user-centric web applications. With a strong foundation in data science, machine learning, and full-stack development, I aim to solve real-world problems through innovative software solutions. I'm currently exploring advanced AI applications and scalable web architectures.
        </p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Home;