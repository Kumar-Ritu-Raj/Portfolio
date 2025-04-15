import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faCalendar,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(true);

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  return (
    <aside className={showContacts ? 'sidebar active' : 'sidebar'} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box" id="profile-pic">
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
          <p className="title">Front-End Developer</p>
        </div>

        <button className="info_more-btn" onClick={toggleContacts}>
          <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
        </button>
      </div>

      {showContacts && (
        <div className="sidebar-info_more">
          <div className="separator"></div>

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

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/kumar-ritu-raj/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://github.com/Kumar-Ritu-Raj"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://x.com/KumarRituRaj17"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.facebook.com/profile.php?id=100005316888830"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.instagram.com/kumarrituraj17/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
