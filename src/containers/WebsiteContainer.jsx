import React from 'react';
import Slide from 'react-reveal/Slide';
import styles from './WebsiteContainer.css';

const WebsiteContainer = () => {

  return (
    <section className={styles.container}>
      <section className={styles.mainContainer}>
        <div>
          <Slide left>
            <p className={styles.aboutText}>
        Thanks for coming by! My name's Erik Ford and I'm a Fullstack Software Engineer. I grew up traveling the country since my family was in the military. I came back to my roots here in the Pacific NorthWest and enjoy all things nerdy and geeky. Please enjoy my Portfolio!
            </p>
          </Slide>
          <Slide bottom>
            <img src='./dogs.jpg' className={styles.imageDogs}/>
          </Slide>
        </div>
        <div>
          <Slide right>
            <img src='./erik1.jpg' className={styles.imageErik}/>
          </Slide>
        </div>
        
      </section>
    </section>
  );
};

export default WebsiteContainer;
