import React from 'react';
import '../../styles/UserFeed/JobList.css';

const jobs = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  title: index % 2 === 0 ? 'UI/UX Designer' : 'Engenheiro de Software',
  company: 'Google Inc.',
  location: 'Recife, Brasil',
  type: index % 3 === 0 ? 'Freelancer' : 'Tempo Integral',
  salary: 'R$ 20.000 - R$ 25.000',
  tags: ['Back-End', 'Júnior'],
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
              <i className="fas fa-ellipsis-h"></i>
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
            <i className="fab fa-google job-icon"></i>
            <span className="job-company">{job.company}</span>
            <span className="job-location">
              <i className="fas fa-map-marker-alt"></i> {job.location}
            </span>
          </div>
          <div className="job-rating">
            <i className="fas fa-star"></i> {job.rating} <span>({job.reviews})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
