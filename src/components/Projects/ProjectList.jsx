import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import styles from './ProjectList.css';

const Projects = () => {

  return (
    <section>
      <div className={styles.projectContainer}>
        <div>
          <Slide bottom delay={100}>
            <div>
              <h3 className={styles.projectTitle}>The Drop Zone</h3>
              <Link to='/dropzone' className={styles.links}>
                <img src="logo2-green.png" className={styles.projectPicture}/>
              
                <p className={styles.projectDescription}>
                  Learn More
                </p>
              </Link>
            </div>
          </Slide>
          <Slide bottom delay={200}>
            <div>
              <h3 className={styles.projectTitle}>Jhemm Fighters</h3>
              <Link to='/jhemmfighters' className={styles.links}>
                <img src="jhemmfighters.PNG" className={styles.projectPicture}/>
              
                <p className={styles.projectDescription}>
                Learn More
                </p>
              </Link>
            </div>
          </Slide>
        </div>
        <div>
          <Slide bottom delay={300}>
            <div>
              <h3 className={styles.projectTitle}>The Libraryinth</h3>
              <Link to='/libraryinth' className={styles.links}>
                <img src="LibraryinthGame.PNG" className={styles.projectPicture}/>
              
                <p className={styles.projectDescription}>
                  Learn More
                </p>
              </Link>
            </div>
          </Slide>
          <Slide bottom delay={400}>
            <div>
              <h3 className={styles.projectTitle}>Last Hope</h3>
              <Link to='/lasthope' className={styles.links}>
                <img src="lasthope.PNG" className={styles.projectPicture}/>
              
                <p className={styles.projectDescription}>
                  Learn More
                </p>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Projects;
