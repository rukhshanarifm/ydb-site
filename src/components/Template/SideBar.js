import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Profile" />
      </Link>
      <header>
        <h2>Rukhshan Arif Mian</h2>
        <p>
          <a href="mailto:rukhshanarifm@gmail.com">rukhshanarifm@gmail.com</a>
        </p>
      </header>
      <p>
        Hi, I&apos;m Rukhshan. I am a{' '}
        <a href="https://harris.uchicago.edu/academics/degrees/ms-computational-analysis-public-policy-mscapp">UChicago MSCAPP </a>
        graduate. I help organizations assess and optimize
        their data capacity for better decision-making.
        Most recently, I worked with the Bloomberg Center for Government Excellence (GovEx),
        supporting data-driven initiatives for local governments in the United States.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Code sourced from <Link to="/">https://github.com/mldangelo/personal-site</Link>
      </p>
    </section>
  </section>
);

export default SideBar;
