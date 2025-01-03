import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dailySvg from '../assets/images/daily.svg';
import weeklySvg from '../assets/images/weekly.svg';
import monthlySvg from '../assets/images/monthly.svg';
import chooseTemplate from '../assets/images/choose_template.svg';
import {
  Activity,
  categories,
  ScheduleDuration,
} from '../data/create_activity_data';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

import LocalStorage from '../data/local_storage';

const CreateActivities = () => {
  const [duration, setDuration] = useState('');
  const [showAddActivityPage, setShowAddActivityPage] = useState(false);
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();
  var location = useLocation();
  const returnedObject = location.state;
  const setDailySchedule = (name, activities) => {
    LocalStorage.addNewDailySchedule(name, activities);
    navigate('/activitiesOverview', {
      state: { activities: activities, showToast: true },
    });
  };
  if (returnedObject) {
    const { name, activities } = returnedObject;
    // setDailySchedule(name, activities);
    LocalStorage.addNewDailySchedule(name, activities);
    navigate('/activitiesOverview', {
      state: { activities: activities, showToast: true },
    });
  }

  return (
    <div>
      <Navbar />
      <div className='py-8'>
        <MainContent
          activities={activities}
          setActivities={setActivities}
          showAddActivityPage={showAddActivityPage}
          setShowAddActivityPage={(b) => setShowAddActivityPage(b)}
          duration={duration}
          onSelectDuration={(d) => {
            setDuration(d);
            setShowAddActivityPage(true);
          }}
          addNewActivity={(activity) => {
            activity.id = activities.length + 1;
            setActivities([...activities, activity]);
            setShowAddActivityPage(true);
          }}
        />
      </div>
      {/* Set the schedule */}
      {activities.length > 0 && (
        <div className='flex justify-center mb-16 '>
          <button
            onClick={() => setDailySchedule('Nulldldldlal', activities)}
            className=' px-4 py-2 bg-blue-600 text-white rounded-md  hover:bg-blue-900 hover:shadow-lg transition duration-300 ease-in-out'
          >
            Set as {duration} Schedule
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};
function MainContent(props) {
  if (props.duration === '') {
    return <SelectDuration onSelectDuration={props.onSelectDuration} />;
  } else if (props.showAddActivityPage) {
    return (
      <AddActivity
        duration={props.duration}
        activities={props.activities}
        setShowAddActivityPage={props.setShowAddActivityPage}
      />
    );
  } else {
    return <SelectCategories addNewActivity={props.addNewActivity} />;
  }
}
function SelectDuration({ onSelectDuration }) {
  const durations = [
    {
      name: ScheduleDuration.Daily,
      svg: dailySvg,
    },
    {
      name: ScheduleDuration.Weekly,
      svg: weeklySvg,
    },
    {
      name: ScheduleDuration.Monthly,
      svg: monthlySvg,
    },
  ];
  return (
    <div>
      <h2 className='text-2xl md:text-3xl flex justify-center pt-10 font-bold text-blue-800'>
        Select Activity Duaration
      </h2>
      <div className='grid md:grid-cols-3 place-items-center py-16 justify-center items-center '>
        {durations.map((duration, index) => (
          <motion.section
            id='about'
            // className="py-16 px-6 text-center"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              onClick={() => onSelectDuration(duration.name)}
              key={index}
              className='bg-blue-300 p-4 rounded-md md:w-70 md:h-70 w-60 h-60 flex items-center justify-center space-x-4 my-8'
            >
              <img
                src={duration.svg}
                alt={duration.name}
                className='w-12 h-12 mr-4'
              />
              <h3 className='text-lg font-semibold'>{duration.name}</h3>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
function AddActivity({ duration, activities, setShowAddActivityPage }) {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className='text-2xl md:text-3xl flex justify-center pb-8 font-bold text-blue-800'>
        {duration} Activity Schedule
      </h2>
      {activities.map((activity, index) => (
        <motion.section
          id='about'
          // className="py-16 px-6 text-center"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 + index * 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <ActivityCard key={index} activity={activity} index={index} />
        </motion.section>
      ))}
      {/*  Add First Activity */}
      <motion.section
        id='about'
        // className="py-16 px-6 text-center"
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className='mb-8'>
          <div
            onClick={() => setShowAddActivityPage(false)}
            className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 w-60  mx-auto cursor-pointer hover:shadow-2xl hover:scale-105 transition transform'
          >
            <div className='text-5xl text-blue-600 mb-4'>+</div>
            <p className='text-gray-800 font-semibold'>
              {activities.length === 0
                ? 'Add First Activity'
                : 'Add Another Activity'}
            </p>
          </div>
        </div>

        {activities.length === 0 && (
          <div>
            {/* OR Divider */}
            <p className='text-gray-600 font-medium text-lg mb-8 flex justify-center'>
              OR
            </p>

            {/* Choose from Templates */}

            <div
              onClick={() => navigate('/myTemplates', { state: true })}
              className='flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-lg p-8 md:w-96 w-80 mx-auto cursor-pointer hover:shadow-2xl hover:scale-105 transition transform'
            >
              <img
                src={chooseTemplate}
                alt='template'
                className='w-16 h-16 mb-4'
              />
              <p className='text-gray-800 font-semibold'>
                Choose From Ready-made Templates
              </p>
            </div>
          </div>
        )}
      </motion.section>
      {/* </motion.section> */}
    </div>
  );
}
const ActivityCard = ({ activity, index }) => {
  return (
    <div className='flex items-center space-x-4 p-6 bg-white shadow-lg rounded-lg w-full md:w-1/2 mx-auto my-4'>
      {/* Left Section */}
      <div className='text-blue-800 font-bold text-lg pr-4'>
        <p>Activity #{activity.id}</p>
      </div>

      {/* Right Section */}
      <div className='flex-grow space-y-4'>
        <div className='flex justify-between'>
          <p className=' font-medium'>Activity Name</p>
          <p className='font-semibold text-gray-800'>{activity.name}</p>
        </div>
        <div className='flex justify-between'>
          <p className=' font-medium'>Activity Category</p>
          <p className='font-semibold text-gray-800'>{activity.actCat}</p>
        </div>
        <div className='flex justify-between'>
          <p className=' font-medium'>Reward Points</p>
          <p className='font-semibold text-green-600 flex items-center'>
            +{activity.rewardPoints}
            <span className='ml-2'>🏆</span>
          </p>
        </div>
        <div className='flex justify-between'>
          <p className=' font-medium'>Punishment Points</p>
          <p className='font-semibold text-red-600 flex items-center'>
            {activity.penaltyPoints}
            <span className='ml-2'>⚠️</span>
          </p>
        </div>
      </div>
    </div>
  );
};
function SelectCategories({ addNewActivity }) {
  const [showModal, setShowModal] = useState(false);
  const [activityCategory, setActivityCategory] = useState('');

  const handleSubmit = (e) => {
    console.log('Form Submitted Successfully');
    console.log(e.target['activity-name'].value);
    addNewActivity(
      new Activity(
        1,
        e.target['activity-name'].value,
        activityCategory,
        e.target['reward-points'].value,
        e.target['punishment-points'].value
      )
    );
    setShowModal(false);
  };
  return (
    <div className='grid  lg:grid-cols-3 md:grid-cols-2 md:px-8'>
      {categories.map((category, index) => (
        <div
          onClick={() => {
            setShowModal(true);
            setActivityCategory(category.name);
          }}
          key={index}
          className={`flex flex-col justify-center items-center p-4 rounded-xl ${category.bgColor} mx-16 mb-16`}
        >
          <img
            src={category.imgSvg}
            alt={category.name}
            className='w-16 h-16 mb-4'
          />
          <p className=' font-semibold'>{category.description}</p>
        </div>
      ))}

      {showModal && (
        <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50'>
          <div className='relative p-4 w-full max-w-md h-auto'>
            {/* Modal content */}
            <div className='relative bg-gray-100 rounded-lg shadow'>
              {/* Modal header */}
              <div className='flex items-center justify-center p-5 border-b rounded-t bg-white'>
                <h3 className='text-2xl font-semibold text-blue-800'>
                  Add an Activity
                </h3>
              </div>
              {/* Modal body */}
              <div className='p-6'>
                <form className='space-y-6' onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor='activity-category'
                      className='block mb-2 text-sm font-medium text-gray-800'
                    >
                      Activity Category
                    </label>
                    <input
                      type='text'
                      placeholder={activityCategory}
                      className='w-full p-3 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='activity-name'
                      className='block mb-2 text-sm font-medium text-gray-800'
                    >
                      Activity name
                    </label>
                    <input
                      type='text'
                      id='activity-name'
                      name='activity-name'
                      placeholder='Activity name e.g. Read two book pages'
                      className='w-full p-3 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='reward-points'
                      className='block mb-2 text-sm font-medium text-gray-800'
                    >
                      Reward Points
                    </label>
                    <input
                      type='number'
                      id='reward-points'
                      name='reward-points'
                      defaultValue={10}
                      className='w-full p-3 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='punishment-points'
                      className='block mb-2 text-sm font-medium text-gray-800'
                    >
                      Punishment Points
                    </label>
                    <input
                      type='number'
                      id='punishment-points'
                      name='punishment-points'
                      defaultValue={-10}
                      className='w-full p-3 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                      required
                    />
                  </div>
                  <div className='flex justify-between space-x-8'>
                    <button
                      type='submit'
                      className='w-full px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg font-medium text-center'
                    >
                      Add
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      type='button'
                      className='w-full px-5 py-3 text-white bg-red-400 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 rounded-lg font-medium text-center'
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateActivities;
