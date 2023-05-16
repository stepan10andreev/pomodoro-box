import React from 'react';
import styles from './tomatostatistics.css';
import { Icon, EIcons } from '../Icon';
import { EColor, Text } from '../Text';

export function TomatoStatistics() {
  return (
    <div className={styles.tomatoStatistics}>
      <div className={styles.wrapper}>
        {/* <Icon name={EIcons.tomato}/> */}
        <Icon name={EIcons.logo}/>
        <Text size={2433} color={EColor.grey99} weight={700}>x 2</Text>
      </div>
      <div className={styles.tomatoCount}>
        <Text size={2433} color={EColor.white} weight={700}>2 помидора</Text>
      </div>
    </div>
  );
}
