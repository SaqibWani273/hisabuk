import React from 'react';
import categories from "../../assets/images/categories1.svg";
import track from "../../assets/images/track.svg";
import improve from "../../assets/images/improve.svg";
import inspired from "../../assets/images/inspired1.jpg";
import reward from "../../assets/images/inspired2.jpg";
import Button from '../Button';


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
    <section className=" py-16 md:px-0 px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">How Hisabuk Works</h2>
        <div >
            {/* steps */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                {steps.map((step) => (
                    <div key={step.title} className="bg-white p-8 drop-shadow-md rounded-lg shadow-lg md:shadow-md">

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
                    src="https://www.youtube.com/embed/IB_M5lfJDzI"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>


            {/* stay inspired & stay  Accountable */}


            <div >

                <h2 className="text-xl md:text-4xl font-bold text-center text-blue-800 mb-8">Stay Inspired & Stay Accountable</h2>
                {stayInspired.map((inspired, index) => (
                    <div key={inspired.title} className="flex container mx-auto grid grid-cols-3 my-8 gap-2 md:gap-8 animate-slide-in pr-8 md:pr-0">
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
        <div className={`flex flex-col text-left justify-center pl-4  md:pl-${pl} md:pr-${pr} col-span-2 md:col-span-1`}  >
            {/* {
                inspired.title && <h3 className=" text-2xl font-bold  mb-2">{inspired.title}</h3>
            } */}
            <p >{inspired.description}</p>
            {

                inspired.btnText && <div className='mt-8 h-12'>
                    {/* <button className='md:px-6 px-3 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700' >
                        Get Started Now
                         </button> */}
                    <Button text={inspired.btnText} />
                </div>
            }


        </div>
    )
}
function StayInspiredImage({ imgSrc }) {
    return (
        <div className='bg-grey-200 py-8  col-span-1 flex justify-center  md:col-span-2  '>
            {/* <center className='mb-5 '> */}
            <img src={`${imgSrc}`} alt="Stay Inspired" className='h-32 md:h-72 w-auto md:w-4/5 md:object-cover' />
            {/* </center> */}
        </div>
    )
}

export default HowItWorks;
