import { useEffect, useRef } from 'react';
import { profile } from '../data/portfolio';

const socials = [
  {
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    href: profile.githubUrl,
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: profile.linkedinUrl,
  },
  {
    label: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
    href: `mailto:${profile.email}`,
  },
  {
    label: 'Phone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 10.8 19.79 19.79 0 0 1 .08 2.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L6 7.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    href: `tel:${profile.phone}`,
  },
];

export default function Contact() {
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
    <section className="section contact" id="contact">
      <div className="container fade-in" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Cloud, platform, DevOps, or infrastructure roles and projects
          </p>
        </div>
        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__text">
              I am open to DevOps, cloud infrastructure, OpenShift/Kubernetes,
              AWS, GitOps, and observability opportunities. The fastest path is
              email, and the CV is ready to download from this page.
            </p>
            <div className="contact__socials">
              {socials.map((s) => (
                <a
                  href={s.href}
                  className="contact__social glass-card"
                  key={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact__form glass-card">
            <div className="contact__availability">
              <span>Available for</span>
              <strong>DevOps & Cloud Infrastructure roles</strong>
              <p>{profile.location}</p>
            </div>
            <div className="contact__direct">
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact__direct">
              <span>Phone</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <a href={profile.cvUrl} className="btn btn--primary contact__submit" target="_blank" rel="noopener noreferrer">
              Open CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
