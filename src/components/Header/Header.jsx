import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import styles from './Header.css';

const Header = () => {

  return (
    <>
      <section className={styles.headerContainer}>
        <section>
          <Slide left>
            <h2 className={styles.name}>
              Erik Ford
            </h2></Slide>
          <Slide left>
            <h2 className={styles.softwareEngineer}>
            Software Engineer
            </h2>
          </Slide>
        </section>
        <section className={styles.linkContainer}>
          <Link to='/' className={styles.links}>
            <Fade right distance="400px">
              <button className={styles.navigationButton}>
            Home
              </button>
            </Fade>
          </Link>
          <Link to='/about' className={styles.links}>
            <Fade right distance="400px">
              <button className={styles.navigationButton}>
            About
              </button>
            </Fade>
          </Link>
          <Link to='/projects' className={styles.links}>
            <Fade right distance="400px">
              <button className={styles.navigationButton}>
            Projects
              </button>
            </Fade>
          </Link>
          <Link to='/contact' className={styles.links}>
            <Fade right distance="400px">
              <button className={styles.navigationButton}>
            Contact
              </button>
            </Fade>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Header;
