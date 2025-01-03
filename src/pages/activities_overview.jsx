// import React, { use } from 'react';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import doneSvg from '../assets/images/done.svg';
// import LocalStorage from '../data/local_storage';
// import {
//   ActivityCategory,
//   ScheduleDuration,
// } from '../data/create_activity_data';
// import Navbar from '../components/Navbar';
// import rewardButtonIcon from '../assets/images/completedSvg.svg';
// import penaltyButtonIcon from '../assets/images/cancelSvg.svg';

// const ActivitiesOverview = () => {
//   var schedules = {
//     DailySchedule: [],
//     WeeklySchedule: [],
//     MonthlySchedule: [],
//   };
//   const [currentSchedules, setCurrentSchedules] = React.useState(schedules);
//   //
//   const location = useLocation();
//   const [showToast, setShowToast] = React.useState(
//     location.state?.showToast || false
//   );
//   useEffect(() => {
//     let dailySchedule = LocalStorage.getSchedule(ScheduleDuration.Daily);
//     // schedules.WeeklySchedule = LocalStorage.getSchedule(ScheduleDuration.Weekly);
//     // schedules.MonthlySchedule = LocalStorage.getSchedule(ScheduleDuration.Monthly);
//     if (dailySchedule !== null) {
//       schedules.DailySchedule = dailySchedule;

//       setCurrentSchedules(schedules);
//     }
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   }, []);

//   return (
//     <>
//       {showToast && (
//         <div className=' flex items-center fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50'>
//           <img src={doneSvg} alt='' className='w-5 h-5 ' />
//           <div class='ps-4 text-sm font-normal'>Schedule Set successfully.</div>
//         </div>
//       )}
//       <Navbar />
//       <TableWithSearch currentSchedules={currentSchedules} />
//     </>
//   );
// };

// const TABLE_HEAD = [
//   {
//     head: 'Action',
//   },
//   {
//     head: 'Id',
//   },
//   {
//     head: 'Activity Name',
//   },
//   {
//     head: 'Category',
//   },
//   {
//     head: 'Reward Points',
//     icon: (
//       <span role='img' aria-label='trophy'>
//         🏆
//       </span>
//     ),
//   },
//   {
//     head: 'Penalty Points',
//     icon: (
//       <span role='img' aria-label='warning'>
//         ⚠️
//       </span>
//     ),
//   },
//   {
//     head: 'Action',
//   },
// ];

// export function TableWithSearch({ currentSchedules }) {
//   const tableRows = currentSchedules.DailySchedule.map((sched) => [
//     {
//       negAction: ActionButton({
//         text:
//           sched.actCat === ActivityCategory.Prohibited ||
//           sched.actCat === ActivityCategory.Addiction_Avoidance
//             ? 'Not Avoided'
//             : 'Not Completed',
//         isRewardButton: false,
//       }),
//       id: sched.id,
//       actName: sched.name,
//       actCat: sched.actCat,
//       rewardPoints: sched.rewardPoints,
//       penaltyPoints: sched.penaltyPoints,
//       posAction: ActionButton({
//         text:
//           sched.actCat === ActivityCategory.Prohibited ||
//           sched.actCat === ActivityCategory.Addiction_Avoidance
//             ? 'Avoided'
//             : 'Completed',
//         isRewardButton: true,
//       }),
//     },
//   ]);
//   return (
//     <div className='h-full  px-5  bg-white shadow-md rounded-lg'>
//       <table className='w-full  text-center  text-left'>
//         <thead>
//           <tr>
//             {TABLE_HEAD.map(({ head, icon }) => (
//               <th
//                 key={head}
//                 className='border-b border-gray-300 p-4 text-center'
//               >
//                 <div className='flex items-center justify-center gap-1'>
//                   {icon}
//                   <span className='font-bold text-blue-gray-700'>{head}</span>
//                 </div>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tableRows.map((index) => {
//             const isLast = index === tableRows.length - 1;
//             const classes = isLast ? 'p-4' : 'p-4 border-b border-gray-300';
//             console.log('index', index, 'tableRows', tableRows);
//             return index?.map(
//               ({
//                 negAction,
//                 id,
//                 actName,
//                 actCat,
//                 rewardPoints,
//                 penaltyPoints,
//                 posAction,
//               }) => {
//                 console.log('id', id);
//                 return (
//                   <tr key={id}>
//                     <td className={classes}>{negAction}</td>
//                     <td className={classes}>
//                       <span className='font-normal '>{id}</span>
//                     </td>

