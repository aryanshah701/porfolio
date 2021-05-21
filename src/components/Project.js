import React from 'react';
import gostudyfeed from '../assets/images/gostudy-feed.png';
import gostudylanding from '../assets/images/gostudy-landing.png';

const Project = ({ name, description, imageSrc }) => {
  let image = null;
  console.log('image src: ', imageSrc);
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
    <article>
      <a href="/#" className="image">
        <img src={image} alt="" />
      </a>
      <h3 className="major">{name}</h3>
      <p>{description}</p>
      <a href="/#" className="special">
        Learn more
      </a>
    </article>
  );
};

export default Project;
