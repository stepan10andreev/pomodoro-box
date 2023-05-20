interface IDays {
  day: string;
  workTime: number;
  doneTime: number;
  pauseTime: number;
  focus: number;
  countStops: number;
  countTomato: number;
}


interface IStatisticsData {
  currentWeek: IDays[],
  lastWeek: IDays[],
  twoWeeksAgo:  IDays[]
}

export const statisticsData: IStatisticsData = {
  currentWeek: [
    { day: 'Monday', workTime: 300, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Tuesday', workTime: 1200, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Wednesday', workTime: 1500, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Thursday', workTime: 6000, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Friday', workTime: 7500, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Saturday', workTime: 2300, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Sunday', workTime: 3000, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
  ],
  lastWeek: [
    { day: 'Monday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Tuesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Wednesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Thursday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Friday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Saturday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Sunday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
  ],
  twoWeeksAgo: [
    { day: 'Monday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Tuesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Wednesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Thursday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Friday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Saturday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
    { day: 'Sunday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
  ]
}
