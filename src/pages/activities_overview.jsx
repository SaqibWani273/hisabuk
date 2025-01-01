import React, { use } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import doneSvg from '../assets/images/done.svg';
import LocalStorage from '../data/local_storage';
import {
  ActivityCategory,
  ScheduleDuration,
} from '../data/create_activity_data';
import Navbar from '../components/Navbar';
import rewardButtonIcon from '../assets/images/reward.svg';
import penaltyButtonIcon from '../assets/images/cancelSvg.svg';

const ActivitiesOverview = () => {
  const schedules = {
    DailySchedule: [],
    WeeklySchedule: [],
    MonthlySchedule: [],
  };
  const [currentSchedules, setCurrentSchedules] = React.useState(schedules);
  //
  const location = useLocation();
  const [showToast, setShowToast] = React.useState(
    location.state?.showToast || false
  );
  useEffect(() => {
    let dailySchedule = LocalStorage.getSchedule(ScheduleDuration.Daily);
    // schedules.WeeklySchedule = LocalStorage.getSchedule(ScheduleDuration.Weekly);
    // schedules.MonthlySchedule = LocalStorage.getSchedule(ScheduleDuration.Monthly);
    if (dailySchedule !== null) {
      schedules.DailySchedule = dailySchedule;
      setCurrentSchedules(schedules);
    }
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  });
  const tableRows = currentSchedules.DailySchedule.map((sched) => [
    {
      negAction: ActionButton({
        text:
          sched.actCat == ActivityCategory.Prohibited ||
          sched.actCat == ActivityCategory.Addiction_Avoidance
            ? 'Not Avoided'
            : 'Not Completed',
        isRewardButton: false,
      }),
      id: sched.id,
      actName: sched.name,
      actCat: sched.actCat,
      rewardPoints: sched.rewardPoints,
      penaltyPoints: sched.penaltyPoints,
      posAction: ActionButton({
        text:
          sched.actCat == ActivityCategory.Prohibited ||
          sched.actCat == ActivityCategory.Addiction_Avoidance
            ? 'Avoided'
            : 'Completed',
        isRewardButton: true,
      }),
    },
  ]);
  return (
    <>
      {showToast && (
        <div className=' flex items-center fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50'>
          <img src={doneSvg} alt='' className='w-5 h-5 ' />
          <div class='ps-4 text-sm font-normal'>Schedule Set successfully.</div>
        </div>
      )}
      <Navbar />
      <TableWithSearch tableRows={tableRows} />
    </>
  );
};

const TABLE_HEAD = [
  {
    head: 'Action',
  },
  {
    head: 'Id',
  },
  {
    head: 'Activity Name',
  },
  {
    head: 'Category',
  },
  {
    head: 'Reward Points',
    icon: (
      <span role='img' aria-label='trophy'>
        🏆
      </span>
    ),
  },
  {
    head: 'Penalty Points',
    icon: (
      <span role='img' aria-label='warning'>
        ⚠️
      </span>
    ),
  },
  {
    head: 'Action',
  },
];

// const tableRows = [
//   {
//     number: '#MS-415646',
//     customer: 'Viking Burrito',
//     amount: '$14,000',
//     issued: '31 Jan 2024',
//     date: '31 Feb 2024',
//   },
//   {
//     number: '#RV-126749',
//     customer: 'Stone Tech Zone',
//     amount: '$3,000',
//     issued: '24 Jan 2024',
//     date: '24 Feb 2024',
//   },
//   {
//     number: '#QW-103578',
//     customer: 'Fiber Notion',
//     amount: '$20,000',
//     issued: '12 Jan 2024',
//     date: '12 Feb 2024',
//   },
//   {
//     number: '#MS-415688',
//     customer: 'Blue Bird',
//     amount: '$5,600',
//     issued: '10 Jan 2024',
//     date: '10 Feb 2024',
//   },
// ];

export function TableWithSearch({ tableRows }) {
  return (
    <div className='h-full w-full overflow-scroll bg-white shadow-md rounded-lg'>
      {/* <div className='mb-2 p-4 border-b border-gray-300'>
        <div className='w-full md:w-96'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search Invoice'
              className='w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
        </div>
      </div> */}
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            {TABLE_HEAD.map(({ head, icon }) => (
              <th key={head} className='border-b border-gray-300 p-4'>
                <div className='flex items-center gap-1'>
                  {icon}
                  <span className='font-bold text-blue-gray-700'>{head}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map(
            (
              {
                negAction,
                id,
                actName,
                actCat,
                rewardPoints,
                penaltyPoints,
                posAction,
              },
              index
            ) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-gray-300';

              return (
                <tr key={id}>
                  <td className={classes}>
                    {negAction}
                    {/* <div className='flex items-center gap-1'>
                      <input type='checkbox' className='form-checkbox' />
                      <span className='font-bold text-blue-gray-700'>
                        {number}
                      </span>
                    </div> */}
                  </td>
                  <td className={classes}>
                    <span className='font-normal text-gray-600'>{id}</span>
                  </td>
                  <td className={classes}>
                    <span className='font-normal text-gray-600'>{actName}</span>
                  </td>
                  <td className={classes}>
                    <span className='font-normal text-gray-600'>{actCat}</span>
                  </td>
                  <td className={classes}>
                    <span className='font-normal text-gray-600'>
                      {rewardPoints}
                    </span>
                  </td>
                  <td className={classes}>
                    <span className='font-normal text-gray-600'>
                      {penaltyPoints}
                    </span>
                  </td>
                  <td className={classes}>
                    {posAction}
                    {/* <span className='font-normal text-gray-600'>{date}</span> */}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
const ActionButton = ({ text, isRewardButton, onClick }) => {
  return (
    <button
      className={`px-2 py-1 md:px-6 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
        isRewardButton && 'flex items-center'
      }`}
      onClick={onClick}
    >
      {isRewardButton && <span className='mr-2'>{text.icon}</span>}
      {text}
    </button>
  );
};
export default ActivitiesOverview;
