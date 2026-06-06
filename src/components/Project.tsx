import React from 'react';
import { ActiveProps } from './Navbar';
import '../styles/Project.css';

interface projectPost {
  id: number;
  title: string;
  category: string;
  categoryClass: string;
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
    categoryClass: 'badge-cyan',
    date: 'April, 2023',
    excerpt:
      "A genetic testing platform helping individuals of African descent trace their ancestral roots to specific countries and ethnic groups within Africa.",
    image: process.env.PUBLIC_URL + '/images/project/test-kit-logos.png',
    alt: 'African-Ancestry',
  },
  {
    id: 2,
    title: 'Steel-Buy',
    category: 'Market Place',
    categoryClass: 'badge-violet',
    date: '2024',
    excerpt:
      'An online marketplace connecting buyers and sellers of steel and aluminum with a secure, user-friendly trading experience.',
    image: process.env.PUBLIC_URL + '/images/project/steelbuy-image.png',
    alt: 'Steel-Buy',
  },
  {
    id: 3,
    title: 'Q-Trac',
    category: 'Logistics',
    categoryClass: 'badge-emerald',
    date: '2025',
    excerpt:
      'A logistics platform with real-time tracking, route optimization, and analytics to streamline supply chain operations.',
    image: process.env.PUBLIC_URL + '/images/about/q_trac.jpeg',
    alt: 'Q-Trac',
  },
];

const Project = ({ active }: ActiveProps) => {
  return (
    <article
      className={active ? 'project active' : 'project'}
      data-page="project"
    >
      <header>
        <p className="section-label">Portfolio</p>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <p className="page-intro">
        Production-grade applications built with React, delivering real business
        impact across e-commerce, marketplace, and logistics domains.
      </p>

      <section className="project-posts">
        <ul className="project-posts-list">
          {projectPosts.map((post) => (
            <li key={post.id} className="project-post-item">
              <div className="project-card">
                <figure className="project-banner-box">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                  <span className={`badge-tag project-badge ${post.categoryClass}`}>
                    {post.category}
                  </span>
                </figure>

                <div className="project-content">
                  <div className="project-meta">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h3 className="h3 project-item-title">{post.title}</h3>

                  <p className="project-text">{post.excerpt}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Project;
