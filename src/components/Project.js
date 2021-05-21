import React from 'react';
import bestdeals from '../assets/images/best-deals.jpg';
import visualizer from '../assets/images/visualizer.png';
import pathfinding from '../assets/images/pathfinding.png';

const Project = ({ name, description, imageSrc }) => {
  let image = null;
  console.log('image src: ', imageSrc);
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
      <a href="/#" className="special">
        Code
      </a>
    </article>
  );
};

export default Project;
