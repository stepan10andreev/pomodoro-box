import React, { useState } from 'react';
import styles from './weekselect.css';
import { Dropdown } from '../Dropdown';
import { Icon, EIcons } from '../Icon';
import { EColor, Text } from '../../components/Text';
import { MenuWeekList } from './MenuWeekList';
import { useWeeks } from '../Hooks/useWeeks';
import { changeWeekSelectMenuClickedState } from '../../store/buttonStates/buttonStates';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../Hooks/useAppDispatch';
import classNames from 'classnames';

export function WeekSelect() {
  const [isClicked, setIsClicked] = useState(false);
  const { isCurrentWeek, isLastWeek} = useWeeks();
  const isSelectClicked = useAppSelector((state) => state.buttonStates.isWeekSelectMenuClicked);
  const theme = useAppSelector(state => state.theme);

  const dispatch = useDispatch();


  //Диспатч не нужен setClicked можноп ередать внутрь MenuWeekList и там его обновлять!!!!
  return (
    <div className={isSelectClicked ? styles.weekSelectOpen : styles.weekSelect}>
      <Dropdown
        button={
          <button
            className={classNames(
              styles.button,
              {[styles.dark]: theme === 'dark'},
            )}
            onClick={() => {setIsClicked(!isClicked), dispatch(changeWeekSelectMenuClickedState(!isSelectClicked))}}
          >
            <Text size={16}>
              {isCurrentWeek ? 'Эта неделя' : isLastWeek ? 'Прошедшая неделя' : '2 недели назад'}
            </Text>
            <Icon name={EIcons.arrowDown}/>
          </button>
        }
      >
        <MenuWeekList />
      </Dropdown>
    </div>
  );
}
