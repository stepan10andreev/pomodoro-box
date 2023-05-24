import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../components/Hooks/useAppDispatch";
import entryDateState from "../entryDateState/entryDateState";
import { getNumberWeek } from "../../utils/getNumberWeek";

export interface IDays {
  [K: string]: string | number;
  day: string;
  workTime: number;
  doneTime: number;
  pauseTime: number;
  countStops: number;
  countTomato: number;
}

interface IStatisticsData {
  [K: string]: IDays[],
  currentWeek: IDays[],
  lastWeek: IDays[],
  twoWeeksAgo:  IDays[]
}

const initialWeek = [
  { day: 'ПН', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ВТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'СР', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ЧТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ПТ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'СБ', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
  { day: 'ВС', workTime: 0, doneTime: 0, pauseTime: 0, focusProcent: 0, countStops: 0, countTomato: 0 },
]

const initialState: IStatisticsData = {
  currentWeek: [
    { day: 'ПН', workTime: 300, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ВТ', workTime: 1200, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'СР', workTime: 1500, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ЧТ', workTime: 6000, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ПТ', workTime: 7500, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'СБ', workTime: 2300, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ВС', workTime: 3000, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
  ],
  lastWeek: [
    { day: 'ПН', workTime: 1300, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ВТ', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'СР', workTime: 1000, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ЧТ', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ПТ', workTime: 231, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'СБ', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ВС', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
  ],
  twoWeeksAgo: [
    { day: 'ПН', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ВТ', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'СР', workTime: 555, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ЧТ', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ПТ', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'СБ', workTime: 4444, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
    { day: 'ВС', workTime: 5, doneTime: 5, pauseTime: 5, focusProcent: 5, countStops: 5, countTomato: 5 },
  ]
}

function getStatisticsDataState(fullStats: IStatisticsData, dayStats: IDays) {
  return {
    ...fullStats,
    currentWeek: fullStats.currentWeek.map((item) => item.day === dayStats.day ? dayStats : item)
  };
}

function shiftWeeksWIthStatsDependsOnDate (state: IStatisticsData, lastEntryDate: number) {
  const NOW = new Date();
  const todayWeekNumber = getNumberWeek(NOW);
  const lastWeekNumber = getNumberWeek(new Date(lastEntryDate))
  const difference = todayWeekNumber - lastWeekNumber;
  console.log(todayWeekNumber)
  console.log(lastWeekNumber)
  console.log(difference)
  if (difference === 0) {
    console.log('Эта неделя')
    return state;
  } else if (difference < 0) {
    return {
      ...state,
      twoWeeksAgo: initialWeek,
      lastWeek: initialWeek,
      currentWeek: initialWeek
    };
  } else if (difference === 1) {
    console.log('Прошла неделя')
    return {
      ...state,
      twoWeeksAgo: state.lastWeek,
      lastWeek: state.currentWeek,
      currentWeek: initialWeek
    };
  } else if (difference >= 2) {
    console.log('Прошло 2 недели')
    return {
      ...state,
      twoWeeksAgo: state.currentWeek,
      lastWeek: initialWeek,
      currentWeek: initialWeek
    };
  } else return state;
}

const statisticsSlice = createSlice({
  name: 'statisticsData',
  initialState,
  reducers: {
    addDayStatistic: {
      reducer (state, action: PayloadAction<IDays>) {

        const statsObject = {
          ...action.payload,
          focusProcent: Math.abs(Math.round(action.payload.doneTime / action.payload.workTime * 100))
        }
        // вынести в отдельную функцию
        let lastEntryDate
        const localStorageData = localStorage.getItem('persist:root')
        if (localStorageData) {
          let entryDate = JSON.parse(localStorageData).entryDate;
          lastEntryDate = JSON.parse(entryDate).msDate
          console.log(lastEntryDate)
        }
        let newState = shiftWeeksWIthStatsDependsOnDate(state, lastEntryDate)

        return getStatisticsDataState(newState, statsObject)
      },
      prepare ({day, workTime, doneTime, pauseTime, countStops, countTomato}: IDays) {
        return {
          payload: {
            day,
            workTime,
            doneTime,
            pauseTime,
            countStops,
            countTomato,
          }
        }
      },
    },
  }
})

// createSlice автоматически создается функция «создатель действия» с тем же именем
// Экспортируем этого создателя действия и используем его в наших компонентах пользовательского интерфейса для отправки действия,
export const { addDayStatistic } = statisticsSlice.actions;

// // экспортируем редьюсер
export default statisticsSlice.reducer;

// // экспортируем экшены (для метода dispatch в разным компонентах)
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// // экспортируем по умолчанию редьюсер
// export default counterSlice.reducer


