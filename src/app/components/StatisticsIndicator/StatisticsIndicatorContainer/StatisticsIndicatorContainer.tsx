import React from 'react';
import styles from './statisticsindicatorcontainer.css';
import { StatisticsIndicator } from '../StatisticsIndicator';
import { useWeeks } from '../../Hooks/useWeeks';
import { useAppSelector } from '../../Hooks/useAppDispatch';

export function StatisticsIndicatorContainer() {
  const statData = useAppSelector(state => state.statisticsData);
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo} = useWeeks();
  const clickedBar = useAppSelector(state => state.numberClickedBar.clickedBar)


  return (
    <>
      <StatisticsIndicator
        statName={'Фокус'}
        indicatorValue={
          (clickedBar && isCurrentWeek ? statData.currentWeek[clickedBar].focusProcent : 0) ||
            (clickedBar && isLastWeek ? statData.lastWeek[clickedBar].focusProcent : 0) ||
              (clickedBar && isTwoWeekAgo ? statData.twoWeeksAgo[clickedBar].focusProcent : 0)
        }
        indicatorIcons={{focus: true}}
      />
      <StatisticsIndicator
        statName={'Время на паузе'}
        indicatorValue={
          (clickedBar && isCurrentWeek ? statData.currentWeek[clickedBar].pauseTime : 0) ||
            (clickedBar && isLastWeek ? statData.lastWeek[clickedBar].pauseTime : 0) ||
              (clickedBar && isTwoWeekAgo ? statData.twoWeeksAgo[clickedBar].pauseTime : 0)
        }
        indicatorIcons={{pause: true}}
      />
      <StatisticsIndicator
        statName={'Остановки'}
        indicatorValue={
          (clickedBar && isCurrentWeek ? statData.currentWeek[clickedBar].countStops : 0) ||
            (clickedBar && isLastWeek ? statData.lastWeek[clickedBar].countStops : 0) ||
              (clickedBar && isTwoWeekAgo ? statData.twoWeeksAgo[clickedBar].countStops : 0)
        }
        indicatorIcons={{stop: true}}
      />
    </>
  );
}
