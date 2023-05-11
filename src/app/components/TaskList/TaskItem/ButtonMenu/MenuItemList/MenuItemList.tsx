import React from 'react';
import styles from './menuitemlist.css';
import { EIcons, Icon } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';

export function MenuItemList() {
  return (
    // <div className={styles.dropdown}>
      <ul className={styles.menuItemsList}>

        <li className={styles.menuItem}>
          <button className={styles.button}>
            <Icon name={EIcons.increase}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Увеличить
            </Text>
          </button>
        </li>

        <li className={styles.menuItem}>
          <button className={styles.button}>
            <Icon name={EIcons.decrease}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Уменьшить
            </Text>
          </button>
        </li>

        <li className={styles.menuItem}>
          <button className={styles.button}>
            <Icon name={EIcons.edit}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Редактировать
            </Text>
          </button>
        </li>

        <li className={styles.menuItem}>
          <button className={styles.button}>
            <Icon name={EIcons.delete}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Удалить
            </Text>
          </button>
        </li>

      </ul>
    // </div>
  );
}
