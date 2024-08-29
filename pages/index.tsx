import React from 'react';
import About from "@/components/tempelates/Index/About";
import 'sweetalert2/src/sweetalert2.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from "@/components/tempelates/Index/Technologies";
import Navbar from "@/components/modules/Navbar/Navbar";
import MayKnowTechnologies from "@/components/tempelates/Index/MayKnowTechnologies";
import WorkExperience from "@/components/tempelates/Index/WorkExperience";
import Education from "@/components/tempelates/Index/Education";
import Testimonial from "@/components/tempelates/Index/Testimonial";
import Footer from "@/components/tempelates/Index/Footer";
import ContactMe from "@/components/tempelates/Index/ContactMe";
import Menu from '@/components/modules/Menu/Menu';
import ScrollAnimation from 'react-animate-on-scroll';


const Index = (props: any) => {
    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            color: "white",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#151515"
        }}>
            {/*<Navbar/>*/}
            <Menu />
            <ScrollAnimation animateIn='fadeInDown'>
                <About/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInDown'>
                <Technologies/>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <MayKnowTechnologies/>
            </ScrollAnimation>
            <ScrollAnimation  animateIn='zoomIn'>
                <WorkExperience />
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInDown">
                <Education />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <Testimonial />
            </ScrollAnimation>
            <ScrollAnimation animateIn='pulse'
                             duration={2}>
                <ContactMe/>
            </ScrollAnimation>
            <Footer/>
            {/*<Menu/>*/}
            {/*<About/>*/}
            {/*<Technologies/>*/}
            {/*<MayKnowTechnologies/>*/}
            {/*<WorkExperience/>*/}
            {/*<Education/>*/}
            {/*<Testimonial/>*/}
            {/*<ContactMe/>*/}
            {/*<Footer/>*/}
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 60 * 60 * 12,
    }
}

export default Index;
