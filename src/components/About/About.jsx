import React from 'react';
import Slide from 'react-reveal/Slide';
import styles from './About.css';

const About = () => {
    
  return (
    <section className={styles.pageContainer}>
      <section className={styles.aboutMeContainer}>
        <Slide left>
          <div className={styles.aboutMeInfo}>
            <p className={styles.aboutMeTitle}>
              About Me
            </p>
            <p className={styles.text}>
            I am a Full-Stack Software Engineer with a focus on the back end. I am a creative thinker and love to code well-thought-out, problem-solving applications. I have focused on the in-person connections with customers and clients in positions for over 8 years. I have experience in management and leadership with teams taking part in life-changing events for individuals with developmental disabilities. I go above and beyond the expectations of my role and always strive to improve myself and the company I am working for. These experiences have made me an excellent Software Engineer.
            </p>
            <div>
              <p className={styles.findMe}>Can't find me?</p>
              <h3 className={styles.doingFollowing}>
                I'm probably doing one of the following..
              </h3>
              <ul className={styles.listItemDisplay}>
                <div className={styles.text}>
                  <li className={styles.listItemsFun}>
                Spending the weekend LARPing
                  </li>
                  <li className={styles.listItemsFun}>
                Playing some type of board game or video game
                  </li>
                  <li className={styles.listItemsFun}>
                Playing a tabletop role-playing game
                  </li>
                  <li className={styles.listItemsFun}>
                Quad Riding
                  </li>
                </div>
                <div className={styles.text}>
                  <li className={styles.listItemsFun}>
                Playing with my rescue dogs
                  </li>
                  <li className={styles.listItemsFun}>
                Singing along horribly with a musical
                  </li>
                  <li className={styles.listItemsFun}>
                Spending time with my family
                  </li>
                
                  <li className={styles.listItemsFun}>
                Coding nerdy applications
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className={styles.techStackInfo}>
            <h2 className={styles.techStackTitle}>Tech Stack</h2>
            <section className={styles.techStackLists}>
            
              <ul className={styles.techText}>
                <p className={styles.techTitles}>
                  Development
                </p>
                <div className={styles.techStackSingleListOne}>
                  <li>
                JavaScript
                  </li>
                  <li>
                HTML
                  </li>
                  <li>
                CSS
                  </li>
                  <li>
                React/Redux
                  </li>
                </div>
              </ul>
            
              <ul className={styles.techText}>
                <p className={styles.techTitles}>
                  Back-End
                </p>
                <div className={styles.techStackSingleListTwo}>
                  <li>
                Node.js
                  </li>
                  <li>
                Express
                  </li>
                  <li>
                NOSQL/SQL
                  </li>
                  <li>
                MongoDB
                  </li>
                </div>
              </ul>
              <ul className={styles.techText}>
                <p className={styles.techTitles}>
                  Tools & Testing
                </p>
                <div className={styles.techStackSingleListThree}>
                  <li>
                GitHub
                  </li>
                  <li>
                Heroku
                  </li>
                  <li>
                Netlify
                  </li>
                  <li>
                Jest
                  </li>
                  <li>
                Test Driven Development
                  </li>
                  <li>
                APIs
                  </li>
                </div>
              </ul>
            </section>
          </div>
        </Slide>
      </section>
      <Slide bottom>
        <div className={styles.techStackImages}>
          <img src="javascriptlogo.png" className={styles.imageLogo}/>
          <img src="csslogo.png" className={styles.imageLogo}/>
          <img src="nodelogo2.jpg" className={styles.imageLogo}/>
          <img src="githublogo.png" className={styles.imageLogo}/>
          <img src="herokulogo.png" className={styles.imageLogo}/>
          <img src="htmllogo4.png" className={styles.imageLogo}/>
          <img src="jestlogo.svg" className={styles.imageLogo}/>
          <img src="mongodblogo2.png" className={styles.imageLogo}/>
          <img src="netlifylogo.png" className={styles.imageLogo}/>
          <img src="postgreslogo3.png" className={styles.imageLogo}/>
          <img src="reactlogo.png" className={styles.imageLogo}/>
          <img src="socketiologo.svg" className={styles.imageLogo}/>
        </div>
      </Slide>
    </section>
  );
};

export default About;
