import React from 'react';
import styles from './daystatistics.css';
import { EColor, Text } from '../Text';

export function DayStatistics() {
  return (
    <div className={styles.dayStatistics}>
      <Text As={'h2'} weight={700} size={2433}>Четверг</Text>
      <div>
        <Text size={1628} >Вы работали над задачами в течение </Text>
        <Text size={1628} color={EColor.red}>9 часов 15 минут</Text>
      </div>
    </div>
  );
}
