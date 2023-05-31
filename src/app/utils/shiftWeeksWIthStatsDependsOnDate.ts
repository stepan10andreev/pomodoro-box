import { IStatisticsData } from "../store/statisticsData/statisticsData";
import { getNumberWeek } from "./getNumberWeek";

const initialWeek = [
  { day: 'ПН', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ВТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'СР', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ЧТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ПТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'СБ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ВС', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
]

export function shiftWeeksWIthStatsDependsOnDate (state: IStatisticsData, lastEntryDate: number) {
  const NOW = new Date();
  const todayWeekNumber = getNumberWeek(NOW);
  const lastWeekNumber = getNumberWeek(new Date(lastEntryDate));
  const difference = todayWeekNumber - lastWeekNumber;
  if (difference === 0) {
    // console.log('Эта неделя')
    return state;
  } else if (difference < 0) {
    return {
      ...state,
      twoWeeksAgo: initialWeek,
      lastWeek: initialWeek,
      currentWeek: initialWeek
    };
  } else if (difference === 1) {
    // console.log('Прошла неделя')
    return {
      ...state,
      twoWeeksAgo: state.lastWeek,
      lastWeek: state.currentWeek,
      currentWeek: initialWeek
    };
  } else if (difference >= 2) {
    // console.log('Прошло 2 недели')
    return {
      ...state,
      twoWeeksAgo: state.currentWeek,
      lastWeek: initialWeek,
      currentWeek: initialWeek
    };
  } else return state;
}
