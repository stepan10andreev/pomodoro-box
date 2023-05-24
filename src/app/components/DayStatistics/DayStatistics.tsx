import React, { useEffect } from 'react';
import styles from './daystatistics.css';
import { EColor, Text } from '../Text';
import { useAppSelector } from '../Hooks/useAppDispatch';
import { useWeeks } from '../Hooks/useWeeks';

export function DayStatistics() {
  const statData = useAppSelector(state => state.statisticsData);
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo} = useWeeks();
  const clickedBar = useAppSelector(state => state.numberClickedBar.clickedBar)

  // useEffect(() => {
  //   if (clickedBar != null && clickedBar >= 0){
  //     // const isCkickedBar = clickedBar >= 0;
  //     console.log(clickedBar)
  //   }
  // })

  return (
    <div className={styles.dayStatistics}>
      <Text As={'h2'} weight={700} size={2433}>Четверг</Text>
      <div>
        <Text size={1628} >Вы работали над задачами в течение </Text>
        <Text size={1628} color={EColor.red}>

          {
            (clickedBar != null && clickedBar >= 0 && isCurrentWeek ? getTimeFromMs(statData.currentWeek[clickedBar].workTime) : 0) ||
            (clickedBar != null && clickedBar >= 0 && isLastWeek ? getTimeFromMs(statData.lastWeek[clickedBar].workTime) : 0) ||
            (clickedBar != null && clickedBar >= 0 && isTwoWeekAgo ? getTimeFromMs(statData.twoWeeksAgo[clickedBar].workTime) : 0)
          }
        </Text>
      </div>
    </div>
  );
}

function getTimeFromMs(timeInMs: number) {
  if (timeInMs < 60) return `${timeInMs} секунд`;
  if (timeInMs < 3600) {
    return `${timeInMs / 60} мин`;
  }
  if (timeInMs >= 3600) {
    const hours = Math.floor(timeInMs / 3600);
    const minutes = Math.round((timeInMs - (hours * 3600)) / 60);
    return `${hours} часов ${minutes} минут`;
  }
}
