import React from 'react';
import '../../styles/UserFeed/JobList.css';
import { FaEllipsisH, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const jobs = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  title: index % 4 === 0 ? 'UI/UX Designer' : index % 4 === 1 ? 'Engenheiro de Software' : index % 4 === 2 ? 'Desenvolvedor Front-End' : 'Desenvolvedor Back-End',
  company: 'Google Inc.',
  location: 'Recife, Brasil',
  type: index % 3 === 0 ? 'Freelancer' : 'Tempo Integral',
  salary: 'R$ 20.000 - R$ 25.000',
  tags: index % 2 === 0 ? ['Back-End', 'Júnior'] : ['Front-End', 'Pleno'],
  rating: '5.0',
  reviews: 378,
}));

const JobList = () => {
  return (
    <div className="joblist-container">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <div className="job-header">
            <h3 className="job-title">{job.title}</h3>
            <div className="job-menu">
              <FaEllipsisH />
            </div>
          </div>
          <div className="job-type-container">
            <span className={`job-type ${job.type.replace(' ', '-').toLowerCase()}`}>
              {job.type}
            </span>
            <span className="job-salary">{job.salary}</span>
          </div>
          <div className="job-tags">
            {job.tags.map((tag, index) => (
              <span key={index} className="job-tag">{tag}</span>
            ))}
          </div>
          <div className="job-company-info">
            <FcGoogle className="job-icon" />
            <span className="job-company">{job.company}</span>
            <span className="job-location">
              <FaMapMarkerAlt /> {job.location}
            </span>
          </div>
          <div className="job-rating">
            <FaStar /> {job.rating} <span>({job.reviews})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
