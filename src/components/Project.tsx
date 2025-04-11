import React from 'react';
import { ActiveProps } from './Navbar';

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
    excerpt: "African Ancestry is a genetic testing service that helps individuals of African descent trace their ancestral roots to specific countries and ethnic groups within Africa. By analyzing DNA samples, the company provides detailed insights into one's lineage, offering a deeper understanding of personal heritage.",
    image: 'https://africanancestry.com/cdn/shop/files/AFA-416_Test_Kit_Product_Image_Family_450x450.png?v=1713454085',
    alt: 'African-Ancestry',
  },
  {
    id: 2,
    title: 'Steel-Buy',
    category: 'Market Place',
    date: '2024',
    excerpt: "SteelBuy is an online marketplace designed to streamline the buying and selling of metals, particularly steel and aluminum. The platform offers a user-friendly interface that connects buyers and sellers, facilitating efficient and secure transactions.",
    image: 'https://i0.wp.com/steel-buy.com/wp-content/uploads/2023/02/sb-homepage-hero-image.webp?resize=1536%2C941&ssl=1',
    alt: 'Steel-Buy',
  },
];

const Project = ({active}:ActiveProps) => {
  return (
    <article className={active ? "project active": "project"}  data-page="project">
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
