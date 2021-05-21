import React from 'react';
import gostudyfeed from '../assets/images/gostudy-feed.png';
import gostudylanding from '../assets/images/gostudy-landing.png';

const HighlightProject = ({ project, idx }) => {
  const { name, description, imageSrc, techStack } = project;
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

  const id = (idx % 3) + 1;
  let stringId = '';
  switch (id) {
    case 1:
      stringId = 'one';
      break;
    case 2:
      stringId = 'two';
      break;
    case 3:
      stringId = 'three';
      break;
    default:
      break;
  }

  const altClass = id % 2 === 0 ? 'alt' : '';

  return (
    <section
      id={stringId}
      className={`wrapper ${altClass} spotlight style${id}`}
    >
      <div className="inner">
        <a href="/#" className="image">
          <img src={image} alt="Project Image" />
        </a>
        <div className="content">
          <h2 className="major">{name}</h2>
          <p>{description}</p>
          <p>Tech Stack: {techStack}</p>
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
