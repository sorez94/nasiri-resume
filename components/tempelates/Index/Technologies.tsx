import React from 'react';
import styles from "@/styles/Technologies.module.css";
import TechComponent, {ITechComponent} from "@/components/modules/Technologies/TechComponent";
import {techComponentData} from "@/components/modules/Technologies/techComponentData";

const Technologies = () => {
    return (
        <>
            <section id="technologies" className={styles.section}>
                <h2>Languages And Technologies</h2>
                <div className={styles.technology}>
                    {techComponentData.map((techs: ITechComponent) => (
                        <TechComponent key={techs.key} techName={techs.techName} imageAlt={techs.imageAlt} imageSrc={techs.imageSrc}/>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Technologies;