// components/About.jsx
import React from 'react';
import logo1 from '../assets/images/hisabuk_logo1.svg';
const WhatIsHisabuk = () => (
    <section className="bg-white px-10 text-center">
        {/* header section */}
        <h2 className="text-4xl font-bold text-blue-800 mb-4">What is Hisabuk</h2>
        {/* content section */}
        <div className="text-gray-600 mb-8 text-xl font-medium">
            <p className='font-semibold'>Hazrat Umar ibn Al-Khattab (RA) says:</p>

            <p className="text-2xl md:text-3xl font-bold  my-4 leading-relaxed" style={{ direction: 'rtl', textAlign: 'center', fontFamily: 'Lateef, serif' }}> {/* Added RTL support and font family */}
                حَاسِبُوا أَنفُسَكُمْ قَبْلَ أَن تُحَاسَبُوا وَزِنُوا أَنفُسَكُمْ قَبْلَ أَن تُوزَنُوا
            </p>
            <p className="italic font-semibold ">
                "Take account of yourselves before you are taken to account
            </p>

            <p className="italic font-semibold ">
                and weigh your deeds before they are weighed for you."
            </p>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-4 px-10"> {/* Added grid layout */}
            <center className='mb-20'>{/* Image container */}
                <img src={logo1} alt="Open Book" height={"400px"} width={"400px"} />
            </center>
            <div className=" text-left">
                <h3 className='text-xl font-semibold text-blue-800 mb-1'>What is Hisabuk</h3>
                <p className="text-lg">
                    Hisabuk is a simple tool to help you track your daily actions, habits, and progress.
                </p>
                <br />
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-blue-800 mb-1">Purpose</h3>
                    <p className="text-lg ">
                        It allows you to reflect on your activities and hold yourself accountable.
                    </p>

                </div>
                <br />
                <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-1">Who is it for?</h3>
                    <p className="text-lg ">
                        Anyone who wants to improve their daily routine and keep track of his progress!
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default WhatIsHisabuk;
