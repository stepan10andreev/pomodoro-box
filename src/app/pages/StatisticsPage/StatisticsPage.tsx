import React from 'react';
import styles from './statisticspage.css';
import { Content } from '../../components/Content';
import { EColor, Text } from '../../components/Text';
import { EIcons, Icon } from '../../components/Icon';
import { Dropdown } from '../../components/Dropdown';
import { ButtonMenu } from '../../components/TaskList/TaskItem/ButtonMenu';
import { WeekSelect } from '../../components/WeekSelect';
import { DayStatistics } from '../../components/DayStatistics';


export function StatisticsPage() {
  return (
    <Content>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Text As={'h1'} weight={700} size={2433}>Ваша активность</Text>
          <WeekSelect />
        </div>
        <DayStatistics />

        <div className={styles.tomatoStatistics}>
          <div className={styles.wrapper1}>
            {/* <Icon name={EIcons.tomato}/> */}
            <Icon name={EIcons.logo}/>
            <Text size={2433} color={EColor.grey99} weight={700}>x 2</Text>
          </div>
          <div className={styles.tomatoCount}>
            <Text size={2433} color={EColor.white} weight={700}>2 помидора</Text>
          </div>
        </div>

      </div>
    </Content>
  );
}
