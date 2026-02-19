import React from 'react'

const Education = () => {
  return (
    < >
      
      <section className="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        {/* Degree */}
        <div className="education-card">
          <h3>Bachelor of Computer Applications</h3>
          <p className="edu-school">Kuvempu University</p>
          <p className="edu-year">2022 – 2025</p>
          <p className="edu-score">CGPA: 7.68 / 10.0</p>
        </div>

        {/* 12th */}
        <div className="education-card">
          <h3>Science (12th Grade)</h3>
          <p className="edu-school">Govt Pre‑University College Ayanur</p>
          <p className="edu-year">2020 – 2022</p>
          <p className="edu-score">Percentage: 76%</p>
          <p className="edu-desc">
            Specialized in Mathematics, Physics, Biology, and Chemistry
          </p>
        </div>

        {/* 10th */}
        <div className="education-card">
          <h3>SSLC (10th Grade)</h3>
          <p className="edu-school">Govt High School Mandaghatta</p>
          <p className="edu-year">2020</p>
          <p className="edu-score">Percentage: 76%</p>
        </div>

        {/* Certification */}
        <div className="education-card">
          <h3>Certification – Java Full‑Stack Developer</h3>
          <p className="edu-school">Jspiders Bangalore</p>
          <p className="edu-year">2023</p>
          <p className="edu-desc">
            Completed comprehensive full‑stack development training covering
            Java, Spring Boot, React, and database management.
          </p>
        </div>
      </div>
    </section>
    </ >
  )
}

export default Education