//                     <td className={classes}>
//                       <span className='font-normal '>{actName}</span>
//                     </td>
//                     <td className={classes}>
//                       <span className='font-normal '>{actCat}</span>
//                     </td>
//                     <td className={classes}>
//                       <span className='font-normal '>{rewardPoints}</span>
//                     </td>
//                     <td className={classes}>
//                       <span className='font-normal text-red-600'>
//                         {penaltyPoints}
//                       </span>
//                     </td>
//                     <td className={classes}>{posAction}</td>
//                   </tr>
//                 );
//               }
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// const ActionButton = ({ text, isRewardButton, onClick }) => {
//   return (
//     <button
//       className={` w-36 text-xs  md:py-2 ${
//         isRewardButton ? 'bg-green-700 ' : 'bg-blue-500 '
//       } text-white rounded-md ${
//         isRewardButton ? 'hover:bg-green-900' : 'hover:bg-red-800 '
//       }  ${'flex items-center justify-center gap-2'}`}
//       onClick={onClick}
//     >
//       {isRewardButton ? (
//         <img src={rewardButtonIcon} className='w-5 h-5' />
//       ) : (
//         <img src={penaltyButtonIcon} className='w-5 h-5' />
//       )}
//       {text}
//     </button>
//   );
// };
// export default ActivitiesOverview;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import doneSvg from '../assets/images/done.svg';
import rewardButtonIcon from '../assets/images/completedSvg.svg';
import penaltyButtonIcon from '../assets/images/cancelSvg.svg';
import LocalStorage from '../data/local_storage';
import {
  ActivityCategory,
  ScheduleDuration,
} from '../data/create_activity_data';
import Utils from '../utils/Utils';

