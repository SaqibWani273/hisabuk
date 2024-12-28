import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIsHisabuk from '../components/WhatIsHisabuk';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import bgimage from '../assets/images/homepage_img5.png';
const myStyle = {
    backgroundImage:
        `url(${bgimage})`,
    backgroundSize: "contain",
    // backgroundSize: "cover",
    width: "100%",
    height: "768px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center"
};

const Homepage = () => (
    <>

        <div className='bg-homepageImg1 w-full h-[768px] bg-contain bg-no-repeat bg-top bg-center'>
            <Navbar />
            <Hero />
        </div>

        <WhatIsHisabuk />
        <HowItWorks />
        <Footer />
    </>
);
export default Homepage;
