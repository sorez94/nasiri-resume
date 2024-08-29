import React, {useState} from 'react';
import styles from "@/styles/Technologies.module.css";
import Image from "next/image";

export interface ITechComponent {
    key: number,
    imageAlt: string,
    techName: string
    imageSrc: string
}

const TechComponent = (props: ITechComponent) => {
    const {imageAlt, techName, imageSrc} = props;

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <div className={styles.techComponentDiv}>
            <div className={styles.techComponent}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                {isHovering ? <Image src={`/technologies/${imageSrc}.svg`} alt={imageAlt}
                                     className={styles.techImage}
                                     width={62}
                                     height={62}/> :
                    <Image src={`/technologies/${imageSrc}.svg`} alt={imageAlt}
                           className={styles.techImage}
                           width={52}
                           height={52}/>}
                    <span className={styles.techComponentText}>{techName}</span>
            </div>
        </div>
    );
};

export default TechComponent;