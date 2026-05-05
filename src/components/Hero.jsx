import { useEffect, useState } from 'react';
import { heroHighlights, profile } from '../data/portfolio';

const roles = [
  'OpenShift Platform Engineer',
  'AWS Infrastructure Builder',
  'GitOps Delivery Engineer',
  'Observability-Focused DevOps',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!deleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero__mesh" />
      <div className="container hero__content">
        <div className="hero__copy">
          <h1 className="hero__name">{profile.name}</h1>
          <div className="hero__role-wrapper">
            <span className="hero__role">{text}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__tagline">{profile.summary}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View platform work</a>
            <a href={profile.cvUrl} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Cloud infrastructure capability map">
          <div className="terminal glass-card">
            <div className="terminal__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal__body">
              <p><span>$</span> oc get platform</p>
              <p className="terminal__accent">private-cloud / openshift / aws / splunk</p>
              <p><span>$</span> argocd app sync production</p>
              <p className="terminal__ok">Synced. Healthy. Observable.</p>
            </div>
          </div>
          <div className="signal-map">
            {heroHighlights.map((item, index) => (
              <div className="signal-map__node" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
