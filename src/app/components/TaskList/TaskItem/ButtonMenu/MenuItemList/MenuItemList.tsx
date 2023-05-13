import React from 'react';
import styles from './menuitemlist.css';
import { EIcons, Icon } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';
import { useDispatch } from 'react-redux';

export function MenuItemList() {
  const dispatch = useDispatch();
  // onClick={() => dispatch(incrementTomatoCount(tasId))}
  return (
      <ul className={styles.menuItemsList}>

        <li className={styles.menuItem}>
          <button className={styles.button} >
            <Icon name={EIcons.increase} size={18}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Увеличить
            </Text>
          </button>
        </li>

        <li className={styles.menuItem}>
          <button className={styles.button}>
            <Icon name={EIcons.decrease} size={18}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Уменьшить
            </Text>
          </button>
        </li>

        <li className={styles.menuItem}>
          <button className={styles.button}>
            <Icon name={EIcons.edit} size={18}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Редактировать
            </Text>
          </button>
        </li>

        <li className={styles.menuItem}>
          <button className={styles.button}>
            <Icon name={EIcons.delete} size={18}/>
            <Text size={16} weight={300} color={EColor.grey99}>
              Удалить
            </Text>
          </button>
        </li>

      </ul>
  );
}
