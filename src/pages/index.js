import React from 'react';

import Layout from '../components/Layout';
import Project from '../components/Project';

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

    <section id="one" className="wrapper spotlight style1">
      <div className="inner">
        <a href="/#" className="image">
          <img src="" alt="" />
        </a>
        <div className="content">
          <h2 className="major">Magna arcu feugiat</h2>
          <p>
            Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
            ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris
            id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
            ultrices, neque et faucibus viverra, ex nulla cursus.
          </p>
          <a href="/#" className="special">
            Learn more
          </a>
        </div>
      </div>
    </section>

    <section id="two" className="wrapper alt spotlight style2">
      <div className="inner">
        <a href="/#" className="image">
          <img src="" alt="" />
        </a>
        <div className="content">
          <h2 className="major">Tempus adipiscing</h2>
          <p>
            Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
            ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris
            id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
            ultrices, neque et faucibus viverra, ex nulla cursus.
          </p>
          <a href="/#" className="special">
            Learn more
          </a>
        </div>
      </div>
    </section>

    <section id="three" className="wrapper spotlight style3">
      <div className="inner">
        <a href="/#" className="image">
          <img src="" alt="" />
        </a>
        <div className="content">
          <h2 className="major">Nullam dignissim</h2>
          <p>
            Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
            ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris
            id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam
            ultrices, neque et faucibus viverra, ex nulla cursus.
          </p>
          <a href="/#" className="special">
            Learn more
          </a>
        </div>
      </div>
    </section>

    <section id="wrapper">
      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Web</h2>
          <section className="features">
            {config.webProjects.map((project, idx) => {
              return (
                <Project
                  name={project.name}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  key={idx}
                />
              );
            })}
          </section>
        </div>
      </section>
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
