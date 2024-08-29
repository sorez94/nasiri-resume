import React from 'react';
import styles from "@/styles/WorkExperience.module.css";

export interface IExperienceTechProps {
    techName: string
    key: number
}

const ExperienceTech = (props: IExperienceTechProps) => {
    const {techName, key} = props;
    return (
        <div key={key} className={styles.experienceTechComponent}>
            {techName}
        </div>
    );
};

export default ExperienceTech;