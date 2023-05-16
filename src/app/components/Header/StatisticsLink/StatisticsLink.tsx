import React from 'react';
import styles from './statisticslink.css';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';
import { Link } from 'react-router-dom';


export function StatisticsLink() {
  return (
    <Link to='/statistics' className={styles.statisticsLink}>
      <Icon name={EIcons.equalizer} size={24}/>
      <Text size={16} color={EColor.red}>
        Статистика
      </Text>
    </Link>
  );
}

