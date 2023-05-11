import React from 'react';
import styles from './timertask.css';
import { EColor, Text } from '../../Text';

export function TimerTask() {
  return (
    <div className={styles.timerTask}>
      <Text As={'div'} size={16} weight={700} color={EColor.white}>Сверстать сайт</Text>
      <Text  As={'div'} size={16} weight={700} color={EColor.white}>Помидор 1</Text>
    </div>
  );
}
