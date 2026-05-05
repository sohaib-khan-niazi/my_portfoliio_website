import { useEffect, useRef } from 'react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section experience" id="experience">
      <div className="container fade-in" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Recent work from the CV, shaped for the web</p>
        </div>
        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div className="experience__item" key={i}>
              <div className="experience__dot" />
              <div className="experience__card glass-card">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <p className="experience__desc">{exp.summary}</p>
                <ul className="experience__points">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="experience__tags">
                  {exp.tags.map((tag) => (
                    <span className="skills__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
