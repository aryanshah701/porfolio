import React from 'react';
import config from '../../config';

const Contact = () => {
  return (
    <ul className="contact">
      {config.socialLinks.map(social => {
        const { icon, url } = social;
        return (
          <li className={`${icon}`} key={url}>
            <a href={url}>{url}</a>
          </li>
        );
      })}
      <li className="fa-home">{config.address}</li>
    </ul>
  );
};

export default Contact;
