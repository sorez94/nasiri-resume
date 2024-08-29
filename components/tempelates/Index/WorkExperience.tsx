import React from 'react';
import styles from "@/styles/WorkExperience.module.css";
import Image from "next/image";
import ExperienceTech from "@/components/modules/Experience/ExperienceTech";
import {
    CoffeeShopTechData, NabTechData,
    NedamatTechData,
    NimaTechData,
    OracleTechData, SepadTechData
} from "@/components/modules/Experience/ExperienceTechData";

const WorkExperience = () => {
    return (
        <>
            <Image src="/whale.png" alt="Soheil Rezaee" width={1300} height={700} className={styles.aboutBg}/>
            <section id="work" className={styles.section}>
                <h2>Work Experience</h2>
                <div className={styles.workExperience}>
                    <div className={styles.experienceContext}>
                        <ul className={styles.ulDashed}>
                            <li className={styles.headerLi}>Database Administrator & Developer / EDSAB</li>
                            <h2 className={styles.bodyContext}>Overview: EDSAB Co is a prominent company with over 20
                                years of expertise, specializing in the development of GIS-based, desktop, and web
                                applications for the electricity industry. The company is dedicated to delivering
                                innovative solutions that enhance the efficiency and reliability of power distribution
                                and transmission systems.</h2>
                            <ol className={styles.frontEndOl}>
                                <li><span style={{fontWeight: 'bold'}}>Database Development and Management: </span>Played
                                    a crucial role in developing and
                                    maintaining databases, with a strong focus on Oracle database management. Ensured
                                    data integrity and optimized database performance to support the company’s critical
                                    applications.
                                </li>
                                <li><span style={{fontWeight: 'bold'}}>PL/SQL Programming:</span>Developed and
                                    maintained complex packages and procedures using PL/SQL, improving the functionality
                                    and performance of the databases. Implemented automated processes to streamline data
                                    handling and reduce manual intervention.
                                </li>
                                <li><span style={{fontWeight: 'bold'}}>Data Backup and Recovery:</span>Implemented and
                                    managed robust backup and restoration processes, ensuring the continuous
                                    availability and integrity of critical data. Regularly tested recovery procedures to
                                    minimize downtime in case of failures.
                                </li>
                                <li><span style={{fontWeight: 'bold'}}>GIS Integration and Data Conversion:</span>Worked
                                    extensively with GIS-based systems, integrating spatial data with attribute data to
                                    enhance the accuracy and efficiency of power transmission and distribution
                                    management. Conducted data conversion tasks in ArcGIS, transforming spatial data
                                    formats to meet project requirements and ensure seamless integration with other
                                    systems.
                                </li>
                                <li><span style={{fontWeight: 'bold'}}>Performance Tuning:</span>Conducted performance
                                    tuning of databases, identifying and resolving bottlenecks to improve query
                                    performance and system responsiveness.
                                </li>
                            </ol>
                            <h2 className={styles.bodyContext}>Projects Involved at EDSAB:</h2>
                            <h2 className={styles.bodyContext}><span className={styles.projectName}>NAB:</span> Involved
                                in the NAB project, where I developed over 80 complex procedures in the Oracle database.
                                Additionally, I created nearly 100 reports using Stimulsoft, significantly enhancing the
                                reporting capabilities of the project.
                            </h2>
                            {NabTechData.map((item) => (
                                <ExperienceTech techName={item.techName} key={item.key}/>
                            ))}
                            <h2 className={styles.bodyContext}><span
                                className={styles.projectName}>SEPAD:</span> Contributed to the SEPAD project, where I
                                developed and optimized several packages, performed database tuning, and worked
                                extensively with ArcGIS software. This included data conversion tasks to align spatial
                                data with project needs. I also provided direct support to the software, maintaining
                                regular communication with the client to address their needs and ensure the smooth
                                operation of the system.</h2>
                            {SepadTechData.map((item) => (
                                <ExperienceTech techName={item.techName} key={item.key}/>
                            ))}
                            <div className={styles.seperator}></div>
                            <li className={styles.headerLi}>Technologies and Tools:</li>
                            <ol className={styles.frontEndOl}>
                                <li><span
                                    style={{fontWeight: 'bold'}}>Database:</span> Oracle Database, PL/SQL
                                </li>
                                <li><span
                                    style={{fontWeight: 'bold'}}>GIS Systems:</span> Integration and Data Conversion with ArcGIS
                                </li>
                                <li><span
                                    style={{fontWeight: 'bold'}}>Reporting Tools:</span> Stimulsoft
                                </li>
                            </ol>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkExperience;