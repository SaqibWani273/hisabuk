import React from 'react';
import categories from "../assets/images/categories1.svg";
import track from "../assets/images/track.svg";
import improve from "../assets/images/improve.svg";
import inspired from "../assets/images/inspired1.jpg";
import reward from "../assets/images/inspired2.jpg";
import Button from './Button';


const steps = [
    {
        image: categories,
        title: 'Define Your Activities',
        description: 'Categorize daily actions into essential, important, recommended, or to be avoided.',
    },
    {
        image: track,
        title: 'Track Your Day',
        description: 'Log your actions easily at the end of the day & see your progress at a glance.',
    },
    {
        image: improve,
        title: 'Reflect & Improve',
        description: 'Gain insights from the analytical graphs on where you excel & where you can grow.',
    },
];
const stayInspired = [{
    title: 'Stay Inspired & Stay Accountable',
    image: inspired,
    description: 'Earn reward for your consistency, avoid nrgative patterns & build meaningful daily routine.\nWith Hisabuk every small step brings you closer to the ideal version of yourself'
},
{
    // title: 'Stay Inspired & Stay Accountable',
    image: reward,
    description: "Whether it's prayers, good deeds, or avoiding harmful habits, let’s make every day count",
    btnText: 'Get Started Now'
}]

const HowItWorks = () => (
    <section className=" py-16">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">How Hisabuk Works</h2>
        <div >
            {/* steps */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div key={step.title} className="bg-white p-8 rounded-lg shadow-md">

                        <center className='mb-5'>

                            <img src={`${step.image}`} alt="Open Book" height={"100px"} width={"100px"} />
                        </center>


                        <h3 className="text-xl font-bold  mb-2">{step.title}</h3>
                        <p >{step.description}</p>
                    </div>
                ))}
            </div>
            {/* video of how it works */}
            <div className='flex justify-center my-16'>
                {/* <video class="w-1/2 h-auto max-w-full" controls>
                    <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <iframe
                    width="560"
                    height="315"
                    // https://youtu.be/?si=
                    src="https://www.youtube.com/embed/Hfk2IXRolP0"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>


            {/* stay inspired & stay  Accountable */}


            <div >
                {stayInspired.map((inspired, index) => (
                    <div key={inspired.title} className="flex container mx-auto grid grid-cols-3 my-8 gap-8 animate-slide-in">
                        {
                            index === 0 ? (<>
                                {StayInspiredImage({ imgSrc: inspired.image })}
                                {StayInspiredInfo({ inspired, pl: 0, pr: 32 })}</>) : (<>

                                    {StayInspiredInfo({ inspired, pl: 32, pr: 0 })}
                                    {StayInspiredImage({ imgSrc: inspired.image })}

                                </>)
                        }

                    </div>
                ))}
            </div>

        </div>
    </section>
);
function StayInspiredInfo({ inspired, pl, pr }) {
    return (
        <div className="flex flex-col text-left justify-center  " style={{ paddingLeft: `${pl}px`, paddingRight: `${pr}px` }}>
            {
                inspired.title && <h3 className="text-2xl font-bold  mb-2">{inspired.title}</h3>
            }
            <p >{inspired.description}</p>
            {

                inspired.btnText && <span className='mt-8'><Button text="Get Started Now" /></span>
            }


        </div>
    )
}
function StayInspiredImage({ imgSrc }) {
    return (
        <div className='bg-grey-200 py-8 pl-8   col-span-2  '>
            {/* <center className='mb-5 '> */}
            <img src={`${imgSrc}`} alt="Stay Inspired" className='h-72 w-4/5 object-cover' />
            {/* </center> */}
        </div>
    )
}

export default HowItWorks;
