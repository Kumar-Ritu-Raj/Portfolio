import React, { useState } from 'react';
import { ActiveProps } from './Navbar';

interface Project {
  title: string;
  category: string;
  date: string,
  organisation: string,
  imageUrl: string;
  altText: string;
}

const Certification = ({active}:ActiveProps) => {

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'TypeScript',
      category: 'Web development',
      date: 'October, 2024',
      organisation: 'Udemy',
      imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2523168d-2e71-4692-ad44-d090b1c9efcd.jpg?v=1729190020000',
      altText: 'TypeScript'
    },
    {
      title: 'React.Js',
      category: 'Web development',
      date: 'December, 2023',
      organisation: 'Udemy',
      imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3cd27143-c465-481c-a1e3-d77d11c8e85a.jpg?v=1703615348000',
      altText: 'React.Js'
    },
    {
      title: 'Next.Js',
      category: 'Web development',
      date: 'August, 2022',
      organisation: 'LinkedIn',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQEnpoSaRMP4Ew/feedshare-shrink_1280/feedshare-shrink_1280/0/1684580975397?e=1747267200&v=beta&t=PiB1dLl9yjCVkUEcbck29jQ1sulNMfpVhI-njF6jPfM',
      altText: 'Next.Js'
    },
    {
      title: 'Front End Development',
      category: 'Web development',
      date: 'June, 2024',
      organisation: 'SimpliLearn',
      imageUrl: 'https://certificates.simplicdn.net/share/thumb_6834957_1719689461.png',
      altText: 'Front End Development'
    },
    {
      title: 'JavaScript',
      category: 'Web development',
      date: 'September, 2023',
      organisation: 'Udemy',
      imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f2738dd4-fefe-4409-b28d-3a952c6c8cf3.jpg?v=1695481565000',
      altText: 'JavaScript'
    },
    {
      title: 'Data Science',
      category: 'Data Science',
      date: 'December, 2022',
      organisation: 'LinkedIn',
      imageUrl: 'https://media.licdn.com/dms/image/v2/C4D1FAQGvIUCwP5HVjg/feedshare-document-cover-images_1280/feedshare-document-cover-images_1280/0/1672222949772?e=1744963200&v=beta&t=98rFgkl9ejxG1BVMqjBzPz0vO7aHr_tDOd-AVJvQo7c',
      altText: 'Data Science'
    },
    {
      title: 'Git',
      category: 'Others',
      date: 'December, 2023',
      organisation: 'Udemy',
      imageUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b7ba014b-8aba-46d9-bc93-5b32b473e711.jpg?v=1703575162000',
      altText: 'Git'
    },
    {
      title: 'NumPy',
      category: 'Data Science',
      date: 'November, 2022',
      organisation: 'SimpliLearn',
      imageUrl: 'https://certificates.simplicdn.net/share/thumb_3917618_1668018422.png',
      altText: 'Numpy.'
    },
    {
      title: 'RStudio',
      category: 'Data Science',
      date: 'October, 2022',
      organisation: 'Coursera',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8EST7BWHRBG5/CERTIFICATE_LANDING_PAGE~8EST7BWHRBG5.jpeg',
      altText: 'RStudio'
    },
    {
      title: 'AWS S3',
      category: 'Others',
      date: 'January, 2023',
      organisation: 'Coursera',
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8PU46CB6SLSB/CERTIFICATE_LANDING_PAGE~8PU46CB6SLSB.jpeg',
      altText: 'AWS S3'
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <article className={active ? "Certification active": "Certification"} data-page="Certification">
      <header>
        <h2 className="h2 article-title">Certification</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {['All', 'Web development',  'Data Science', 'Others'].map((category) => (
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

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
            </div>
          </button>
          <ul className="select-list">
            {['All', 'Web development',  'Data Science', 'Others'].map((category) => (
              <li className="select-item" key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  data-select-item
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              key={project.title}
              data-filter-item
              data-category={project.category}
            >
              <button className="certification-item-button">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  </div>
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.date}</p>
                <p className="project-category">{project.organisation}</p>
                <p className="project-category">{project.category}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Certification;
