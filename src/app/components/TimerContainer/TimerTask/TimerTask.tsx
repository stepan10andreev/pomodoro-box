import React, { useEffect, useState } from 'react';
import styles from './timertask.css';
import { EColor, Text } from '../../Text';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { Itask } from '../../../store/postTask/postTask';
import { changeChangedByTimerState } from '../../../store/buttonStates/buttonStates';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';


export function TimerTask() {
  const tasks = useAppSelector((state) => state.tasks);
  const currentTask = tasks[0];
  const decrementByMenu = useAppSelector((state) => state.buttonStates.isChangedTomatoCountByMenu);
  const decrementByTimer = useAppSelector((state) => state.buttonStates.isChangedTomatoCountByTimer);
  const theme = useAppSelector(state => state.theme);

  const stopHoverState = useAppSelector((state) => state.buttonStates.isStopButtonHovered);
  const readyHoverState = useAppSelector((state) => state.buttonStates.isReadyButtonHovered);

  const [initialTomatoNumber, setInitialTomatoNumber] = useState(1);
  const [currentCountTomato, setCurrentCountTomato] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    // начальное состояние когда таймер false (т.е. не включался) - устанавливаем оба знаечния
    if (!decrementByTimer) {
      setInitialTomatoNumber(currentTask?.countTomato)
      setCurrentCountTomato(currentTask?.countTomato)
    }
    // если помидоры уменьшаются таймером (т.е либо "Сделано" либо таймер на 0),  то устанавливаем только текущее знаечние помидоров
    if (!decrementByMenu && decrementByTimer) {
      setCurrentCountTomato(currentTask?.countTomato)
    }
    // если таймер включили и затем решили повысить количество помидоров - то увеличиваем изначальное количество помидоров на 1, и устаналиваем новое текущее значение помидоров
    if (decrementByMenu && decrementByTimer && currentTask?.countTomato > currentCountTomato) {
      setInitialTomatoNumber(prevState => prevState + 1)
      setCurrentCountTomato(currentTask?.countTomato)
    }
    // аналогично но с уменьшением
    // таким образом у нас в текущей задачи будет отображаться актуальный номер помидора даже несмотря на то что изменили количество помидоров по ходу выполнения задачи
    if (decrementByMenu && decrementByTimer && currentTask?.countTomato < currentCountTomato) {
      setInitialTomatoNumber(prevState => prevState - 1)
      setCurrentCountTomato(currentTask?.countTomato)
    }
  }, [currentTask?.countTomato, decrementByMenu, decrementByTimer])
  // обновляем изначальное количество при смене задачи путем установик таймера на false
  useEffect(() => {
    // setInitialTomatoNumber(currentTask?.countTomato)
    dispatch(changeChangedByTimerState(false))
  }, [currentTask?.taskId])

  return (
    <div className={classNames(
      styles.timerTask,
      {[styles.bgRed]: stopHoverState || readyHoverState},
      {[styles.dark]: theme === 'dark'},
    )}>
      <Text As={'div'} size={16} weight={700} color={EColor.white}>{currentTask ? currentTask.taskTitle : 'Название текущей задачи'}</Text>
      <Text  As={'div'} size={16} weight={700} color={EColor.white}>Помидор {(currentTask) ? (initialTomatoNumber - (currentCountTomato - 1)) : 1}</Text>
    </div>
  );
}
