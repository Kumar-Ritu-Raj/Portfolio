import React from 'react';
import { ActiveProps } from './Navbar';
import '../styles/Achievement.css';

interface achievementPost {
  id: number;
  title: string;
  category: string;
  categoryClass: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
}

const achievementPosts: achievementPost[] = [
  {
    id: 1,
    title: '1st Work Anniversary',
    category: 'Anniversary',
    categoryClass: 'badge-cyan',
    date: '10 April, 2024',
    excerpt:
      'Celebrated one year at Parkar Digital, reflecting on growth, contributions, and milestones delivered across client projects.',
    image: process.env.PUBLIC_URL + '/images/achievement/1stanniversary.png',
    alt: 'Work Anniversary',
  },
  {
    id: 2,
    title: 'Big Guns Team Award',
    category: 'Team Award',
    categoryClass: 'badge-violet',
    date: '05 March, 2025',
    excerpt:
      'Awarded to the SteelBuy Marketplace Dev Team for exceptional performance, collaboration, and successful project delivery.',
    image: process.env.PUBLIC_URL + '/images/achievement/biggun.png',
    alt: 'Team Award',
  },
  {
    id: 3,
    title: 'Shoutout Superstar Award',
    category: 'Individual',
    categoryClass: 'badge-gold',
    date: '11 December, 2025',
    excerpt:
      'Individual recognition for consistently going above and beyond — exceptional skills, dedication, and positive team impact.',
    image:
      process.env.PUBLIC_URL +
      '/images/achievement/shoutout-superstar-award.jpg',
    alt: 'Superstar Award',
  },
];

const Achievement = ({ active }: ActiveProps) => {
  return (
    <article
      className={active ? 'achievement active' : 'achievement'}
      data-page="achievement"
    >
      <header>
        <p className="section-label">Recognition</p>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      <p className="page-intro">
        Awards and milestones earned through consistent delivery, teamwork, and
        dedication at Parkar Digital.
      </p>

      <section className="achievement-posts">
        <ul className="achievement-posts-list">
          {achievementPosts.map((post) => (
            <li key={post.id} className="achievement-post-item">
              <div className="achievement-card">
                <figure className="achievement-banner-box">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                  <span
                    className={`badge-tag achievement-badge ${post.categoryClass}`}
                  >
                    {post.category}
                  </span>
                </figure>

                <div className="achievement-content">
                  <div className="achievement-meta">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h3 className="h3 achievement-item-title">{post.title}</h3>

                  <p className="achievement-text">{post.excerpt}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Achievement;
