import React from 'react'

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1 className='projects-title'>Projects</h1>
      <div className="projects-grid">
        {/* WorkerGo */}
        <div className="project-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="WorkerGo"
            className="project-image"
          />

          <div className="project-content">
            <h3>WorkerGo</h3>
            <p>
              Working on WorkerGo(Project) is a scalable microservices-based
              service booking platform that enables customers to discover, book,
              and manage skilled workers such as electricians, plumbers, and
              technicians. The system supports role-based access for customers,
              workers, and administrators, with features including worker
              verification, job scheduling, secure payments, reviews, and job
              history tracking.
            </p>

            <div className="project-tags">
              <span className="tag">Java</span>
              <span className="tag">Springboot</span>
              <span className="tag">JPA</span>
              <span className="tag">Microservices</span>
            </div>

            <button className="view-btn">View Project</button>
          </div>
        </div>

        {/* Event Ticket Booking System */}
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865"
            alt="Event Ticket Booking System"
            className="project-image"
          />

          <div className="project-content">
            <h3>Event Ticket Booking System</h3>
            <p>
              Developed a full-stack web application using Java (JSP, Servlets),
              JDBC, MySQL, HTML, CSS, JavaScript. Implemented Admin module
              (event creation, transaction management) and Participant module
              (event browsing, registration with payment).
            </p>

            <div className="project-tags">
              <span className="tag">Java</span>
              <span className="tag">JSP</span>
              <span className="tag">Servlet</span>
              <span className="tag">MySQL</span>
            </div>
          </div>
        </div>

        {/* SlayIt */}
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="SlayIt"
            className="project-image"
          />

          <div className="project-content">
            <h3>SlayIt</h3>
            <p>
              Slayit is a responsive e-commerce website that allows users to
              browse products by category, view product details, add items to a
              cart, and authenticate users. It is built using HTML, CSS, and
              JavaScript with a clean and modular structure.
            </p>

            <div className="project-tags">
              <span className="tag">HTML</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Bootstrap</span>
            </div>

            <button className="view-btn">View Project</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects
