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


export function StatisticsPage() {
  return (
    <Content>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Text As={'h1'} weight={700} size={2433}>Ваша активность</Text>
          <WeekSelect />
        </div>


        <div>
          <DayStatistics />

          <TomatoStatistics />
        </div>

        <StatisticBarChart />

      </div>
    </Content>
  );
}



