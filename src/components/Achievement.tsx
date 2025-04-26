import React from 'react';
import { ActiveProps } from './Navbar';
import '../styles/Achievement.css';

interface achievementPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
}

const achievementPosts: achievementPost[] = [
  {
    id: 1,
    title: 'Work Anniversary',
    category: 'Anniversary',
    date: '10 April, 2024',
    excerpt:
      "Work Anniversary is a special occasion that marks the completion of one year of service in a company. It's a time to reflect on achievements, growth, and contributions made during the year.",
    image: process.env.PUBLIC_URL + '/1stanniversary.png',
    alt: 'Work Anniversary',
  },
  {
    id: 2,
    title: 'Big Guns Team Award',
    category: 'Team Award',
    date: '05 March, 2025',
    excerpt:
      'Big Guns Team Award is a recognition given to SteelBuy Marketplace Dev Team that has demonstrated exceptional performance, collaboration, and success in achieving their goals. It celebrates the collective efforts and accomplishments of the team members.',
    image: process.env.PUBLIC_URL + '/biggun.png',
    alt: 'Team Award',
  },
];

const achievement = ({ active }: ActiveProps) => {
  return (
    <article
      className={active ? 'achievement active' : 'achievement'}
      data-page="achievement"
    >
      <header>
        <h2 className="h2 article-title">achievement</h2>
      </header>

      <section className="achievement-posts">
        <ul className="achievement-posts-list">
          {achievementPosts.map((post) => (
            <li key={post.id} className="achievement-post-item">
              <button className="achievement-item-button">
                <figure className="achievement-banner-box">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                </figure>

                <div className="achievement-content">
                  <div className="achievement-meta">
                    <p className="achievement-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h3 className="h3 achievement-item-title">{post.title}</h3>

                  <p className="achievement-text">{post.excerpt}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default achievement;
