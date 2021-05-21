import React from 'react';
import gostudyfeed from '../assets/images/gostudy-feed.png';
import gostudylanding from '../assets/images/gostudy-landing.png';
import postifypost from '../assets/images/postify-post.png';

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
    case 'postifypost':
      image = postifypost;
      break;
    default:
      break;
  }

  let id = idx + 1;
  let stringId = '';
  switch (idx) {
    case 1:
      stringId = 'one';
      break;
    case 2:
      stringId = 'two';
      break;
    case 3:
      stringId = 'three';
      break;
    case 4:
      stringId = 'two';
      break;
    default:
      break;
  }

  const altClass = id % 2 === 0 ? 'alt' : '';

  if (idx > 3) {
    id = 2;
  }

  console.log('string, id, idx ', stringId, id, idx);

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
          <div className="flex-div">
            <a href="/#" className="special a-margin-right">
              Live View
            </a>
            <a href="/#" className="special">
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightProject;
