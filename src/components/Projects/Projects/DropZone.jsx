import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';
import Roll from 'react-reveal/Roll';
import styles from './Projects.css';

const DropZone = () => {

  return (
    <section className={styles.pageContainer}>
      <Flash>
        <p className={styles.title}>
          The Drop Zone
        </p>
      </Flash>
      <section className={styles.projectContainer}>
        <Roll left>
          <div className={styles.leftContainer}>
            <p className={styles.description}>
          DropZone allows users to get straight to the action of earning in game rewards by watching their favorite streamers live on Twitch. Cut through the hassle of having to search through hundreds of games and thousands of streamers and get straight to earning drops! DropZone was built in a 5 day sprint with 5 individuals.
            </p>
            <div className={styles.siteLinks}>
              <a href="https://thedropzone.netlify.app/">
                <button className={styles.github}>
            Live Site
                </button>
              </a>
              <a href="https://github.com/DropTopIncorporated/DropZoneFE">
                <button className={styles.github}>
            Github FE
                </button>
              </a>
              <a href="https://github.com/DropTopIncorporated/DropZoneBE">
                <button className={styles.github}>
            Github BE
                </button>
              </a>
            </div>
          </div>
        </Roll>
        <div className={styles.projectImageContainer}>
          <Roll right delay={200}>
            <img src='logo2-green.png' className={styles.projectImage}/>
          </Roll>
          <ul className={styles.technologyList}>
            <li>
                React-Redux
            </li>
            ||
            <li>
                Node.js 
            </li>
            ||
            <li>
            MongoDB 
            </li>
            ||
            <li>
                MaterialUI
            </li>
            ||
            <li>
                FullStack
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

export default DropZone;
