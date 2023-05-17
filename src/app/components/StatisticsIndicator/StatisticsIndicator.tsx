import React from 'react';
import styles from './statisticsindicator.css';
import { EColor, Text } from '../Text';
import { EIcons, Icon } from '../Icon';


export interface IindicatorIcons {
  focus?: boolean;
  pause?: boolean;
  stop?: boolean;
};

interface IStatisticsIndicator {
  statName: string;
  indicatorValue: string;
  indicatorIcons: IindicatorIcons
}
export function StatisticsIndicator({ statName, indicatorValue, indicatorIcons }: IStatisticsIndicator) {
  return (
      <div className={styles.statisticsIndicators}>
        <div className={styles.wrapper}>
          <Text As={'div'} weight={700} size={2433}>{statName}</Text>
          <Text As={'div'} size={64}>{indicatorValue}</Text>
        </div>
        {indicatorIcons.focus && (<Icon name={EIcons.focus} />)}
        {indicatorIcons.pause && (<Icon name={EIcons.clock} />)}
        {indicatorIcons.stop && (<Icon name={EIcons.focus} />)}
      </div>
  );
}
