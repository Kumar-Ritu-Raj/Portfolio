import React, { useState } from 'react';
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

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('About');

  const navLinks = [
    'About',
    'Resume',
    'Achievement',
    'Certification',
    'Project',
    'Contact',
  ];

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
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
    <div>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <ul className="navbar-list">
          {navLinks.map((link) => (
            <li className="navbar-item" key={link}>
              <button
                className={`navbar-link ${activeLink === link ? 'active' : ''}`}
                onClick={() => handleLinkClick(link)}
                onKeyDown={(e) => handleKeyDown(e, link)}
                data-nav-link
                aria-current={activeLink === link ? 'page' : undefined}
                role="tab"
                tabIndex={0}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <section className="content" role="tabpanel">
        {renderComponent()}
      </section>
    </div>
  );
};

export default Navbar;
