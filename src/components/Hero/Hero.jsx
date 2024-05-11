import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import cv from "../../../assets/hero/Abdul_Resume.pdf";

export const Hero = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abdul</h1>
        <p className={styles.description}>
        As a recent MCA post graduate, I am proficient in both web and app development. I am eager to enhance my skills and contribute effectively to projects
        </p>
        <div className={styles.hori}>
        <a href="mailto:Abdulrahaman.7779@gmail.com" className={styles.contactBtn}>
        Email
        </a>
      <a download="AbdulResumeupdated.pdf" href={cv} className={styles.contactBtn}>Resume</a>
      </div >
      </div>
      <img
        src={getImageUrl("hero/Abd1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
