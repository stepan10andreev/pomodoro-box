import React from 'react';
import styles from './menuweeklist.css';
import { Text } from '../../Text';
import { useDispatch } from 'react-redux';
import { chooseWeek } from '../../../store/weeks/weeks';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { changeWeekSelectMenuClickedState } from '../../../store/buttonStates/buttonStates';
import classNames from 'classnames';

export function MenuWeekList() {

  const currentWeek = useAppSelector((state) => state.weeks.currentWeek);
  const lastWeek = useAppSelector((state) => state.weeks.lastWeek);
  const twoWeeksAgo = useAppSelector((state) => state.weeks.twoWeeksAgo);
  const theme = useAppSelector(state => state.theme);

  const dispatch = useDispatch();

  const buttonClasses = classNames(
    styles.menuWeekBtn,
    {[styles.dark]: theme === 'dark'},
  )

  return (
    <ul className={styles.menuWeekList}>
      {lastWeek && (
        <>
          <li>
            <button className={buttonClasses} onClick={() => {dispatch(chooseWeek('twoWeeksAgo')), dispatch(changeWeekSelectMenuClickedState(false))}}>
              <Text size={16}>2 недели назад</Text>
            </button>
          </li>
          <li>
            <button  className={buttonClasses} onClick={() => {dispatch(chooseWeek('currentWeek')), dispatch(changeWeekSelectMenuClickedState(false))}}>
              <Text size={16}>Эта неделя</Text>
            </button>
          </li>
        </>
        )
      }
      {currentWeek && (
        <>
          <li>
            <button  className={buttonClasses} onClick={() => {dispatch(chooseWeek('lastWeek')), dispatch(changeWeekSelectMenuClickedState(false))}}>
              <Text size={16}>Прошедшая неделя</Text>
            </button>
          </li>
          <li>
            <button  className={buttonClasses} onClick={() => {dispatch(chooseWeek('twoWeeksAgo')), dispatch(changeWeekSelectMenuClickedState(false))}}>
              <Text size={16}>2 недели назад</Text>
            </button>
          </li>
        </>
        )
      }

      {twoWeeksAgo && (
        <>
          <li>
            <button  className={styles.menuWeekBtn} onClick={() => {dispatch(chooseWeek('currentWeek')), dispatch(changeWeekSelectMenuClickedState(false))}}>
              <Text size={16}>Эта неделя</Text>
            </button>
          </li>
          <li>
            <button className={styles.menuWeekBtn} onClick={() => {dispatch(chooseWeek('lastWeek')), dispatch(changeWeekSelectMenuClickedState(false))}}>
              <Text size={16}>Прошедшая неделя</Text>
            </button>
          </li>
        </>
        )
      }
  </ul>
  );
}
