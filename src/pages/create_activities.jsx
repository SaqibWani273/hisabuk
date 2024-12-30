
import React, { use } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dailySvg from '../assets/images/daily.svg';
import weeklySvg from '../assets/images/weekly.svg';
import monthlySvg from '../assets/images/monthly.svg';
import chooseTemplate from '../assets/images/choose_template.svg';
import compulsorySvg from '../assets/images/compulsory.svg';
import prohibitedSvg from '../assets/images/prohibited.svg';
import importantSvg from '../assets/images/important.svg';
import recommendedSvg from '../assets/images/recommended.svg';
import addictionAvoidanceSvg from '../assets/images/addiction.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { div } from 'motion/react-client';

// Enum for ActivityCategory
const ActivityCategory = {
    Compulsory: 'Compulsory',
    Prohibited: 'Prohibited',
    Important: 'Important',
    Recommended: 'Recommended',
    Addiction_Avoidance: 'Addiction Avoidance',
};

// Class for Activity
class Activity {
    constructor(name, actCat, rewardPoints, penaltyPoints) {
        this.name = name; // String
        this.actCat = actCat; // ActivityCategory
        this.rewardPoints = rewardPoints; // Number
        this.penaltyPoints = penaltyPoints; // Number
    }
}


const activity1 = {
    id: 1,
    name: 'Prayer Five Times',
    category: 'Compulsory',
    rewardPoints: 10,
    punishmentPoints: -50,
};
const activity2 = {
    id: 2,
    name: 'Prayer Five Times',
    category: 'Compulsory',
    rewardPoints: 10,
    punishmentPoints: -50,
};
const CreateActivities = () => {
    let acts = [];
    const [duration, setDuration] = useState('');
    const [addActivity, setAddActivity] = useState(false);
    const [activities, setActivities] = useState(acts);
    const [showCategories, setShowCategories] = useState(false);


    return <div>
        <Navbar />
        <div className='pt-8 pb-16'>

            <MainContent showCategories={showCategories} activities={activities} duration={duration} addActivity={addActivity} onSelectDuration={(d) => { setDuration(d); setAddActivity(true) }} setShowCategories={setShowCategories} />

        </div>
        <Footer />

    </div>
};
function MainContent(props) {
    if (props.duration === '') {
        return <SelectDuration onSelectDuration={props.onSelectDuration} />
    }
    else if (props.showCategories) {
        return <SelectCategories />
    }
    else if (props.addActivity) {
        return <AddActivity duration={props.duration} activities={props.activities} setShowCategories={props.setShowCategories} />
    }
}
function SelectDuration({ onSelectDuration }) {
    const durations = [
        {
            name: "Daily",
            svg: dailySvg,

        },
        {
            name: "Weekly",
            svg: weeklySvg,

        },
        {
            name: "Monthly",
            svg: monthlySvg,

        },
    ]
    return <div>

        <h2 className='text-2xl md:text-3xl flex justify-center pt-10 font-bold text-blue-800'>Select Activity Duaration</h2>
        <div className="grid md:grid-cols-3 place-items-center py-16 justify-center items-center ">
            {
                durations.map((duration, index) => (
                    <motion.section
                        id="about"
                        // className="py-16 px-6 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div onClick={() => onSelectDuration(duration.name)} key={index} className="bg-blue-300 p-4 rounded-md md:w-70 md:h-70 w-60 h-60 flex items-center justify-center space-x-4 my-8">
                            <img src={duration.svg} alt={duration.name} className="w-12 h-12 mr-4" />
                            <h3 className="text-lg font-semibold">{duration.name}</h3>
                        </div>
                    </motion.section>
                ))
            }</div>
    </div>
}
function AddActivity({ duration, activities, setShowCategories }) {
    return <div>
        <motion.section
            id="about"
            // className="py-16 px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <h2 className='text-2xl md:text-3xl flex justify-center pb-8 font-bold text-blue-800'>{duration} Activity Schedule</h2>
            {
                activities.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} index={index} />
                ))}
            {/*  Add First Activity */}
            <div className="mb-8">
                <div
                    onClick={() => setShowCategories(true)}
                    className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 w-60  mx-auto cursor-pointer hover:shadow-2xl hover:scale-105 transition transform"
                >
                    <div className="text-5xl text-blue-600 mb-4">+</div>
                    <p className="text-gray-800 font-semibold">{activities.length === 0 ? 'Add First Activity' : 'Add Another Activity'}</p>
                </div>
            </div>
            {
                activities.length == 0 && <div>

                    {/* OR Divider */}
                    <p className="text-gray-600 font-medium text-lg mb-8 flex justify-center">OR</p>

                    {/* Choose from Templates */}
                    <div>
                        <div
                            className="flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-lg p-8 md:w-96 w-80 mx-auto cursor-pointer hover:shadow-2xl hover:scale-105 transition transform"
                        >
                            <img
                                src={chooseTemplate}
                                alt="template"
                                className="w-16 h-16 mb-4"
                            />
                            <p className="text-gray-800 font-semibold">Choose From Ready-made Templates</p>
                        </div>
                    </div>
                </div>
            }
        </motion.section>
    </div>
}
const ActivityCard = ({ activity, index }) => {
    return (
        <div className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-lg w-full md:w-1/2 mx-auto my-4">
            {/* Left Section */}
            <div className="text-blue-800 font-bold text-lg pr-4">
                <p>Activity #{activity.id}</p>
            </div>

            {/* Right Section */}
            <div className="flex-grow space-y-4">
                <div className="flex justify-between">
                    <p className=" font-medium">Activity Name</p>
                    <p className="font-semibold text-gray-800">{activity.name}</p>
                </div>
                <div className="flex justify-between">
                    <p className=" font-medium">Activity Category</p>
                    <p className="font-semibold text-gray-800">{activity.category}</p>
                </div>
                <div className="flex justify-between">
                    <p className=" font-medium">Reward Points</p>
                    <p className="font-semibold text-green-600 flex items-center">
                        +{activity.rewardPoints}
                        <span className="ml-2">🏆</span>
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className=" font-medium">Punishment Points</p>
                    <p className="font-semibold text-red-600 flex items-center">
                        {activity.punishmentPoints}
                        <span className="ml-2">⚠️</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
function SelectCategories() {
    class Category {
        constructor(name, imgSvg, description, bgColor) {
            this.name = name;
            this.imgSvg = imgSvg;
            this.description = description;
            this.bgColor = bgColor;
        }
    }
    const categories = [
        new Category(ActivityCategory.Compulsory, compulsorySvg, 'Activities that must Strictly be done,e.g. Five times prayer', 'bg-blue-300'),
        new Category(ActivityCategory.Prohibited, prohibitedSvg, 'Activities that must Strictly be prohibited e.g. Sleeping late', 'bg-red-300'),
        new Category(ActivityCategory.Important, importantSvg, 'Activities that are important but not compulsory e.g. Following proper schedule', 'bg-green-300'),
        new Category(ActivityCategory.Recommended, recommendedSvg, 'Positive and helpful activities e.g. exercise', 'bg-yellow-300'),
        new Category(ActivityCategory.Addiction_Avoidance, addictionAvoidanceSvg, 'Activities that must Strictly be prohibited but are addicted to e.g. wasting time on social media', 'bg-pink-300'),
    ];
    const categories1 = [
        new Category({
            category: ActivityCategory.Compulsory,
            icon: compulsorySvg, // Make sure compulsorySvg is defined
            description: 'Activities that must Strictly be done, e.g. Five times prayer',
            bgColor: 'bg-green-300', // Changed to Green as per image
        }),
        new Category({
            category: ActivityCategory.Prohibited,
            icon: prohibitedSvg,
            description: 'Activities that must Strictly be prohibited e.g. Sleeping late',
            bgColor: 'bg-red-300',
        }),
        new Category({
            category: ActivityCategory.Important,
            icon: importantSvg,
            description: 'Activities that are important but not compulsory e.g. Following proper schedule',
            bgColor: 'bg-blue-500', // Slightly darker blue
        }),
        new Category({
            category: ActivityCategory.Recommended,
            icon: recommendedSvg,
            description: 'Positive and helpful activities e.g. exercise',
            bgColor: 'bg-sky-300', // Light blue
        }),
        new Category({
            category: ActivityCategory.Addiction_Avoidance,
            icon: addictionAvoidanceSvg,
            description: 'Activities that must Strictly be prohibited but are addicted to e.g. wasting time on social media',
            bgColor: 'bg-orange-500', // Or a darker red/orange
        }),
    ];
    return (
        <div className='grid  lg:grid-cols-3 md:grid-cols-2 md:px-8'>
            {categories.map((category, index) => (
                <div key={index} className={`flex flex-col justify-center items-center p-4 rounded-xl ${category.bgColor} mx-16 mb-16`}>

                    <img src={category.imgSvg} alt={category.name} className='w-16 h-16 mb-4' />
                    <p className=' font-semibold'>{category.description}</p>
                </div>

            ))}
        </div>
    );

}

export default CreateActivities;