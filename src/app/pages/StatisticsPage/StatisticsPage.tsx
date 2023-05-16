import React from 'react';
import styles from './statisticspage.css';
import { Content } from '../../components/Content';
import { EColor, Text } from '../../components/Text';
import { EIcons, Icon } from '../../components/Icon';
import { Dropdown } from '../../components/Dropdown';
import { ButtonMenu } from '../../components/TaskList/TaskItem/ButtonMenu';
import { WeekSelect } from '../../components/WeekSelect';


export function StatisticsPage() {
  return (
    <Content>
      <Text As={'h1'} weight={700} size={2433}>Ваша активность</Text>
      <WeekSelect />

      <div className={styles.dayStatistics}>
        <Text As={'h2'} weight={700} size={2433}>Четверг</Text>
        <div>
          <Text size={1628} >Вы работали над задачами в течение</Text>
          <Text size={1628} color={EColor.red}>9 часов 15 минут</Text>
        </div>
      </div>

      <div className={styles.tomatoStatistics}>
        {/* <Icon name={EIcons.tomato}/> */}
        <Icon name={EIcons.logo}/>
        <Text size={2433} color={EColor.grey99} weight={700}>x 2</Text>
        <div className={styles.tomatoCount}>
          <Text size={2433} color={EColor.white} weight={700}>2 помидора</Text>
        </div>
      </div>

    </Content>
  );
}
