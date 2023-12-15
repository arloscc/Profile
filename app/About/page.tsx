import Nav from "../nav/nav";
import styles from "./About.module.css";
import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <>
      <Nav />
      <div className={styles.box}>
      <div className={styles.About}>
        <div className={styles.Aboutbr}>
          <div className={styles.text2}>
            <h1 className={styles.Me}>About Me</h1>
            <p className={styles.prf}>
              Carlos Susanto is a multifaceted professional, seamlessly blending
              the roles of developer and designer. Currently enrolled at the
              Technology University in Yogyakarta, Carlos embarked on his career
              journey with a focus on design before transitioning into the world
              of programming. His journey is a testament to his versatility and
              adaptability. Carlos is a talented individual who thrives on
              challenges and is always eager to learn new things. His academic
              background at the Technology University in Yogyakarta has equipped
              him with a strong foundation in both technology and design. Over
              the course of his career, Carlos has demonstrated a keen interest
              in staying at the forefront of industry trends, making him a
              dynamic force in the rapidly evolving landscape of technology and
              design. As a developer and designer, Carlos brings a unique
              perspective to his work, combining creative flair with technical
              expertise. His decision to explore both realms reflects not only
              his proficiency but also his passion for pushing boundaries and
              exploring the intersections of technology and design. Visit my
              page to learn more about Carlos Susanto and his inspiring journey
              in the world of technology and design.
            </p>
          </div>
          <Image
            className={styles.Image}
            src="/mitaka.jpg"
            width={4076}
            height={2497}
            alt="Picture of the author"
          />
          <div className={styles.vline}></div>
    
        </div>
        <div className={styles.carrier}>
          <div className={styles.school}> 
        <FontAwesomeIcon className={styles.cap} icon={faSchool}  />
        <h1 className={styles.texta} >SMAN 1 MEMPAWAH HILIR</h1>
        </div>
        <div className={styles.school}> 
        <FontAwesomeIcon className={styles.cap} icon={faGraduationCap}  />
        <h1 className={styles.texta} >Technology University of Yogyakarta (2022 - 2026)</h1>
        </div>
        </div>
          <div className="bar">
            <div className="fill">
              <div className="profile"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
