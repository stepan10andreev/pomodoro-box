import React from 'react';
import styles from './tomatostatistics.css';
import { Icon, EIcons } from '../Icon';
import { EColor, Text } from '../Text';
import { useAppSelector } from '../Hooks/useAppDispatch';
import { useWeeks } from '../Hooks/useWeeks';

export function TomatoStatistics() {
  const statData = useAppSelector(state => state.statisticsData);
  const clickedBar = useAppSelector(state => state.numberClickedBar.clickedBar)
  const { isCurrentWeek, isLastWeek, isTwoWeekAgo} = useWeeks();

  return (
    <div className={styles.tomatoStatistics}>
      <div className={styles.wrapper}>
        {/* <Icon name={EIcons.tomato}/> */}
        <Icon name={EIcons.logo}/>
        <Text size={2433} color={EColor.grey99} weight={700}>
          x {
            (clickedBar && isCurrentWeek ? statData.currentWeek[clickedBar].countTomato : 0) ||
            (clickedBar && isLastWeek ? statData.lastWeek[clickedBar].countTomato : 0) ||
            (clickedBar && isTwoWeekAgo ? statData.twoWeeksAgo[clickedBar].countTomato : 0)
          }
        </Text>
      </div>
      <div className={styles.tomatoCount}>
        <Text size={2433} color={EColor.white} weight={700}>
          {
            (clickedBar && isCurrentWeek ? statData.currentWeek[clickedBar].countTomato : 0) ||
            (clickedBar && isLastWeek ? statData.lastWeek[clickedBar].countTomato : 0) ||
            (clickedBar && isTwoWeekAgo ? statData.twoWeeksAgo[clickedBar].countTomato : 0)
          } помидора
        </Text>
      </div>
    </div>
  );
}
