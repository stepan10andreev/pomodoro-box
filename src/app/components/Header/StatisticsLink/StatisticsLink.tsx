import React from 'react';
import styles from './statisticslink.css';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';


export function StatisticsLink() {
  return (
    <a href='#' className={styles.statisticsLink}>
      <Icon name={EIcons.equalizer} size={24}/>
      <Text size={16} color={EColor.red}>
        Статистика
      </Text>
    </a>
  );
}
