class Utils {
  static getSummaryMessage(points) {
    if (points === null) {
      return 'You have not marked any activities today. Try to complete some activities to earn points.';
    }
    const messages = [
      {
        min: -Infinity,
        max: -50,
        message:
          'It seems today was particularly challenging. Remember, every mistake is an opportunity to learn and grow. Reflect on what went wrong, and take small steps to improve tomorrow. You’ve got this!',
      },
      {
        min: -50,
        max: -40,
        message:
          'You’ve faced some setbacks today, but don’t lose hope. Identify areas to focus on, and aim to improve step by step. Tomorrow is a fresh start for positive changes.',
      },
      {
        min: -40,
        max: -30,
        message:
          'There’s room for improvement in today’s performance. Reflect on missed essential tasks or areas of concern, and set a plan to tackle them head-on tomorrow. Progress comes with effort!',
      },
      {
        min: -30,
        max: -20,
        message:
          'A mixed day with some challenges. Consider prioritizing essential activities and avoiding distractions. Small consistent efforts can make a big difference over time.',
      },
      {
        min: -20,
        max: -10,
        message:
          'Not too bad, but there’s still room to grow. Try to complete more essential and important tasks tomorrow. Stay consistent, and you’ll see improvement!',
      },
      {
        min: -10,
        max: 0,
        message:
          'You’re almost there! Focus on strengthening your habits and avoiding setbacks. Every small step forward adds up to bigger achievements.',
      },
      {
        min: 0,
        max: 10,
        message:
          'A balanced day with neither gains nor losses. Use this as a foundation to build momentum. Aim to accomplish more tomorrow for an upward trajectory.',
      },
      {
        min: 10,
        max: 20,
        message:
          'Good start! You’re moving in the right direction. Focus on maintaining consistency and building on today’s efforts to achieve even better results.',
      },
      {
        min: 20,
        max: 30,
        message:
          'Well done! You’ve made good progress today. Keep up the great work, and aim to stay consistent with your positive habits.',
      },
      {
        min: 30,
        max: 40,
        message:
          'Great job! You’re building momentum with solid progress. Stay committed to your goals, and keep pushing for excellence.',
      },
      {
        min: 40,
        max: 50,
        message:
          'Excellent work! You’re on a strong path, and your dedication is paying off. Let’s aim to keep this streak going for even better results.',
      },
      {
        min: 50,
        max: Infinity,
        message:
          'Incredible! Your exceptional effort today is a reflection of your hard work and focus. Keep aiming high and inspiring yourself to reach greater heights!',
      },
    ];

    const messageObj = messages.find(
      ({ min, max }) => points >= min && points < max
    );
    return messageObj
      ? messageObj.message
      : 'Keep going! Every day is a new opportunity to improve.';
  }
}

export default Utils;
