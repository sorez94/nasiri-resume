import React from 'react';
import styles from "@/styles/Footer.module.css";
import {FaLocationDot} from "react-icons/fa6";
import {LiaBirthdayCakeSolid} from "react-icons/lia";
import {FaPhone} from "react-icons/fa";
import {IoMdMailOpen} from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footerSec}>
            <div className={styles.footerDivSec}>
                <div>
                    <span className={styles.so}>Hamid</span><span className={styles.rez}>Reza</span>
                </div>
                <div className={styles.menuSec}>
                    <Link href='#about' className={styles.menuSecChild}>About Me</Link>
                    <Link href='#work' className={styles.menuSecChild}>Work Experience</Link>
                    <Link href='#education' className={styles.menuSecChild}>Education</Link>
                    <Link href='#contact' className={styles.menuSecChild}>Contact</Link>
                </div>
            </div>
            <div className={styles.footerSec2}>
                <div className={styles.divSec2}>As an experienced Database Administrator, I excel in optimizing and
                    managing complex data environments to ensure seamless operations and high performance. My work is
                    driven by a strong focus on data integrity, security, and problem-solving. While my primary
                    expertise lies in database management, I am not new to programming. I have a foundational
                    understanding of programming concepts and have previously dabbled in coding. This background fuels
                    my ambition to deepen my programming skills and integrate them into my professional toolkit. I am
                    eager to bridge the gap between database management and software development, enhancing my
                    versatility and value.
                </div>
                <div className={styles.divSec2}>
                    <div className={styles.locationDiv}>
                        <span className={styles.icon}> <FaLocationDot color={"white"}
                                                                      className={styles.reactIcon}/></span>
                        <Link target='_blank' href="https://www.google.com/maps/@35.7648593,51.3092416,15z?entry=ttu"
                              className={styles.emailLink}>
                            <span className={styles.info}>tehran, iran</span>
                        </Link>
                    </div>
                    <div className={styles.locationDiv}>
                        <span className={styles.icon}> <FaPhone color={"white"} className={styles.reactIcon}/></span>
                        <Link target='_blank' href="https://t.me/Ifyoulookingforpourya" className={styles.emailLink}>
                            <span className={styles.info}> 09100431242 </span>
                        </Link>
                    </div>
                    <div className={styles.locationDiv}>
                        <span className={styles.icon}> <IoMdMailOpen color={"white"}
                                                                     className={styles.reactIcon}/></span>
                        <Link target='_blank' className={styles.emailLink} href="mailto:hamidrezanasiri1996@gmail.com">
                            <span className={styles.info}> hamidrezanasiri1996@gmail.com </span>
                        </Link>
                    </div>
                    <div>
                        <div className={styles.logoDiv}>
                            <Image className={styles.marginLogo} src="/LinkedIn.png" alt="linekedIn" width={100}
                                   height={27}/>
                        </div>
                        <div className={styles.logoDiv}>
                            <Link target='_blank' href='https://www.linkedin.com/in/pourya-nasiri-a3b204211/'>
                                <Image className={styles.qr} src="/linkedInQr.png" alt="linekedIn" width={120}
                                       height={120}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>Copyight@Hamidreza 2024</div>
        </footer>
    );
};

export default Footer;