import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faCalendar,
  faMapMarkerAlt,
  faChessKnight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Sidebar.css';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/kumar-ritu-raj/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Kumar-Ritu-Raj',
    icon: faGithub,
    label: 'GitHub',
  },
  {
    href: 'https://x.com/KumarRituRaj17',
    icon: faTwitter,
    label: 'Twitter',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100005316888830',
    icon: faFacebook,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/kumarrituraj17/',
    icon: faInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.chess.com/member/KumarRituRaj17',
    icon: faChessKnight,
    label: 'Chess.com',
  },
];

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(true);

  return (
    <aside
      className={showContacts ? 'sidebar active' : 'sidebar'}
      data-sidebar
    >
      <div className="sidebar-info">
        <figure className="avatar-box" id="profile-pic">
          <div className="avatar-ring" />
          <img
            src={process.env.PUBLIC_URL + '/kumar.jpg'}
            alt="Kumar Ritu Raj"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Kumar Ritu Raj">
            Kumar Ritu Raj
          </h1>
          <p className="title">Frontend Developer</p>
          <p className="availability">
            <FontAwesomeIcon icon={faCircle} className="availability-dot" />
            Available for opportunities
          </p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setShowContacts((prev) => !prev)}
          aria-expanded={showContacts}
        >
          <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
        </button>
      </div>

      {showContacts && (
        <div className="sidebar-info_more">
          <div className="separator" />

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href="mailto:kumarrituraj2000@gmail.com"
                  className="contact-link"
                >
                  kumarrituraj2000@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+918935802137" className="contact-link">
                  +91 8935802137
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2000-01-05">5 January, 2000</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Pune, India</address>
              </div>
            </li>
          </ul>

          <div className="separator" />

          <ul className="social-list">
            {socialLinks.map((social) => (
              <li className="social-item" key={social.label}>
                <a
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
