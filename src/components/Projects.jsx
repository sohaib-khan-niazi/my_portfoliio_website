import { useEffect, useRef } from 'react';
import { projects } from '../data/portfolio';

export default function Projects() {
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
    <section className="section projects" id="projects">
      <div className="container fade-in" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Portfolio-ready case studies based on your real infrastructure work</p>
        </div>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <article className="projects__card glass-card" key={project.title}>
              <div className="projects__card-index">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>
              <div className="projects__card-tags">
                {project.tags.map((tag) => (
                  <span className="skills__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