const ActivitiesOverview = () => {
  const [currentSchedules, setCurrentSchedules] = useState({
    DailySchedule: [],
    WeeklySchedule: [],
    MonthlySchedule: [],
  });
  const location = useLocation();
  const [showToast, setShowToast] = useState(
    location.state?.showToast || false
  );

  useEffect(() => {
    const dailySchedule = LocalStorage.getCurrentSchedule(
      ScheduleDuration.Daily
    );
    if (dailySchedule) {
      setCurrentSchedules((prev) => ({
        ...prev,
        DailySchedule: dailySchedule,
      }));
    }

    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showToast && <Toast message='Schedule Set Successfully.' />}
      <Navbar />
      <div className='p-4 md:p-8'>
        <h1 className='text-md flex justify-center md:text-3xl font-semibold text-blue-800 mb-4 px-16 md:px-0'>
          Today's Activities Overview
        </h1>
        <ActivityTable
          activities={currentSchedules.DailySchedule?.unMarkedActivities}
          isUnMarked={true}
          onMarkActivity={(activity, isPositive) => {
            const updatedSchedule = LocalStorage.updateCurrentSchedule(
              ScheduleDuration.Daily,
              activity,
              isPositive
            );
            //isPositive is either true or false
            setCurrentSchedules((prev) => ({
              ...prev,
              DailySchedule: updatedSchedule,
            }));
          }}
        />
        <ActivityTable
          activities={currentSchedules.DailySchedule?.markedActivities}
          isUnMarked={false}
        />
        {/* <div className='px-56'>
          <p className='text-md  md:text-2xl font-semibold text-blue-800 mb-4 px-16 md:px-0'>
            Total Points Earned: {currentSchedules.DailySchedule?.totalPoints}
            <br />
          </p>
          <h2 className='text-md  md:text-2xl font-semibold text-blue-800 mb-4 px-16 md:px-0'>
            Summary:{' '}
          </h2>
          <p className='text-md  md:text-sm font-semibold text-blue-800 mb-4 bg-blue-300 text-white rounded-lg px-6 md:px-0'>
            <p>
              {Utils.getSummaryMessage(
                currentSchedules.DailySchedule?.totalPoints
              )}
            </p>
          </p>
        </div> */}
        <div className='px-4 md:px-56 '>
          <div className='bg-white shadow-lg rounded-lg p-6 mb-8'>
            <p className='text-2xl md:text-2xl font-bold text-blue-800 mb-4'>
              Total Points Earned:{' '}
              <span className='text-green-600'>
                {currentSchedules.DailySchedule?.totalPoints}
              </span>
            </p>
            <h2 className='text-xl md:text-2xl font-semibold text-blue-800 mb-4'>
              Summary:
            </h2>
            <div className='bg-blue-500 text-white rounded-lg p-6'>
              <p className='text-md md:text-lg font-semibold'>
                {Utils.getSummaryMessage(
                  currentSchedules.DailySchedule?.totalPoints
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Toast = ({ message }) => (
  <div className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center'>
    <img src={doneSvg} alt='Done' className='w-5 h-5' />
    <span className='ml-3'>{message}</span>
  </div>
);

const ActivityTable = ({ activities, isUnMarked, onMarkActivity }) => {
  const TABLE_HEADERS = [
    ...(isUnMarked == true ? [{ label: 'Action', align: 'center' }] : []),

    { label: 'Id' },
    { label: 'Activity Name' },
    { label: 'Category' },
    ...(isUnMarked == true
      ? [
          { label: 'Reward Points', icon: '🏆' },
          { label: 'Penalty Points', icon: '⚠️' },
        ]
      : [{ label: 'Points Earned' }]),

    { label: 'Action', align: 'center' },
  ];
  return (
    <div
      className={`overflow-auto rounded-lg shadow ${
        isUnMarked ? 'bg-white' : 'bg-gray-100 mx-56'
      } mb-8`}
    >
      <h2 className='text-lg font-bold text-center py-4'>
        {isUnMarked ? 'Pending ' : 'Marked '}Activities
      </h2>
      <table className='w-full text-sm text-left text-gray-600'>
        <thead className='bg-gray-100'>
          <tr>
            {TABLE_HEADERS.map(({ label, icon, align }) => (
              <th
                key={label}
                className={`px-4 py-2 font-bold text-gray-700 ${
                  align === 'center' ? 'text-center' : ''
                }`}
              >
                <div className='flex items-center justify-center gap-1'>
                  {icon && <span>{icon}</span>}
                  {label}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activities?.map((activity) => (
            <ActivityRow
              key={activity.id}
              activity={activity}
              isUnMarked={isUnMarked}
              onMarkActivity={onMarkActivity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ActivityRow = ({ activity, isUnMarked, onMarkActivity }) => {
  const { id, name, actCat } = activity;
  const isAvoidanceCategory =
    actCat === ActivityCategory.Prohibited ||
    actCat === ActivityCategory.Addiction_Avoidance;

  return (
    <tr className='border-b last:border-none text-center'>
      {isUnMarked && (
        <td
          className='px-4 py-2 text-center'
          onClick={() => onMarkActivity(activity, false)}
        >
          <ActionButton
            text={isAvoidanceCategory ? 'Not Avoided' : 'Not Completed'}
            isPositive={false}
          />
        </td>
      )}
      <td className='px-4 py-2'>{id}</td>
      <td className='px-4 py-2'>{name}</td>
      <td className='px-4 py-2'>{actCat}</td>
      {isUnMarked ? (
        <>
          <td className='px-4 py-2 text-green-600'>{activity.rewardPoints}</td>
          <td className='px-4 py-2 text-red-600'>{activity.penaltyPoints}</td>
        </>
      ) : (
        <td className='px-4 py-2'>{activity.points}</td>
      )}
      <td
        className='px-4 py-2 text-center'
        onClick={() => (isUnMarked ? onMarkActivity(activity, true) : null)}
      >
        {isUnMarked ? (
          <ActionButton
            text={isAvoidanceCategory ? 'Avoided' : 'Completed'}
            isPositive={true}
          />
        ) : (
          'Edit'
        )}
      </td>
    </tr>
  );
};

const ActionButton = ({ text, isPositive }) => (
  <button
    className={`flex justify-center items-center w-36 gap-2  py-2 rounded-md font-medium text-sm shadow-md ${
      isPositive
        ? 'bg-green-600 text-white hover:bg-green-700'
        : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    <img
      src={isPositive ? rewardButtonIcon : penaltyButtonIcon}
      alt={text}
      className='w-4 h-4'
    />
    {text}
  </button>
);

export default ActivitiesOverview;
