import React from 'react';
import Image from "next/image";
import styles from "@/styles/Education.module.css";

const Education = () => {
    return (
        <>
            <Image src="/education.png" alt="Soheil Rezaee" width={532} height={376} className={styles.aboutBg}/>
            <Image src="/flipEducation.png" alt="Soheil Rezaee" width={532} height={376}
                   className={styles.aboutBgFlip}/>
            <section id="education" className={styles.section}>
                <h2>Education</h2>
                <div className={styles.workExperience}>
                    <div className={styles.experienceContext}>
                        <ul className={styles.ulDashed}>
                            <li className={styles.headerLi}>Bachelor of science in material engineering and metallurgy</li>
                            <h2 className={styles.bodyContext}>Zanjan University (znu),zanjan,iran</h2>
                            <h3 className={styles.bodyContext}>(2015-2020)</h3>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;