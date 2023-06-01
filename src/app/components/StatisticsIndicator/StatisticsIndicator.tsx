import React from 'react';
import styles from './statisticsindicator.css';
import { Text } from '../Text';
import { EIcons, Icon } from '../Icon';
import classNames from 'classnames';
import { useAppSelector } from '../Hooks/useAppDispatch';

export interface IindicatorIcons {
  focus?: boolean;
  pause?: boolean;
  stop?: boolean;
}

interface IStatisticsIndicator {
  statName: string;
  indicatorValue: number | string;
  indicatorIcons: IindicatorIcons
}

export function StatisticsIndicator({ statName, indicatorValue, indicatorIcons }: IStatisticsIndicator) {
  const theme = useAppSelector(state => state.theme);

  const classes = classNames(
    styles.statisticsIndicators,
    {[styles.dark]: theme === 'dark'},
    {[styles.backgroundFF]: indicatorIcons.focus},
    {[styles.backgroundDF]: indicatorIcons.pause},
    {[styles.backgroundC5]: indicatorIcons.stop},
  )

  return (
      <div className={classes}>
        <div className={styles.wrapper}>
          <Text As={'div'} weight={700} size={2433}>{statName}</Text>
          {indicatorIcons.focus && <Text As={'div'} size={64} desktopSize={24}>{indicatorValue}%</Text>}
          {indicatorIcons.pause && <Text As={'div'} size={64} desktopSize={24}>{indicatorValue}</Text>}
          {indicatorIcons.stop && <Text As={'div'} size={64} desktopSize={24}>{indicatorValue}</Text>}
        </div>
        {indicatorIcons.focus && (<Icon name={EIcons.focus} />)}
        {indicatorIcons.pause && (<Icon name={EIcons.clock} />)}
        {indicatorIcons.stop && (<Icon name={EIcons.stop} />)}
      </div>
  );
}
