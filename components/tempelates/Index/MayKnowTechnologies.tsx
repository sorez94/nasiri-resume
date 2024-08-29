import React from 'react';
import styles from "@/styles/MayKnowTechnologies.module.css";
import TechComponent, {ITechComponent} from "@/components/modules/Technologies/TechComponent";
import {mayKnowTechnologiesData} from "@/components/modules/MayKnowTechnologies/MayKnowTechnologiesData";

const MayKnowTechnologies = () => {
    return (
        <section id="familiar" className={styles.section}>
            <h2>Familiar With</h2>
            <div className={styles.mayKnow}>
                {mayKnowTechnologiesData.map((techs: ITechComponent) => (
                    <TechComponent key={techs.key} techName={techs.techName} imageAlt={techs.imageAlt}
                                   imageSrc={techs.imageSrc}/>
                ))}
            </div>
        </section>
    );
};

export default MayKnowTechnologies;