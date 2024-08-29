import React from 'react';
import styles from "@/styles/TestimonialComponent.module.css";
import Image from "next/image";
import Link from "next/link";

export interface ITestimonialComponentData {
    profile: string,
    description: string,
    colleagueName: string,
    colleaguePosition: string,
    key: number,
    linkedin: string
}

const TestimonialComponent = (props: ITestimonialComponentData) => {
    const {key, description, profile, colleagueName, colleaguePosition, linkedin} = props;
    console.log(linkedin)
    return (
        <div className="slide">
            <div className={styles.contentDiv}>
                <Link target='_blank' href={`${linkedin}`}>
                    <Image src={`/colleagues-profile/${profile}.png`} alt='mostafa'
                           className={styles.profile}
                           width={100}
                           height={100}/>
                </Link>
                <div className={styles.borderDiv}>
                    {description}
                    <div className={styles.colleagueName}>
                        <span className={styles.dashStyle}>&#8212;</span>
                        {colleagueName}
                    </div>
                    <div className={styles.colleaguePosition}>
                        {colleaguePosition}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialComponent;