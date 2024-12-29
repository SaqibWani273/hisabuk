// components/Hero.jsx
import React from 'react';
import Button from './Button';
const Hero = () => (


    <section className="md:absolute relative  top-1/4 md:top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pb-8 ">
        {/* <section className="absolute left-0 right-0 margin-auto top-8  text-center  left-1/2  "> */}
        <h1 className="text-xl md:text-4xl font-bold text-blue-800 md:mb-4 ">
            Welcome to Hisabuk
        </h1>
        <h1 className="text-md md:text-3xl font-semibold text-blue-800 mb-4 px-16 md:px-0">
            Track your deeds & reflect on your actions every day
        </h1>

        <p className='hidden md:block mx-16 text-sm font-semibold text-blue-900 text-center md:mb-16'>With Hisabuk, you can hold yourself accountable to be
            the best version of yourself, one deed at a time. </p>


        <Button text="Get Started Now" />

    </section>


);
const Div = () => (
    <div>

    </div>
);
export default Hero;
