import { useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';

export default function Skills() {
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
    <section className="section skills" id="skills">
      <div className="container fade-in" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The stack I use to ship and operate infrastructure
          </p>
        </div>
        <div className="skills__grid">
          {skills.map((cat) => (
            <div className="skills__card glass-card" key={cat.title}>
              <div className="skills__card-eyebrow">{cat.eyebrow}</div>
              <h3 className="skills__card-title">{cat.title}</h3>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span className="skills__tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
