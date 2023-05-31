import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { shiftWeeksWIthStatsDependsOnDate } from "../../utils/shiftWeeksWIthStatsDependsOnDate";

export interface IDays {
  [K: string]: string | number;
  day: string;
  workTime: number;
  doneTime: number;
  pauseTime: number;
  countStops: number;
  countTomato: number;
  focusProcent: number;
}

export interface IStatisticsData {
  [K: string]: IDays[],
  currentWeek: IDays[],
  lastWeek: IDays[],
  twoWeeksAgo:  IDays[]
}

const initialState: IStatisticsData = {
  currentWeek: [
    { day: 'ПН', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ВТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'СР', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ЧТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ПТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'СБ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ВС', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  ],
  lastWeek: [
    { day: 'ПН', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ВТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'СР', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ЧТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ПТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'СБ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ВС', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  ],
  twoWeeksAgo: [
    { day: 'ПН', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ВТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'СР', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ЧТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ПТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'СБ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
    { day: 'ВС', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  ]
}

function getStatisticsDataState(fullStats: IStatisticsData, dayStats: IDays) {
  return {
    ...fullStats,
    currentWeek: fullStats.currentWeek.map((item) => item.day === dayStats.day ? dayStats : item)
  };
}

const statisticsSlice = createSlice({
  name: 'statisticsData',
  initialState,
  reducers: {
    addDayStatistic: {
      reducer (state, action: PayloadAction<IDays>) {
        // создаем обьект и добавляем еще одно свойство которое вычисляется из 2 других свойств
        const statsObject = {
          ...action.payload,
          focusProcent: Math.abs(Math.round(action.payload.doneTime / action.payload.workTime * 100))
        }
        // вынести в отдельную функцию
        let lastEntryDate;
        const localStorageData = localStorage.getItem('persist:root');
        if (localStorageData) {
          const entryDate = JSON.parse(localStorageData).entryDate;
          lastEntryDate = JSON.parse(entryDate).msDate;
        }
        const newState = shiftWeeksWIthStatsDependsOnDate(state, lastEntryDate);

        return getStatisticsDataState(newState, statsObject);
      },
      prepare ({day, workTime, doneTime, pauseTime, countStops, countTomato, focusProcent}: IDays) {
        return {
          payload: {
            day,
            workTime,
            doneTime,
            pauseTime,
            countStops,
            countTomato,
            focusProcent,
          }
        }
      },
    },
  }
})

export const { addDayStatistic } = statisticsSlice.actions;

export default statisticsSlice.reducer;



