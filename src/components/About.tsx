import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop,
  faCode,
  faBriefcase,
  faFolderOpen,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import { ActiveProps } from './Navbar';
import '../styles/About.css';

interface Service {
  icon: typeof faLaptop;
  title: string;
  description: string;
}

interface Stat {
  icon: typeof faBriefcase;
  value: string;
  label: string;
}

const About = ({ active }: ActiveProps) => {
  return (
    <article className={active ? 'about active' : 'about'} data-page="about">
      <header>
        <p className="section-label">Introduction</p>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <div className="about-top">
        <section className="about-hero">
          <p className="about-hero-text">
            Building{' '}
            <span className="gradient-text">scalable web experiences</span>{' '}
            with React &amp; TypeScript
          </p>
          <p className="about-hero-sub">
            Front-End Developer at Parkar Digital since 10 April 2023 · Pune,
            India
          </p>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card glass-card" key={stat.label}>
              <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>
      </div>

      <section className="about-text">
        <p>
          I'm a React Developer based in Pune, India, with a passion for
          creating modern, scalable, and user-friendly web applications. I
          thrive on turning complex requirements into seamless, intuitive, and
          interactive digital experiences.
        </p>
        <p>
          With a focus on performance and maintainability, I specialize in
          building responsive and dynamic interfaces that provide a smooth user
          experience. My goal is to deliver solutions that not only meet
          business needs but also exceed expectations through clean code and
          innovative design.
        </p>
      </section>

      <section className="tech-stack">
        <h3 className="h3 tech-stack-title">Tech Stack</h3>
        <ul className="tech-pills">
          {techStack.map((tech) => (
            <li className="tech-pill" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          {services.map((service) => (
            <li className="service-item glass-card" key={service.title}>
              <div className="service-icon-box">
                <FontAwesomeIcon
                  icon={service.icon}
                  size="2x"
                  className="service-icon"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li className="testimonials-item" key={testimonial.name}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {testimonial.name}
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li className="clients-item" key={index}>
              <a href={client.link} target="_blank" rel="noopener noreferrer">
                <img src={client.logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

const stats: Stat[] = [
  { icon: faBriefcase, value: '3+', label: 'Years Experience' },
  { icon: faFolderOpen, value: '3+', label: 'Projects Delivered' },
  { icon: faAward, value: '10+', label: 'Certifications' },
];

const techStack = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML & MJML',
  'CSS & SCSS',
  'Tailwind CSS',
  'Jest',
  'Git',
];

const services: Service[] = [
  {
    icon: faLaptop,
    title: 'UI/UX Development',
    description:
      'Crafting responsive, accessible interfaces with modern design systems and pixel-perfect implementation.',
  },
  {
    icon: faCode,
    title: 'Frontend Engineering',
    description:
      'Building performant, maintainable React applications with clean architecture and best practices.',
  },
];

const testimonials = [
  {
    avatar: './assets/images/avatar-1.png',
    name: 'Gareth Stacey',
    text: "Hi Kumar, I just wanted to give some feedback to you. I am really pleased with your performance, I especially appreciate your attention to detail. You always ensure your tickets are completed within the sprint and also put time and effort into reviewing your peer's code reviews, providing good feedback.",
  },
];

const clients = [
  {
    link: 'https://africanancestry.com/',
    logo: process.env.PUBLIC_URL + '/images/about/african-logo.svg',
  },
  {
    link: 'https://steel-buy.com/',
    logo: process.env.PUBLIC_URL + '/images/about/steelbuy-logo.svg',
  },
  {
    link: '',
    logo: process.env.PUBLIC_URL + '/images/about/q_trac.jpeg',
  },
];

export default About;
