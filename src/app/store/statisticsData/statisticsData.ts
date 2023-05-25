import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../components/Hooks/useAppDispatch";

export interface IDays {
  [K: string]: string | number;
  day: string;
  workTime: number;
  doneTime: number;
  pauseTime: number;
  focusProcent: number;
  countStops: number;
  countTomato: number;
}

interface IStatisticsData {
  [K: string]: IDays[],
  currentWeek: IDays[],
  lastWeek: IDays[],
  twoWeeksAgo:  IDays[]
}

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

// function addStatisticsDependingOnDay (stateX: IStatisticsData, weekStatArray: IDays[], statObj: IDays ) {
//   const NOW = new Date();
//   const lastEntryDate = useAppSelector(state => state.entryDate.msDate);
//   // const lastEntryDay = useAppSelector(state => state.today.day);
//   // const diff = NOW.getTime() - lastEntryDate;
//   const todayWeekNumber = getNumberWeek(NOW);
//   const lastWeekNumber = getNumberWeek(new Date(lastEntryDate))
//   const difference = todayWeekNumber - lastWeekNumber;
//   // добавляем в текущую неделю в любом случае
//   weekStatArray.map((item) => {
//     if (item.day === statObj.day) {
//       item = statObj
//     }
//   })

//   if (difference === 0) {
//     stateX.currentWeek.map((dayObj) => dayObj.day === statObj.day ? dayObj === statObj : dayObj)
//   }

//   if (difference < 0) {
//     for (let week in stateX) {
//       stateX[week] = initialState.currentWeek.map((day) => day);
//     }
//   }

//   if (difference === 1) {
//     stateX.twoWeeksAgo = stateX.lastWeek.map((day) => day);
//     stateX.lastWeek = stateX.currentWeek.map((day) => day);
//     stateX.currentWeek = initialState.currentWeek.map((day) => day);
//     stateX.currentWeek.map((dayObj) => dayObj.day === statObj.day ? dayObj === statObj : dayObj)
//   }

//   if (difference >= 2) {
//     stateX.twoWeeksAgo = stateX.currentWeek.map((day) => day);
//     stateX.currentWeek = initialState.currentWeek.map((day) => day);
//     stateX.currentWeek.map((dayObj) => dayObj.day === statObj.day ? dayObj === statObj : dayObj)
//   }
// }

const statisticsSlice = createSlice({
  name: 'statisticsData',
  initialState,
  reducers: {
    addDayStatistic: {
      reducer (state, action: PayloadAction<IDays>) {
        state.currentWeek
        const isSelectClicked = useAppSelector((state) => state.entryDate.numberDay)
        console.log(isSelectClicked)
      },
      prepare (day: string, workTime: number, doneTime: number, pauseTime: number, focusProcent: number, countStops: number, countTomato:number) {
        return {
          payload: {
            day,
            workTime,
            doneTime,
            pauseTime,
            focusProcent,
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
