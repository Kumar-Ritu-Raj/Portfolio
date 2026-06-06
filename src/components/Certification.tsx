import React, { useState } from 'react';
import { ActiveProps } from './Navbar';
import '../styles/Certification.css';

interface CertItem {
  title: string;
  category: string;
  categoryClass: string;
  date: string;
  organisation: string;
  imageUrl: string;
  altText: string;
}

const categories = ['All', 'Web development', 'Data Science', 'Others'];

const certifications: CertItem[] = [
  {
    title: 'TypeScript',
    category: 'Web development',
    categoryClass: 'badge-cyan',
    date: 'October, 2024',
    organisation: 'Udemy',
    imageUrl:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-2523168d-2e71-4692-ad44-d090b1c9efcd.jpg?v=1729190020000',
    altText: 'TypeScript',
  },
  {
    title: 'React.Js',
    category: 'Web development',
    categoryClass: 'badge-cyan',
    date: 'December, 2023',
    organisation: 'Udemy',
    imageUrl:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-3cd27143-c465-481c-a1e3-d77d11c8e85a.jpg?v=1703615348000',
    altText: 'React.Js',
  },
  {
    title: 'Next.Js',
    category: 'Web development',
    categoryClass: 'badge-cyan',
    date: 'August, 2022',
    organisation: 'LinkedIn',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D5622AQEnpoSaRMP4Ew/feedshare-shrink_1280/feedshare-shrink_1280/0/1684580975397?e=1747267200&v=beta&t=PiB1dLl9yjCVkUEcbck29jQ1sulNMfpVhI-njF6jPfM',
    altText: 'Next.Js',
  },
  {
    title: 'Front End Development',
    category: 'Web development',
    categoryClass: 'badge-cyan',
    date: 'June, 2024',
    organisation: 'SimpliLearn',
    imageUrl:
      'https://certificates.simplicdn.net/share/thumb_6834957_1719689461.png',
    altText: 'Front End Development',
  },
  {
    title: 'JavaScript',
    category: 'Web development',
    categoryClass: 'badge-cyan',
    date: 'September, 2023',
    organisation: 'Udemy',
    imageUrl:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-f2738dd4-fefe-4409-b28d-3a952c6c8cf3.jpg?v=1695481565000',
    altText: 'JavaScript',
  },
  {
    title: 'Data Science',
    category: 'Data Science',
    categoryClass: 'badge-violet',
    date: 'December, 2022',
    organisation: 'LinkedIn',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C4D1FAQGvIUCwP5HVjg/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1672222949772?e=1746262800&v=beta&t=Uf8jW-VuFK1HXIcgrdUt2n2V8Li_iQ1pZoYanZ_SLgM',
    altText: 'Data Science',
  },
  {
    title: 'Git',
    category: 'Others',
    categoryClass: 'badge-emerald',
    date: 'December, 2023',
    organisation: 'Udemy',
    imageUrl:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-b7ba014b-8aba-46d9-bc93-5b32b473e711.jpg?v=1703575162000',
    altText: 'Git',
  },
  {
    title: 'NumPy',
    category: 'Data Science',
    categoryClass: 'badge-violet',
    date: 'November, 2022',
    organisation: 'SimpliLearn',
    imageUrl:
      'https://certificates.simplicdn.net/share/thumb_3917618_1668018422.png',
    altText: 'Numpy.',
  },
  {
    title: 'RStudio',
    category: 'Data Science',
    categoryClass: 'badge-violet',
    date: 'October, 2022',
    organisation: 'Coursera',
    imageUrl:
      'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8EST7BWHRBG5/CERTIFICATE_LANDING_PAGE~8EST7BWHRBG5.jpeg',
    altText: 'RStudio',
  },
  {
    title: 'AWS S3',
    category: 'Others',
    categoryClass: 'badge-emerald',
    date: 'January, 2023',
    organisation: 'Coursera',
    imageUrl:
      'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8PU46CB6SLSB/CERTIFICATE_LANDING_PAGE~8PU46CB6SLSB.jpeg',
    altText: 'AWS S3',
  },
];

const Certification = ({ active }: ActiveProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered =
    selectedCategory === 'All'
      ? certifications
      : certifications.filter((c) => c.category === selectedCategory);

  return (
    <article
      className={active ? 'Certification active' : 'Certification'}
      data-page="Certification"
    >
      <header>
        <p className="section-label">Credentials</p>
        <h2 className="h2 article-title">Certifications</h2>
      </header>

      <p className="page-intro">
        10+ professional certifications across web development, data science,
        and cloud technologies from Udemy, Coursera, LinkedIn, and SimpliLearn.
      </p>

      <section className="cert-section">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <ul className="cert-grid">
          {filtered.map((cert) => (
            <li className="cert-card" key={cert.title}>
              <figure className="cert-img">
                <img src={cert.imageUrl} alt={cert.altText} loading="lazy" />
              </figure>
              <div className="cert-info">
                <span
                  className={`badge-tag ${cert.categoryClass}`}
                >
                  {cert.category}
                </span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.organisation}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Certification;
