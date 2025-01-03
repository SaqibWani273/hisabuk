import { MarkedActivity, ScheduleDuration } from './create_activity_data';

class LocalStorage {
  //reset currentDailySchedule if it is not the current day
  static resetCurrentDailySchedule = () => {
    const currentDailySchedule = LocalStorage.getCurrentSchedule('Daily');
    const currentDate = new Date();
    //if currentDate's day is not equal to currentDailySchedule's day
    if (currentDate.getDay() !== currentDailySchedule.date.getDay()) {
      LocalStorage.setCurrentSchedule(
        'Daily',
        new CurrentDailySchedule(
          currentDailySchedule.id,
          currentDailySchedule.name,
          currentDate,
          currentDailySchedule.unMarkedActivities +
            currentDailySchedule.markedActivities,
          [],
          0,
          ''
        )
      );
    }
  };

  //list of DailySchedules
  static getDailySchedules = () => {
    return JSON.parse(localStorage.getItem('DailySchedules'));
  };

  static addNewDailySchedule = (name, activities) => {
    //first update list of dailyschedules for progress tracking
    const DailySchedules = LocalStorage.getDailySchedules();
    // const id = useId();
    //to do: use a better id generation
    const id = Date.now().toString();
    const currentDate = new Date();
    const newDailySchedule = new DailySchedule(
      id,
      name,
      activities,
      currentDate,
      ''
    );
    if (DailySchedules === null || DailySchedules.length === 0) {
      localStorage.setItem(
        'DailySchedules',
        JSON.stringify([newDailySchedule])
      );
    } else {
      DailySchedules[DailySchedules.length - 1].to = currentDate;
      DailySchedules.push(newDailySchedule);
      localStorage.setItem('DailySchedules', JSON.stringify(DailySchedules));
    }
    //now update the current schedule
    const currentDailySchedule = new CurrentDailySchedule(
      id,
      name,
      currentDate,
      activities,
      [],
      null,
      ''
    );
    LocalStorage.setCurrentSchedule('Daily', currentDailySchedule);
  };

  static setCurrentSchedule = (ScheduleDuration, currentSchedule) => {
    localStorage.setItem(ScheduleDuration, JSON.stringify(currentSchedule));
  };
  static getCurrentSchedule = (ScheduleDuration) => {
    const currentSchedule = localStorage.getItem(ScheduleDuration);
    return JSON.parse(currentSchedule);
  };
  static updateCurrentSchedule = (ScheduleDuration, activity, isPositive) => {
    //isPositive is true if the activity is completed or avoided, false if not
    const currentSchedule = LocalStorage.getCurrentSchedule(ScheduleDuration);

    const points = isPositive ? activity.rewardPoints : activity.penaltyPoints;
    currentSchedule.markedActivities.push(
      new MarkedActivity(activity.id, activity.name, activity.actCat, points)
    );
    //remove the activity from unmarked activities
    currentSchedule.unMarkedActivities =
      currentSchedule.unMarkedActivities.filter(
        (unMarkedActivity) => unMarkedActivity.id !== activity.id
      );

    currentSchedule.totalPoints =
      Number(currentSchedule.totalPoints) + Number(points);
    currentSchedule.summary += `${activity.name} : ${points} points\n`;
    LocalStorage.setCurrentSchedule(ScheduleDuration, currentSchedule);

    return currentSchedule;
  };
  static getTemplates = (scheduleDuration) => {
    return this.getDailySchedules() == null ? [] : this.getDailySchedules();
  };
}
export default LocalStorage;
class DailySchedule {
  id;
  schName;
  activities;
  from;
  to;

  constructor(id, schName, activities, from, to) {
    this.id = id;
    this.schName = schName;
    this.activities = activities;
    this.from = from;
    this.to = to;
  }
}
class CurrentDailySchedule {
  id;
  name;
  date;
  unMarkedActivities;
  markedActivities;
  totalPoints;
  summary;
  constructor(
    id,
    name,
    date,
    unMarkedActivities,
    markedActivities,
    totalPoints,
    summary
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.unMarkedActivities = unMarkedActivities;
    this.markedActivities = markedActivities;
    this.totalPoints = totalPoints;
    this.summary = summary;
  }
}
