import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFileLines,
  faTrophy,
  faCertificate,
  faFolderOpen,
  faEnvelope,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Sidebar from './Sidebar.tsx';
import About from './About.tsx';
import Contact from './Contact.tsx';
import Resume from './Resume.tsx';
import Project from './Project.tsx';
import Certification from './Certification.tsx';
import Achievement from './Achievement.tsx';
import '../styles/Navbar.css';

export interface ActiveProps {
  active: boolean;
}

interface NavItem {
  label: string;
  icon: IconDefinition;
}

const navItems: NavItem[] = [
  { label: 'About', icon: faUser },
  { label: 'Resume', icon: faFileLines },
  { label: 'Achievement', icon: faTrophy },
  { label: 'Certification', icon: faCertificate },
  { label: 'Project', icon: faFolderOpen },
  { label: 'Contact', icon: faEnvelope },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('About');
  const navRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const updateIndicator = (label: string) => {
    const nav = navRef.current;
    if (!nav) return;
    const activeBtn = nav.querySelector(
      `[data-nav="${label}"]`
    ) as HTMLButtonElement | null;
    if (activeBtn) {
      setIndicatorStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeLink);
    const handleResize = () => updateIndicator(activeLink);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeLink]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    updateIndicator(link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent, link: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLinkClick(link);
    }
  };

  const renderComponent = () => {
    switch (activeLink) {
      case 'About':
        return <About active={activeLink === 'About'} />;
      case 'Resume':
        return <Resume active={activeLink === 'Resume'} />;
      case 'Certification':
        return <Certification active={activeLink === 'Certification'} />;
      case 'Achievement':
        return <Achievement active={activeLink === 'Achievement'} />;
      case 'Project':
        return <Project active={activeLink === 'Project'} />;
      case 'Contact':
        return <Contact active={activeLink === 'Contact'} />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-shell">
      <div className="dashboard-top">
        <div className="dashboard-brand">
          <div className="brand-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div>
            <p className="brand-name">Kumar Ritu Raj</p>
            <p className="brand-role">Frontend Developer · 3+ Yrs</p>
          </div>
        </div>

        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <ul className="navbar-list" ref={navRef} role="tablist">
            <span
              className="navbar-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
              }}
              aria-hidden="true"
            />
            {navItems.map(({ label, icon }) => (
              <li className="navbar-item" key={label}>
                <button
                  className={`navbar-link ${activeLink === label ? 'active' : ''}`}
                  onClick={() => handleLinkClick(label)}
                  onKeyDown={(e) => handleKeyDown(e, label)}
                  data-nav={label}
                  data-nav-link
                  aria-current={activeLink === label ? 'page' : undefined}
                  role="tab"
                  aria-selected={activeLink === label}
                  tabIndex={0}
                >
                  <FontAwesomeIcon icon={icon} className="navbar-icon" />
                  <span className="navbar-label">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="dashboard-grid">
        <Sidebar />
        <section className="content-panel" role="tabpanel">
          {renderComponent()}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
