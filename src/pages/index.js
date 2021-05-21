import React from 'react';

import Layout from '../components/Layout';
import Project from '../components/Project';
import HighlightProject from '../components/HighlightProject';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      {config.higlightProjects.map((project, idx) => {
        return <HighlightProject project={project} key={idx} idx={idx} />;
      })}

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Scripts/Games</h2>
          <section className="features">
            {config.otherProjects.map((project, idx) => (
              <Project
                name={project.name}
                description={project.description}
                imageSrc={project.imageSrc}
                key={idx}
              />
            ))}
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
