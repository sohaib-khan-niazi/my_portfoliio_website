import { useState, useEffect } from 'react';
import { profile } from '../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark" aria-hidden="true">
            <span className="navbar__logo-core">S</span>
            <span className="navbar__logo-node navbar__logo-node--one" />
            <span className="navbar__logo-node navbar__logo-node--two" />
            <span className="navbar__logo-node navbar__logo-node--three" />
          </span>
          <span className="navbar__logo-name">{profile.shortName}</span>
        </a>
        <button
          className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvUrl}
              className="navbar__cta"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
