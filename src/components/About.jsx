import { useEffect, useRef } from 'react';
import { certifications, education, impactStats, languages } from '../data/portfolio';

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about">
      <div className="container fade-in" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Platform engineering with production discipline
          </p>
        </div>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I am a <strong>DevOps and cloud infrastructure engineer</strong>
              working close to the platform layer: OpenShift clusters, Kubernetes
              operations, storage architecture, AWS environments, CI/CD, and
              observability for production systems.
            </p>
            <p>
              My strongest recent work is around <strong>OpenShift-based private
              cloud</strong>: cluster provisioning through IPI and UPI, Ceph and
              LVM-backed storage, GPU and model-serving operators for AI/ML
              workloads, and day-2 operations that keep platforms usable after
              launch.
            </p>
            <p>
              I like infrastructure that developers can actually use: clear
              deployment paths, GitOps workflows, practical monitoring, and cloud
              designs that balance reliability, speed, and cost.
            </p>
            <div className="about__meta">
              <div>
                <span>Education</span>
                <strong>{education.degree}</strong>
                <p>{education.school} · {education.year}</p>
              </div>
              <div>
                <span>Languages</span>
                <strong>{languages.join(' · ')}</strong>
              </div>
            </div>
          </div>
          <div>
            <div className="about__highlights">
              {impactStats.map((item) => (
                <div className="about__stat glass-card" key={item.label}>
                  <span className="about__stat-value">{item.value}</span>
                  <span className="about__stat-label">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="about__certs glass-card">
              <span className="about__certs-label">Certifications</span>
              {certifications.map((item) => (
                <div className="about__badge" key={`${item.issuer}-${item.title}`}>
                  <div className="about__badge-image">
                    <img src={item.image} alt={`${item.title} badge`} />
                  </div>
                  <div>
                    <span>{item.issuer}</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
