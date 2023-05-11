import React from 'react';
import styles from './logo.css';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';


export function Logo() {
  return (
    <div className={styles.logo}>
      <Icon name={EIcons.logo} size={40}/>
      <Text size={24_33} color={EColor.red} weight={300}>
        pomodoro_box
      </Text>
    </div>
  );
}
