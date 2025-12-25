import React from 'react';
import { ActiveProps } from './Navbar';
import '../styles/Project.css';

interface projectPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
}

const projectPosts: projectPost[] = [
  {
    id: 1,
    title: 'African-Ancestry',
    category: 'E-Commerce',
    date: 'April, 2023',
    excerpt:
      "African Ancestry is a genetic testing service that helps individuals of African descent trace their ancestral roots to specific countries and ethnic groups within Africa. By analyzing DNA samples, the company provides detailed insights into one's lineage, offering a deeper understanding of personal heritage.",
    image: process.env.PUBLIC_URL + '/images/project/test-kit-logos.png',
    alt: 'African-Ancestry',
  },
  {
    id: 2,
    title: 'Steel-Buy',
    category: 'Market Place',
    date: '2024',
    excerpt:
      'SteelBuy is an online marketplace designed to streamline the buying and selling of metals, particularly steel and aluminum. The platform offers a user-friendly interface that connects buyers and sellers, facilitating efficient and secure transactions.',
    image: process.env.PUBLIC_URL + '/images/project/steelbuy-image.png',
    alt: 'Steel-Buy',
  },
  {
    id: 3,
    title: 'Q-Trac',
    category: 'Logistics',
    date: '2025',
    excerpt:
      'Q-Trac is a logistics and supply chain management platform that provides businesses with tools to optimize their transportation and delivery processes. The platform offers real-time tracking, route optimization, and analytics to enhance efficiency and reduce costs in logistics operations.',
    image: process.env.PUBLIC_URL + '/images/about/q_trac.jpeg',
    alt: 'Steel-Buy',
  },
];

const Project = ({ active }: ActiveProps) => {
  return (
    <article
      className={active ? 'project active' : 'project'}
      data-page="project"
    >
      <header>
        <h2 className="h2 article-title">project</h2>
      </header>

      <section className="project-posts">
        <ul className="project-posts-list">
          {projectPosts.map((post) => (
            <li key={post.id} className="project-post-item">
              <button className="project-item-button">
                <figure className="project-banner-box">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                </figure>

                <div className="project-content">
                  <div className="project-meta">
                    <p className="project-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h3 className="h3 project-item-title">{post.title}</h3>

                  <p className="project-text">{post.excerpt}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Project;
