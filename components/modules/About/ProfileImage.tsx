import React from 'react';
import styles from "@/styles/About.module.css";
import Image from "next/image";

const ProfileImage = () => {
    return (
        <Image src="/profile.jpg" alt="Hamidreza Nasiri" className={styles.profilePic} width={150}
               height={150}/>
    );
};

export default ProfileImage;