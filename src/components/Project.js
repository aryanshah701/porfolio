import React from 'react';

const Project = ({ name, description }) => {
  return (
    <article>
      <a href="/#" className="image">
        <img src="" alt="" />
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
