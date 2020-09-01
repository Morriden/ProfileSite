import React from 'react';
import { Link } from 'react-router-dom';
import Flash from 'react-reveal/Flash';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import styles from './Projects.css';

const LastHope = () => {

  return (
    <section className={styles.pageContainer}>
      <Flash>
        <p className={styles.title}>
          Last Hope
        </p>
      </Flash>
      <section className={styles.projectContainer}>
        <Roll left>
          <div className={styles.leftContainer}>
            <p className={styles.description}>
        Last Hope is a full-stack roll-based game application built with React that responds to user interaction to render certain experiences and events in response to user input. This project was completed by 3 individuals in a five-day sprint using React, JavaScript, CSS, and SQL. 
            </p>
            <div className={styles.siteLinks}>
              <a href="https://lit-depths-90375.herokuapp.com/">
                <button className={styles.github}>
            Live Site
                </button>
              </a>
              <a href="https://github.com/3rd-git-from-the-hub/space-game-fe">
                <button className={styles.github}>
            Github FE
                </button>
              </a>
              <a href="https://github.com/3rd-git-from-the-hub/space-game-backend">
                <button className={styles.github}>
            Github BE
                </button>
              </a>
            </div>
          </div>
        </Roll>
        <div className={styles.projectImageContainer}>
          <Roll right delay={200}>
            <img src='lasthope.PNG' className={styles.projectImage}/>
          </Roll>
          <ul className={styles.technologyList}>
            <li>
                React
            </li>
            ||
            <li>
                PostgresSQL
            </li>
            ||
            <li>
                Express
            </li>
            ||
            <li>
                Full-Stack
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

export default LastHope;
