import "@styles/timeline.scss";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-line">
        <div className="timeline-line-date">2019 - 2021</div>
        <p className="timeline-line-content">
          I began my web development journey with HTML, CSS, and PHP, later adding JavaScript and jQuery during my IT assistant training, which I completed with an average grade of 1.2.
        </p>
      </div>

      <div className="timeline-line">
        <div className="timeline-line-date">2021 - 2024</div>
        <p className="timeline-line-content">
          I completed my training as a computer science expert in software development (Fachinformatiker für Anwendungsentwicklung).
        </p>
      </div>

      <div className="timeline-line">
        <div className="timeline-line-date">2024 - Present</div>
        <p className="timeline-line-content">
          Since January 2024, I've been working as a software developer, primarily using C++, Qt, TypeScript with React, and Python.
        </p>
      </div>
    </div>
  );
}
