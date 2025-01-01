// import { ScheduleDuration } from "../data/create_activity_data"
class LocalStorage {
  static setSchedule = (ScheduleDuration, activities) => {
    localStorage.setItem(ScheduleDuration, JSON.stringify(activities));
  };
  static getSchedule = (ScheduleDuration) => {
    const activities = localStorage.getItem(ScheduleDuration);
    return JSON.parse(activities);
  };
}
export default LocalStorage;
