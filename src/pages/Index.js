import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Rukhshan Arif Mian's personal website. Lahore based UChicago graduate, "
      + ''
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Home</Link>
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my personal website! Please feel free to read more{' '}
        <strong><Link to="/about">about me</Link></strong>, or you can check out my{' '}
        <strong><Link to="/resume">resume</Link></strong>, <strong><Link to="/projects">projects</Link></strong>,{' '}
        view random<strong><Link to="/stats"> statistics</Link></strong>, or{' '}
        <strong><Link to="/contact">contact</Link></strong> me.
        With experience as an independent contractor, I am open to globally remote opportunities,
        including short-term projects, long-term contracts, and consulting roles.
      </p>
      {/* <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/rukhshanarifm/personal-site">here</a>.
      </p> */}
    </article>
  </Main>
);

export default Index;
