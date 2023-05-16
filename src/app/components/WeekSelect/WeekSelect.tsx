import React from 'react';
import styles from './weekselect.css';
import { Dropdown } from '../Dropdown';
import { Icon, EIcons } from '../Icon';
import { EColor, Text } from '../../components/Text';
import { MenuWeekList } from './MenuWeekList';

export function WeekSelect() {
  return (
    <Dropdown
      button={
        <button className={styles.weekSelect}>
          <Text size={16}>Эта неделя</Text>
          <Icon name={EIcons.arrowDown}/>
        </button>
      }
    >
      <MenuWeekList />
    </Dropdown>
  );
}
