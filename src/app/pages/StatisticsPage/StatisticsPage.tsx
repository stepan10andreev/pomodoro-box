import React from 'react';
import styles from './statisticspage.css';
import { Content } from '../../components/Content';
import { Text } from '../../components/Text';


export function StatisticsPage() {
  return (
    <Content>
      <Text As={'h1'} weight={700} size={2433}>Ваша активность</Text>
      <div className={styles.dayStatistics}>
        <Text As={'h2'} weight={700} size={2433}>Четверг</Text>
      </div>
    </Content>
  );
}
