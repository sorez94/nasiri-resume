import React from 'react';
import styles from "@/styles/ContactMe.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const ContactMe = () => {
    return (
        <div id='contact' className={styles.contactMe}>
            <h2 className={styles.h2Sec}>Still have douts about me?</h2>
            <Link target='_blank' href="https://t.me/Ifyoulookingforpourya" className={styles.btnSec}><FontAwesomeIcon icon={faEnvelope} size="xl"/> Contact Me</Link>
        </div>
    );
};

export default ContactMe;