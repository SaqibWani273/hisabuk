import compulsorySvg from '../assets/images/compulsory.svg';
import prohibitedSvg from '../assets/images/prohibited.svg';
import importantSvg from '../assets/images/important.svg';
import recommendedSvg from '../assets/images/recommended.svg';
import addictionAvoidanceSvg from '../assets/images/addiction.svg';

//unmarked activity
class Activity {
  constructor(id, name, actCat, rewardPoints, penaltyPoints, duration) {
    this.id = id;
    this.name = name; // String
    this.actCat = actCat; // ActivityCategory
    this.rewardPoints = rewardPoints; // Number
    this.penaltyPoints = penaltyPoints; // Number
    this.duration = duration;
  }
}
class MarkedActivity {
  constructor(id, name, actCat, points) {
    this.id = id;
    this.name = name; // String
    this.actCat = actCat; // ActivityCategory
    this.points = points; // Number
  }
}
const ScheduleDuration = {
  Daily: 'Daily',
  Weekly: 'Weekly',
  Monthly: 'Monthly',
};
class Category {
  constructor(name, imgSvg, description, bgColor) {
    this.name = name;
    this.imgSvg = imgSvg;
    this.description = description;
    this.bgColor = bgColor;
  }
}
// Enum for ActivityCategory
const ActivityCategory = {
  Compulsory: 'Compulsory',
  Prohibited: 'Prohibited',
  Important: 'Important',
  Recommended: 'Recommended',
  Addiction_Avoidance: 'Addiction Avoidance',
};
const categories = [
  new Category(
    ActivityCategory.Compulsory,
    compulsorySvg,
    'Activities that must Strictly be done,e.g. Five times prayer',
    'bg-blue-300'
  ),
  new Category(
    ActivityCategory.Prohibited,
    prohibitedSvg,
    'Activities that must Strictly be prohibited e.g. Sleeping late',
    'bg-red-300'
  ),
  new Category(
    ActivityCategory.Important,
    importantSvg,
    'Activities that are important but not compulsory e.g. Following proper schedule',
    'bg-green-300'
  ),
  new Category(
    ActivityCategory.Recommended,
    recommendedSvg,
    'Positive and helpful activities e.g. exercise',
    'bg-yellow-300'
  ),
  new Category(
    ActivityCategory.Addiction_Avoidance,
    addictionAvoidanceSvg,
    'Activities that must Strictly be prohibited but are addicted to e.g. wasting time on social media',
    'bg-pink-300'
  ),
];

export {
  Activity,
  ActivityCategory,
  categories,
  ScheduleDuration,
  MarkedActivity,
};
