import React from 'react';
import styles from './statisticsindicatorcontainer.css';
import { StatisticsIndicator } from '../StatisticsIndicator';
import { useWeeks } from '../../Hooks/useWeeks';
import { useAppSelector } from '../../Hooks/useAppDispatch';

export function StatisticsIndicatorContainer() {
  const statData = useAppSelector(state => state.statisticsData);
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo} = useWeeks();
  // const clickedBar = useAppSelector(state => state.barState)
  const clickedBar = 1


  return (
    <>
      <StatisticsIndicator
        statName={'Фокус'}
        indicatorValue={
          isCurrentWeek ? statData.currentWeek[clickedBar].focusProcent : 0 ||
          isLastWeek ? statData.currentWeek[clickedBar].focusProcent : 0 ||
          isTwoWeekAgo ? statData.currentWeek[clickedBar].focusProcent : 0
        }
        indicatorIcons={{focus: true}}
      />
      <StatisticsIndicator
        statName={'Время на паузе'}
        indicatorValue={
          isCurrentWeek ? statData.currentWeek[clickedBar].pauseTime : 0 ||
          isLastWeek ? statData.currentWeek[clickedBar].pauseTime : 0 ||
          isTwoWeekAgo ? statData.currentWeek[clickedBar].pauseTime : 0
        }
        indicatorIcons={{pause: true}}
      />
      <StatisticsIndicator
        statName={'Остановки'}
        indicatorValue={
          isCurrentWeek ? statData.currentWeek[clickedBar].countStops : 0 ||
          isLastWeek ? statData.currentWeek[clickedBar].countStops : 0 ||
          isTwoWeekAgo ? statData.currentWeek[clickedBar].countStops : 0
        }
        indicatorIcons={{stop: true}}
      />
    </>
  );
}
