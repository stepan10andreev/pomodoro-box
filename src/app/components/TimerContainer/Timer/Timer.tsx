import React from 'react';
import styles from './timer.css';
import { EColor, Text } from '../../Text';
import { TimerButtonsWrapper } from './TimerButtonsWrapper';
import { EIcons, Icon } from '../../Icon';


export function Timer() {
  return (
    <div className={styles.timer}>
      <Text As={'div'} size={150} weight={200}>
        25:00
        <button className={styles.addTimeBtn}>
          <Icon name={EIcons.addBtn} size={50}/>
        </button>
      </Text>
      <div className={styles.title}>
        <Text size={16} color={EColor.grey99}>Задача 1 - </Text>
        <Text size={16}>Сверстать сайт</Text>
      </div>
      <TimerButtonsWrapper />
    </div>
  );
}
