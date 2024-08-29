import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

function Navbar() {
    const currentPath = usePathname();

    return (
        <header className={styles.header}>
            <Link href="/" style={{display: 'flex', textDecoration: "none"}}>
                <h2 className={styles.so}>Hamid</h2><h2 className={styles.rez}>Reza</h2>
            </Link>
            <button
                type="button"
                className={`${styles.navbar_toggler}`}
                data-toggle="collapse"
                data-target="#navbarCollapse"
            >
                <span className={`${styles.navbar_toggler_icon}`}></span>
            </button>
            <nav style={{width: "90%", justifyContent: "end"}}
                 className={`${styles.navbar} ${styles.navbar_expand_lg} m-0 p-0 bg-none navbar-dark py-3`}>
                <Link href="#about"
                      className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "about") ? styles.active_nav_link : styles.nav_link}>
                    <h3>
                        About Me
                    </h3>
                </Link>
                <Link href="#technologies"
                      className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "technologies") ? styles.active_nav_link : styles.nav_link}>
                    <h3>
                        Technologies
                    </h3>
                </Link>
                <Link href="#work"
                      className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "work") ? styles.active_nav_link : styles.nav_link}>
                    <h3>
                        Work Experience
                    </h3>
                </Link>
                <Link href="#education"
                      className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "education") ? styles.active_nav_link : styles.nav_link}>
                    <h3>
                        Education
                    </h3>
                </Link>
                <Link href="#contact"
                      className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "contact") ? styles.active_nav_link : styles.nav_link}>
                    <h3>
                        Contact
                    </h3>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;