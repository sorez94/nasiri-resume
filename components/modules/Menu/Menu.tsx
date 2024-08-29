import React, {useState} from "react";
import styles from "@/styles/Menu.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {IoMenu} from "react-icons/io5";

function Menu() {
    const currentPath = usePathname();
    const [display, setDisplay] = useState(false);

    const toggleMenu = () => {
        setDisplay((prevDisplay) => !prevDisplay)
    }

    return (
        <nav
            style={{flexDirection: "row" }}
            className={styles.navbar}>
            <Link href="/" className={styles.sorez}>
                <span className={styles.so}>Hamid</span><span className={styles.rez}>Reza</span>
            </Link>
            <Link href="#about"
                  style={{flexDirection: display ? "row" : "column" }}
                  className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "about") ? styles.active_nav_link : styles.nav_link}>
                <h3 className={styles.menuItems}>
                    About Me
                </h3>
            </Link>
            <Link href="#technologies"
                  className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "technologies") ? styles.active_nav_link : styles.nav_link}>
                <h3 className={styles.menuItems}>
                    Technologies
                </h3>
            </Link>
            <Link href="#work"
                  className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "work") ? styles.active_nav_link : styles.nav_link}>
                <h3 className={styles.menuItems}>
                    Work Experience
                </h3>
            </Link>
            <Link href="#education"
                  className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "education") ? styles.active_nav_link : styles.nav_link}>
                <h3 className={styles.menuItems}>
                    Education
                </h3>
            </Link>
            <Link href="#contact"
                  className={(typeof window !== "undefined" && window?.document.URL.split('#')[1] === "contact") ? styles.active_nav_link : styles.nav_link}>
                <h3 className={styles.menuItems}>
                    Contact
                </h3>
            </Link>
            <div className={styles.nav__toggle} id="nav-toggle" onClick={toggleMenu}>
                <IoMenu className={styles.menuIcon}/>
            </div>
        </nav>
    );
}

export default Menu;