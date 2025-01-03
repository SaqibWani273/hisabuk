// components/About.jsx
import React from 'react';
import logo1 from '../../assets/images/hisabuk_logo1.svg';
import { motion } from 'framer-motion';
const WhatIsHisabuk = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return <section className="bg-white px-10 text-center">
        {/* header section */}
        <h2 className="text-xl md:text-4xl font-bold text-blue-800 mb-4">What is Hisabuk</h2>
        {/* content section */}
        <div className="text-gray-600 mb-8 text-xl font-medium">
            <p className='font-semibold'>Hazrat Umar ibn Al-Khattab (RA) says:</p>

            <p className="text-2xl md:text-3xl font-bold   my-4 leading-relaxed" style={{ direction: 'rtl', textAlign: 'center', fontFamily: 'Amiri' }}> {/* Added RTL support and font family */}
                حَاسِبُوا أَنفُسَكُمْ قَبْلَ أَن تُحَاسَبُوا وَزِنُوا أَنفُسَكُمْ قَبْلَ أَن تُوزَنُوا
            </p>
            <p className="italic font-semibold ">
                "Take account of yourselves before you are taken to account and weigh your deeds before they are weighed for you."
            </p>

            {/* <p className="italic font-semibold ">
                and weigh your deeds before they are weighed for you."
            </p> */}
        </div>
        <motion.section
            id="about"
            // className="py-16 px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={sectionVariants}
        >
            <div className="grid md:grid-cols-2 justify-center items-center gap-4 md:px-10"> {/* Added grid layout */}
                <center className='mb-20'>{/* Image container */}
                    <img src={logo1} alt="Open Book" className='md:h-96 w-96' />
                </center>
                <div className=" text-left">
                    <h3 className='text-xl font-semibold text-blue-800 mb-1'>What is Hisabuk</h3>
                    <p className="md:text-lg text-md font-semibold">
                        Hisabuk is a simple tool to help you track your daily actions, habits, and progress.
                    </p>
                    <br />
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-blue-800 mb-1">Purpose</h3>
                        <p className="md:text-lg text-md font-semibold">
                            It allows you to reflect on your activities and hold yourself accountable.
                        </p>

                    </div>
                    <br />
                    <div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-1">Who is it for?</h3>
                        <p className="md:text-lg text-md font-semibold">
                            Anyone who wants to improve their daily routine and keep track of his progress!
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    </section>
};

export default WhatIsHisabuk;
