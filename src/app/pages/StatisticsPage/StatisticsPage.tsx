import React from 'react';
import styles from './statisticspage.css';
import { Content } from '../../components/Content';
import { EColor, Text } from '../../components/Text';
import { EIcons, Icon } from '../../components/Icon';
import { Dropdown } from '../../components/Dropdown';
import { ButtonMenu } from '../../components/TaskList/TaskItem/ButtonMenu';
import { WeekSelect } from '../../components/WeekSelect';
import { DayStatistics } from '../../components/DayStatistics';
import { TomatoStatistics } from '../../components/TomatoStatistics';
import { StatisticBarChart } from '../../components/StatisticBarChart';
import { StatisticsIndicator } from '../../components/StatisticsIndicator';


export function StatisticsPage() {
  return (
    <Content>
      <div className={styles.wrapper}>

        <div className={styles.header}>
          <Text As={'h1'} weight={700} size={2433}>Ваша активность</Text>
          <WeekSelect />
        </div>

      <div className={styles.middle}>
        <div className={styles.leftMiddleWrapper}>
          <DayStatistics />

          <TomatoStatistics />
        </div>

        <StatisticBarChart />
      </div>

      <StatisticsIndicator statName={'Фокус'} indicatorValue={35} indicatorIcons={{focus: true}}/>
      <StatisticsIndicator statName={'Время на паузе'} indicatorValue={9} indicatorIcons={{pause: true}}/>
      <StatisticsIndicator statName={'Остановки'} indicatorValue={3} indicatorIcons={{stop: true}}/>

      </div>
    </Content>
  );
}



