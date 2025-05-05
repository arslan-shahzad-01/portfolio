import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Matriculation",
      institution: "Divisional Public School (DPS), Kasur",
      year: "2018",
    },
    {
      degree: "FSc Pre-Engineering",
      institution: "KIPS College, Kasur",
      year: "2020",
    },
    {
      degree: "BS Artificial Intelligence",
      institution: "Information Technology University (ITU), Lahore",
      year: "Ongoing",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
