import React, { useRef, MouseEvent, useState, useEffect, MouseEventHandler } from 'react';
import styles from './statisticbarchart.css';
import { Bar, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { options } from './chartBarOptions';
import { useWeeks } from '../Hooks/useWeeks';
// import { statisticsData } from './statisticsData';
import { useAppSelector } from '../Hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
import { resetClickedBarNum, setClickedBarNum, setFutureClickedBar } from '../../store/numberClickedBar/numberClickedBar';
import { useOnClickOutside } from '../Hooks/useOnClickOutside';
import { getBarBackground } from '../../utils/getBarBackground';
import { getWeekDay, getWeekDayIndexByName } from '../../utils/getWeekDay';
import classNames from 'classnames';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//       position: 'top' as const,
//     },
//     title: {
//       display: false,
//       text: 'Статистика по дням',
//     },
//   },
//   scales: {
//     y: {
//       // count: 10,
//       beginAtZero: true,
//       position: 'right' as const,
//       ticks: {
//         callback: (value: any, index: any, values: any) => {
//           console.log(values)
//           if (value <= 1.5) return 'время'
//           if (value < 3600) {
//             return `${value / 60} мин`;
//           }
//           if (value >= 3600) {
//             const hours = Math.floor(value / 3600);
//             const minutes = Math.round((value - (hours * 3600)) / 60);
//             return `${hours} ч ${minutes} м`;
//           }
//         },
//         display: true,
//         color: '#333333',
//         max: 6000,
//         stepSize: 1500,
//         includeBounds: false,
//         maxTicksLimit: 5,
//         padding: 30,
//         font: {
//           size: 12
//         }
//       },
//       border: {
//         color: 'transparent'
//       },
//       grid: {
//         tickColor: 'transparent',
//         color: 'rgba(51, 51, 51, 0.2)'
//       }
//     },

//     x: {
//       backgroundColor: "rgba(236, 236, 236, 1)",
//       grid: {
//         display: false,
//         // color: 'transparent',
//       },
//       border: {
//         color: 'transparent'
//       },
//       ticks: {
//         color: '#999999',
//         padding: 11,
//          font: {
//           size: 24
//         }
//       }
//     }
//   }
// };


// interface IDays {
//   day: string;
//   workTime: number;
//   doneTime: number;
//   pauseTime: number;
//   focus: number;
//   countStops: number;
//   countTomato: number;
// }


// interface IStatisticsData {
//   currentWeek: IDays[],
//   lastWeek: IDays[],
//   twoWeeksAgo:  IDays[]
// }

// export const statisticsData: IStatisticsData = {
//   currentWeek: [
//     { day: 'Monday', workTime: 300, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Tuesday', workTime: 1200, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Wednesday', workTime: 1500, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Thursday', workTime: 6000, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Friday', workTime: 7500, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Saturday', workTime: 2300, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Sunday', workTime: 3000, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//   ],
//   lastWeek: [
//     { day: 'Monday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Tuesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Wednesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Thursday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Friday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Saturday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Sunday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//   ],
//   twoWeeksAgo: [
//     { day: 'Monday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Tuesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Wednesday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Thursday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Friday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Saturday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//     { day: 'Sunday', workTime: 5, doneTime: 5, pauseTime: 5, focus: 5, countStops: 5, countTomato: 5 },
//   ]
// }

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Время',
//       data: currentWeek ? statisticsData.currentWeek.map((day) => day.workTime) :
//             lastWeek ? statisticsData.lastWeek.map((day) => day.workTime) :
//             twoWeeksAgo ? statisticsData.lastWeek.map((day) => day.workTime) : [0, 0, 0 ,0 ,0 ,0, 0],
//       backgroundColor: 'rgba(234, 137, 121, 1)',
//       hoverBackgroundColor: 'rgba(220, 62, 34, 1)',
//       barPercentage: 0.5,
//       barThickness: 'flex' as const,
//       minBarLength: 5,
//     }
//   ],
// };

export function StatisticBarChart() {
  const [ indexClickedBar, setIndexClickedBar] = useState<number | null>(null);
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo} = useWeeks();
  const clickedBar = useAppSelector(state => state.numberClickedBar.clickedBar)
  const theme = useAppSelector(state => state.theme);

  const statisticsData = useAppSelector(state => state.statisticsData)
  const dispatch = useDispatch();
  const ref = useRef(null);
  const chartRef = useRef(null);

  useOnClickOutside(ref, () => {dispatch(resetClickedBarNum()), dispatch(setFutureClickedBar(false))})

  const data = {
    labels,
    datasets: [
      {
        label: 'Время',
        data: isCurrentWeek ? statisticsData.currentWeek.map((day) => day.workTime) :
              isLastWeek ? statisticsData.lastWeek.map((day) => day.workTime) :
              isTwoWeekAgo ? statisticsData.lastWeek.map((day) => day.workTime) : [0, 0, 0 ,0 ,0 ,0, 0],
        backgroundColor: clickedBar != null ? getBarBackground(indexClickedBar) : getBarBackground(null),
        hoverBackgroundColor: 'rgba(220, 62, 34, 1)',
        barPercentage: 0.8,
        barThickness: 'flex' as const,
        minBarLength: 5,
      }
    ],
  };


  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (chartRef.current && getElementAtEvent(chartRef.current, event).length > 0) {
      const indexClickedBar = getElementAtEvent(chartRef.current, event)[0].index;
      setIndexClickedBar(indexClickedBar);
      dispatch(setClickedBarNum(indexClickedBar));
      if (isCurrentWeek) {
        const currentDayName = getWeekDay(new Date())
        const currentDayIndex = getWeekDayIndexByName(currentDayName)
        // console.log(currentDayIndex)
        // console.log(indexClickedBar)
        if (indexClickedBar > currentDayIndex) {
          dispatch(setFutureClickedBar(true))
        } else {
          dispatch(setFutureClickedBar(false))
        }
      }
    }
  }

  return (
    <div
      ref={ref}
      className={classNames(
      styles.bar,
      {[styles.dark]: theme === 'dark'},
      )}
    >
      <Bar
        options={options}
        data={data}
        onClick={onClick}
        ref={chartRef}
      />
    </div>
  );
}
