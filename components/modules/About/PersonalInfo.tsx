import React from 'react';
import styles from "@/styles/About.module.css";
import {LiaBirthdayCakeSolid} from "react-icons/lia";
import {FaPhone} from "react-icons/fa";
import {IoMdMailOpen} from "react-icons/io";
import {FaLocationDot} from "react-icons/fa6";

const PersonalInfo = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <span className={styles.icon}> <LiaBirthdayCakeSolid color={"white"} size={15}/></span>
                <span style={{marginRight: "5px", fontSize: "16px"}}>november 18th, 1996</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <span className={styles.icon}> <FaPhone color={"white"} size={15}/></span>
                <span style={{marginRight: "5px", fontSize: "16px"}}>09100431242</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <span className={styles.icon}> <IoMdMailOpen color={"white"} size={15}/></span>
                <span style={{marginRight: "5px", fontSize: "16px"}}>hamidrezanasiri1996@gmail.com</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <span className={styles.icon}> <FaLocationDot color={"white"} size={15}/></span>
                <span style={{marginRight: "5px", fontSize: "16px"}}>tehran, iran</span>
            </div>
        </>
    );
};

export default PersonalInfo;