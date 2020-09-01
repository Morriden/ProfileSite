import React from 'react';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import styles from './Contact.css';

const Contact = () => {

  return (
    <section>
      <Flip>
        <p className={styles.title}>
        Thanks for stopping by!
        </p>
      </Flip>
      <section className={styles.center}>
        <section className={styles.container}>
          <Flip>
            <div className={styles.text}>
            I appreciate you stopping by and looking at my portfolio. If you would like to speak further please use one of the links provided below. Have a wonderful day!
            </div>
          </Flip>
          <div className={styles.contactContainer}>
            <div className={styles.websites}>
              <Slide left>
                <a href="https://www.linkedin.com/in/erik-ford-business/">
                  <button className={styles.buttons}>
            LinkedIn
                  </button>
                </a>
              </Slide>
              <Slide right>
                <a href="https://github.com/Morriden">
                  <button className={styles.buttons}>
            GitHub
                  </button>
                </a>
              </Slide>
            </div>
            <div>
              <a href="mailto:erik.ford.business@gmail.com">
                <Slide bottom>
                  <button className={styles.buttonEmail}>
            Email Me: erik.ford.business@gmail.com
                  </button>
                </Slide>
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Contact;
