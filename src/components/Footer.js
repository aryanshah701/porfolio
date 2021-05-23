import React from 'react';
import Contact from './Contact';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <Contact />
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Redesigned with <span role="img">❤</span>️by Aryan Shah
          </li>
        </ul>
      </div>
    </section>
  );
}
