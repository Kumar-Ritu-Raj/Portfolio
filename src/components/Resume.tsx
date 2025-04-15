import React from 'react';
import { ActiveProps } from './Navbar';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Resume.css';

export interface Education {
  school: string;
  startYear: string;
  endYear: string;
  description: string;
  marks: string;
}

export interface Experience {
  position: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ResumeData {
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}

export const resumeData: ResumeData = {
  education: [
    {
      school: 'Lovely Professional University, Punjab',
      startYear: '2021',
      endYear: '2023',
      description: 'Master of Computer Application',
      marks: 'CGPA: 7.97',
    },
    {
      school: 'BNMU, Bihar',
      startYear: '2017',
      endYear: '2020',
      description: 'Bachelor of Computer Application',
      marks: 'Percentage: 80.17%',
    },
    {
      school: 'Adarsh Inter College, Bihar',
      startYear: '2014',
      endYear: '2016',
      description: 'Intermediate',
      marks: 'Percentage: 63.00%',
    },
    {
      school: 'Gandhi High School Jamin Murhan Hat',
      startYear: '2013',
      endYear: '2014',
      description: 'Matriculation',
      marks: 'Percentage: 76.40%',
    },
  ],
  experience: [
    {
      position: 'Front-End Developer',
      company: 'Parkar Digital',
      startYear: 'April 2023',
      endYear: 'Present',
      description:
        'Work on two projects Atkco and Steel-Buy in Parkar Digital as a React Developer.',
    },
    {
      position: 'Project Manager in Localization',
      company: 'Mozilla Localization',
      startYear: 'February 2018',
      endYear: 'Present',
      description:
        'Works at Mozilla as a Manager of the Angika language on pontoon.mozilla.org.',
    },
  ],
  skills: [
    { name: 'React.js and Next.js', percentage: 80 },
    { name: 'HTML and MJML', percentage: 90 },
    { name: 'CSS, SCSS and Tailwind CSS', percentage: 90 },
    { name: 'Java Script and Type Script', percentage: 85 },
    { name: 'Jest', percentage: 60 },
  ],
};

const Resume = ({ active }: ActiveProps) => {
  const { education, experience, skills } = resumeData;

  return (
    <article className={active ? 'resume active' : 'resume'} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.position}</h4>
              <span>
                {item.startYear} — {item.endYear}
              </span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.school}</h4>
              <span>
                {item.startYear} — {item.endYear}
              </span>
              <p className="timeline-text">{item.description}</p>
              <p className="timeline-text">{item.marks}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
