import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/coding.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/android.png")} alt="Android icon" />
            <div className={styles.aboutItemText}>
              <h3>Android App Developer</h3>
              <p>
              I have knowledge of developing Android apps using Xml,Kotlin Android Studio IDE.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webpages.png")} alt="Web Icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              I have knowledge of developing websites using the MERN (MongoDB, Express.js, React.js, Node.js) stack for web development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/figma.png")} alt="Figma icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I have knowledge of UI/UX designing for both web and app development using Figma.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
