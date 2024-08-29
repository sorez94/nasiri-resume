import React, {useEffect, useState} from 'react';
import styles from "@/styles/Testimonail.module.css";
import {testimonialComponentData} from "@/components/modules/Testimonial/testimonialComponentData";
import TestimonialComponent from "@/components/modules/Testimonial/TestimonialComponent";
import {useMediaQuery} from "react-responsive";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import {Carousel} from 'react-responsive-carousel';
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1400 },
    //         items: 3,
    //         slidesToSlide: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1400, min: 995 },
    //         items: 2,
    //         slidesToSlide: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 995, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1
    //     }
    // };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 780 },
            items: 2,  // Consider showing 2 items on tablet for better visibility
        },
        mobile: {
            breakpoint: { max: 780, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <section id="work" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.testimonial}> TESTIMONIAL</div>
                    <div className={styles.words}> Words About Colleagues</div>
                </div>
            </section>
            <section className={styles.wordsDiv}>
                <Carousel
                    responsive={responsive}
                    ssr
                    infinite={false}
                    containerClass="first-carousel-container container"
                >
                    <div style={{display: "flex", justifyContent: "center"}}>
                            <div className={styles.contentDiv}>
                                <Link target='_blank' href={`${testimonialComponentData[0].linkedin}`}>
                                    <Image src={`/colleagues-profile/${testimonialComponentData[0].profile}.jpeg`}
                                           alt='mostafa'
                                           className={styles.profile}
                                           width={100}
                                           height={100}/>
                                </Link>
                                <div className={styles.borderDiv}>
                                    {testimonialComponentData[0].description}
                                    <div className={styles.colleagueName}>
                                        <span className={styles.dashStyle}>&#8212;</span>
                                        {testimonialComponentData[0].colleagueName}
                                    </div>
                                    <div className={styles.colleaguePosition}>
                                        {testimonialComponentData[0].colleaguePosition}
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                            <div className={styles.contentDiv}>
                                <Link target='_blank' href={`${testimonialComponentData[1].linkedin}`}>
                                    <Image src={`/colleagues-profile/${testimonialComponentData[1].profile}.jpeg`}
                                           alt='mostafa'
                                           className={styles.profile}
                                           width={100}
                                           height={100}/>
                                </Link>
                                <div className={styles.borderDiv}>
                                    {testimonialComponentData[1].description}
                                    <div className={styles.colleagueName}>
                                        <span className={styles.dashStyle}>&#8212;</span>
                                        {testimonialComponentData[1].colleagueName}
                                    </div>
                                    <div className={styles.colleaguePosition}>
                                        {testimonialComponentData[1].colleaguePosition}
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                            <div className={styles.contentDiv}>
                                <Link target='_blank' href={`${testimonialComponentData[2].linkedin}`}>
                                    <Image src={`/colleagues-profile/${testimonialComponentData[2].profile}.jpeg`}
                                           alt='mostafa'
                                           className={styles.profile}
                                           width={100}
                                           height={100}/>
                                </Link>
                                <div className={styles.borderDiv}>
                                    {testimonialComponentData[2].description}
                                    <div className={styles.colleagueName}>
                                        <span className={styles.dashStyle}>&#8212;</span>
                                        {testimonialComponentData[2].colleagueName}
                                    </div>
                                    <div className={styles.colleaguePosition}>
                                        {testimonialComponentData[2].colleaguePosition}
                                    </div>
                                </div>
                            </div>
                    </div>
                </Carousel>
                {/*{testimonialComponentData.map((item) => (*/}
                {/*    <TestimonialComponent linkedin={item.linkedin} profile={item.profile} description={item.description}*/}
                {/*                          colleagueName={item.colleagueName} colleaguePosition={item.colleaguePosition}*/}
                {/*                          key={item.key}/>*/}
                {/*))}*/}
            </section>
        </>
    );
};

export default Testimonial;