import React from 'react';
import styles from './settingslink.css';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';
import { NavLink } from 'react-router-dom';

export function SettingsLink() {
  return (
    <NavLink to='/settings' className={({isActive}) => isActive ? styles.linkActive : styles.settingsLink}>
      <Icon name={EIcons.settings} size={18}/>
      <Text size={16} color={EColor.red}>
        Настройки
      </Text>
  </NavLink>
  );
}
