import React from 'react';
import gostudyfeed from '../assets/images/gostudy-feed.png';
import gostudylanding from '../assets/images/gostudy-landing.png';

const HighlightProject = ({ name, description, imageSrc, idx }) => {
  let image = null;
  switch (imageSrc) {
    case 'gostudyfeed':
      image = gostudyfeed;
      break;
    case 'gostudylanding':
      image = gostudylanding;
      break;
    default:
      break;
  }

  return (
    <section id={idx} className={`wrapper alt spotlight style${idx}`}>
      <div className="inner">
        <a href="/#" className="image">
          <img src={image} alt="Project Image" />
        </a>
        <div className="content">
          <h2 className="major">{name}</h2>
          <p>{description}</p>
          <a href="/#" className="special">
            Live View
          </a>
          <a href="/#" className="special">
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default HighlightProject;
