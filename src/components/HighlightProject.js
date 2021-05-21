import React from 'react';
import gostudyfeed from '../assets/images/gostudy-feed.png';
import gostudylanding from '../assets/images/gostudy-landing.png';
import postifypost from '../assets/images/postify-post.png';
import bullsgame from '../assets/images/bulls-game.png';
import bullslobby from '../assets/images/bulls-lobby.png';
import events from '../assets/images/events.png';

const HighlightProject = ({ project, idx }) => {
  const {
    name,
    description,
    imageSrc,
    techStack,
    webLink,
    codeLink,
    testUsername,
    testPassword,
  } = project;
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
    case 'bullsgame':
      image = bullsgame;
      break;
    case 'bullslobby':
      image = bullslobby;
      break;
    case 'events':
      image = events;
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

  return (
    <section
      id={stringId}
      className={`wrapper ${altClass} spotlight style${id}`}
    >
      <div className="inner">
        <a target="_blank" rel="noreferrer" href={webLink} className="image">
          <img src={image} alt="Project" />
        </a>
        <div className="content">
          <h2 className="major">{name}</h2>
          <p>{description}</p>
          <p>Tech Stack: {techStack}</p>
          {testUsername ? (
            <p>
              Test Credentials:
              <br /> Username: {testUsername}
              <br /> Password: {testPassword}
            </p>
          ) : null}
          <div className="flex-div">
            <a
              target="_blank"
              href={webLink}
              rel="noreferrer"
              className="special a-margin-right"
            >
              Live View
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={codeLink}
              className="special"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightProject;
