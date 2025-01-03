import React, { useEffect, useState } from 'react';
import { ScheduleDuration } from '../data/create_activity_data';
import LocalStorage from '../data/local_storage';
import Navbar2 from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const MyTemplates = () => {
  const location = useLocation();
  const chooseTemplate = location.state;

  return (
    <>
      <Navbar2 />
      <DailyScheduleTemplates chooseTemplate={chooseTemplate} />
      <Footer />
    </>
  );
};
const DailyScheduleTemplates = ({ chooseTemplate }) => {
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTemplates(LocalStorage.getTemplates(ScheduleDuration.Daily));
  }, []);

  return (
    <div className='container mx-auto py-12 px-6'>
      <h1 className='text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600'>
        My Templates
      </h1>
      {templates.length === 0 ? (
        <div className='flex flex-col items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-20 w-20 text-gray-400 mb-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 8c-1.105 0-2 .895-2 2v4m0 0v4m0-4h4m-4 0H8m4-6a9 9 0 11-8.485 5.338'
            />
          </svg>
          <p className='text-center text-gray-500 text-lg'>
            No templates available. Create one to get started!
          </p>
        </div>
      ) : (
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {templates.reverse().map((template) => (
            <div
              onClick={() => {
                if (chooseTemplate) {
                  navigate('/createActivities', {
                    state: {
                      name: template.schName,
                      activities: template.activities,
                    },
                  });
                }
              }}
              key={template.id}
              className={`bg-gradient-to-r hover:from-blue-300 hover:to-blue-600 from-gray-100 to-gray-200 text-gray-800 shadow-md rounded-lg p-6 transition-transform duration-300 transform ${
                chooseTemplate ? 'hover:from-green-600 hover:to-green-700' : ''
              } hover:scale-105 hover:shadow-lg`}
            >
              <h2 className='text-2xl font-semibold mb-2 text-gray-700'>
                {template.schName}
              </h2>
              <p className='text-sm mb-1 text-gray-600'>
                <span className='font-semibold'>From:</span>{' '}
                {new Date(template.from).toLocaleDateString()}
              </p>
              <p className='text-sm mb-4 text-gray-600'>
                <span className='font-semibold'>To:</span>{' '}
                {template.to
                  ? new Date(template.to).toLocaleDateString()
                  : 'Ongoing'}
              </p>
              <h3 className='text-lg font-semibold mb-3 text-gray-700'>
                Activities:
              </h3>
              <ul className='space-y-3'>
                {template.activities.map((activity) => (
                  <li key={activity.id}>
                    <div className='bg-white border border-gray-200 p-4 rounded-lg shadow-sm'>
                      <p className='font-medium text-gray-800 text-lg'>
                        {activity.name}
                      </p>
                      <p className='text-sm text-gray-600'>
                        <span className='font-semibold'>Category:</span>{' '}
                        {activity.actCat}
                      </p>
                      <p className='text-sm text-gray-600'>
                        <span className='font-semibold'>Reward Points:</span>{' '}
                        {activity.rewardPoints}
                      </p>
                      <p className='text-sm text-gray-600'>
                        <span className='font-semibold'>Penalty Points:</span>{' '}
                        {activity.penaltyPoints}
                      </p>
                      <p className='text-sm text-gray-600'>
                        <span className='font-semibold'>Duration:</span>{' '}
                        {activity.duration}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MyTemplates;
