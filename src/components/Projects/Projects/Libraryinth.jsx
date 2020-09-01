import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Flash from 'react-reveal/Flash';
import styles from './Projects.css';

const Libraryinth = () => {

  return (
    <section className={styles.pageContainer}>
      <Flash>
        <p className={styles.title}>
      The Libraryinth
        </p>
      </Flash>
      <section className={styles.projectContainer}>
        <Roll left>
          <div className={styles.leftContainer}>
            <p className={styles.description}>
          The Libraryinth Spire is a simple multiplayer virtual text-based game on interactive fiction that includes a multi-user chatroom built with Socket.io. The user is able to interact with the game by typing commands that represent natural language through our language processing lexicon and React. Users are able to interact in a chat room and talk with other users who are also using the application in real-time. This project was completed by 4 individuals in a five-day sprint using React, JavaScript, Node.js, Socket.io, and Mongoose. 
            </p>
            <div className={styles.siteLinks}>
              <a href="https://libraryinth-spire-staging.herokuapp.com/">
                <button className={styles.github}>
            Live Site
                </button>
              </a>
              <a href="https://github.com/Mud-Buds/libraryinth-spire">
                <button className={styles.github}>
            Github
                </button>
              </a>
            </div>
          </div>
        </Roll>
        <div className={styles.projectImageContainer}>
          <Roll right delay={200}>
            <img src='LibraryinthGame.PNG' className={styles.projectImage}/>
          </Roll>
          <ul className={styles.technologyList}>
            <li>
                  Socket.io
            </li>
            ||
            <li>
                  Node.js
            </li>
            ||
            <li>
                  Mongoose
            </li>
            ||
            <li>
                  Bcrypt
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

export default Libraryinth;
