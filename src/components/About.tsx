import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCode } from '@fortawesome/free-solid-svg-icons';
import { ActiveProps } from './Navbar';
import '../styles/About.css';

interface Service {
  icon: any;
  title: string;
  description: string;
}

const About = ({ active }: ActiveProps) => {
  return (
    <article className={active ? 'about active' : 'about'} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

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
          innovative design. I take pride in collaborating with teams to bring
          ideas to life and drive impactful results with React.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {services.map((service) => (
            <li className="service-item" key={service.title}>
              <div className="service-icon-box">
                <FontAwesomeIcon
                  icon={service.icon}
                  size="3x"
                  style={{ color: 'var(--orange-yellow-crayola)' }}
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
              <a href={client.link}>
                <img src={client.logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

const services: Service[] = [
  {
    icon: faLaptop,
    title: 'Web design',
    description:
      'The most modern and high-quality design made at a professional level.',
  },
  {
    icon: faCode,
    title: 'Web development',
    description: 'High-quality development of sites at a professional level.',
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
    logo: 'https://africanancestry.com/cdn/shop/t/72/assets/logo.svg?v=57037484700392959911672849158',
  },
  {
    link: 'https://steel-buy.com/',
    logo: 'https://i0.wp.com/steel-buy.com/wp-content/uploads/2022/12/Steelbuy_Logo.png?w=312&ssl=1',
  },
];

export default About;
