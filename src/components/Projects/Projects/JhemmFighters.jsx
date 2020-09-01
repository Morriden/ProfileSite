import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';
import Roll from 'react-reveal/Roll';
import styles from './Projects.css';

const JhemmFighters = () => {

  return (
    <section className={styles.pageContainer}>
      <Flash>
        <p className={styles.title}>
          Jhemm Fighters
        </p>
      </Flash>
      <section className={styles.projectContainer}>
        <Roll left>
          <div className={styles.leftContainer}>
            <p className={styles.description}>
        Jhemm Fighters is a browser-based local multiplayer arena combat game built with JavaScript. Each player creates their character by selecting a class and does battle against another player by managing their respective energies to perform moves against one another. This project was completed by a 5 person team in a five-day sprint using local storage, JavaScript, HTML, and CSS.
            </p>
            <div className={styles.siteLinks}>
              <a href="https://team-jhemm-fighters.github.io/jhemm-fighters/">
                <button className={styles.github}>
            Live Site
                </button>
              </a>
              <a href="https://github.com/team-jhemm-fighters/jhemm-fighters">
                <button className={styles.github}>
            Github
                </button>
              </a>
            </div>
          </div>
        </Roll>
        <div className={styles.projectImageContainer}>
          <Roll right delay={200}>
            <img src='jhemmfighters.PNG' className={styles.projectImage}/>
          </Roll>
          <ul className={styles.technologyList}>
            <li>
                  JavaScript
            </li>
            ||
            <li>
                  HTML
            </li>
            ||
            <li>
                  CSS
            </li>
            ||
            <li>
                  Local Storage
            </li>
          </ul>
        </div>
      </section>
      <ul className={styles.projectList}>
        <Slide bottom delay={100}>
          <Link to='/dropzone' className={styles.links}>
            <li>
              <button className={styles.github}>
          The Drop Zone
              </button>
            </li>
          </Link>
        </Slide>
        <Slide bottom delay={200}>
          <Link to='/libraryinth' className={styles.links}>
            <li>
              <button className={styles.github}>
          The Libraryinth
              </button>
            </li>
          </Link>
        </Slide>
        <Slide bottom delay={300}>
          <Link to='/jhemmfighters' className={styles.links}>
            <li>
              <button className={styles.github}>
          Jhemm Fighters
              </button>
            </li>
          </Link>
        </Slide>
        <Slide bottom delay={400}>
          <Link to='/lasthope' className={styles.links}>
            <li>
              <button className={styles.github}>
          Last Hope
              </button>
            </li>
          </Link>
        </Slide>
      </ul>
    </section>
  );
};

export default JhemmFighters;
