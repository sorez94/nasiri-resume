import React, {useState} from "react";
import styles from "@/styles/About.module.css";
import Image from 'next/image';
import Empowering from "@/components/modules/About/Empowering";
import PersonalInfo from "@/components/modules/About/PersonalInfo";
import ProfileImage from "@/components/modules/About/ProfileImage";
import AboutMe from "@/components/modules/About/AboutMe";
import {isMobile} from 'react-device-detect';


function About() {
    return (
        <div id='about' className={styles.profileContainer}>
            {/*{!isMobile ? <div> <Image src="/about-bg.png" alt="Soheil Rezaee" width={1000} height={750} className={styles.aboutBg}/> </div>: null}*/}
            <section className={styles.aboutContainer}>
                <Empowering/>
                <div className={styles.parentDiv}>
                    <div className={styles.blurSection}>
                        <ProfileImage/>
                        <div className={styles.aboutText}>
                            <span
                                className={styles.expert}>Hamidreza Nasiri</span>
                            <AboutMe/>
                        </div>
                        <div className={styles.contactInfo}>
                            <PersonalInfo/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default About;