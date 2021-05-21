import React from 'react';
import bestdeals from '../assets/images/best-deals.jpg';
import visualizer from '../assets/images/visualizer.png';
import pathfinding from '../assets/images/pathfinding.png';

const Project = ({ project }) => {
  const { name, description, imageSrc, codeLink, otherLink, webLink } = project;

  let image = null;
  switch (imageSrc) {
    case 'bestdeals':
      image = bestdeals;
      break;
    case 'visualizer':
      image = visualizer;
      break;
    case 'pathfinding':
      image = pathfinding;
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
      {webLink ? (
        <a target="_blank" rel="noreferrer" href={webLink} className="special">
          Live View
        </a>
      ) : null}
      {codeLink ? (
        <a target="_blank" rel="noreferrer" href={codeLink} className="special">
          Code
        </a>
      ) : null}
      {otherLink ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={otherLink}
          className="special"
        >
          Project
        </a>
      ) : null}
    </article>
  );
};

export default Project;
