import React, { MouseEvent, useEffect, useMemo, useState } from 'react';
import styles from './timer.css';
import { EColor, Text } from '../../Text';
import { EIcons, Icon } from '../../Icon';
import { getPadTime } from '../../../utils/getPadTime';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
import { decrementTomatoCount, deleteTask } from '../../../store/postTask/postTask';
import { changeChangedByMenuState, changeChangedByTimerState, changeReadyBtnHoverState, changeStopBtnHoverState } from '../../../store/buttonStates/buttonStates';
import { getWeekDay } from '../../../utils/getWeekDay';
import { IDays } from '../../StatisticBarChart/statisticsData';
import { resetDayStatistics, setDayStatistics } from '../../../store/statisticsData/dayStatistics';

const defaultDayObj = {
  day: '',
  workTime: 0,
  doneTime: 0,
  pauseTime: 0,
  focusProcent: 0,
  countStops: 0,
  countTomato: 0,
}

export function Timer() {
  const tasks = useAppSelector((state) => state.tasks);
  const todayIs = useAppSelector(state => state.entryDate);

  const currentTask = tasks[0];

  const dispatch = useDispatch();

  const [dayObject, setDayObject] = useState<IDays>(defaultDayObj);

  const [timer, setTimer] = useState(5);
  const [isCountDowning, setIsCountDowning] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [isHoveredStop, setIsHoveredStop] = useState(false);


  // используем утилиту для того чтобы добавить 0 если секунды или минуты меньше 10
  // minutesValue нужна для вычисления seconds, так как minutes уже является строкой и будет ошибка в вычислениежд
  const minutesValue = Math.floor(timer / 60);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - minutesValue * 60);

  useEffect(() => {
    const interval = setInterval(() =>{
      isCountDowning &&
        setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000)

    if (currentTask?.countTomato === 0) dispatch(deleteTask(currentTask.taskId));
    if (!currentTask) setTimer(5);
    return (() => {
      clearInterval(interval);
    })
  }, [currentTask?.countTomato, isCountDowning])

  // при изменениях таймера и переменной ПЕРЕРЫВА
  useEffect(() => {
    if (timer === 0 && !isBreaking) {
      setIsCountDowning(false);
      // setDayObject(prevState => ({...prevState, countTomato: prevState['countTomato'] + 1}));
      dispatch(setDayStatistics('countTomato'))
      dispatch(decrementTomatoCount(currentTask?.taskId));
      dispatch(changeChangedByMenuState(false))
      setIsBreaking(true);
      setTimer(3);
    }
    if (timer === 0 && isBreaking) {
      setIsCountDowning(false);
      setIsBreaking(false);
      setTimer(5);
    }
  }, [timer, isBreaking])

  // после смены теущей задачи - устаналиваем таймер и возвращаем isBreaking false
  useEffect(() => {
    setTimer(5);
    setIsBreaking(false);
  }, [currentTask?.taskId])

  useEffect(() => {
    isCountDowning && dispatch(setDayStatistics('workTime'));
    // setDayObject(prevState => ({...prevState, workTime: prevState['workTime'] + 1}));
  }, [timer])

  useEffect(() => {
    const interval = setInterval(() =>{
      isPausing &&
        dispatch(setDayStatistics('pauseTime'));
        // setDayObject(prevState => ({...prevState, pauseTime: prevState['pauseTime'] + 1}))
    }, 1000)
    return (() => {
      clearInterval(interval);
    })
  }, [isPausing])

  useEffect(() => {
    if (todayIs.day) {
      const NOW = new Date();
      const NOW_DAY = NOW.getDate();
      if (todayIs.numberDay != NOW_DAY) {
        console.log('День сменился');
        // setDayObject(defaultDayObj);
        dispatch(resetDayStatistics());
        // push objstat in store
      }
    }
  }, [])

  const handleStart = () => {
    if (isPausing) {
      setIsPausing(!isPausing)
    }
    setIsCountDowning(true);
    setIsHoveredStop(false);
    dispatch(changeStopBtnHoverState(false));
    dispatch(changeReadyBtnHoverState(false));
    dispatch(changeChangedByTimerState(true))
    // console.log(todayDay)
  };

  const handleStop = () => {
    if (isBreaking) {
      setIsBreaking(false);
      setTimer(5); //// можно ли убрать?
    }
    !isBreaking && dispatch(setDayStatistics('countStops'));
      // setDayObject(prevState => ({...prevState, countStops: prevState['countStops'] + 1})) :
      // setDayObject(prevState => ({...prevState, countStops: prevState['countStops']}));
    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(5);
  };

  const handlePause = () => {
    setIsCountDowning(false);
    setIsPausing(true);
  };

  const handleReady = () => {
    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(5);
    // setCountTomato(countTomato => countTomato + 1)
    // setDayObject(prevState => ({...prevState, countTomato: prevState['countTomato'] + 1}))
    dispatch(setDayStatistics('countTomato'));
    dispatch(decrementTomatoCount(currentTask.taskId));
    dispatch(changeChangedByMenuState(false))
  };

  const handleAddTime = () => {
    setTimer((timer) => timer + 60);
  }

  const onMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement
    const typeButton = button.firstChild?.textContent;
    if (typeButton === 'Сделано') {
      dispatch(changeReadyBtnHoverState(true))
    }
    if (typeButton === 'Стоп') {
      setIsHoveredStop(true);
      dispatch(changeStopBtnHoverState(true))
    }
  }

  const onMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement
    const typeButton = button.firstChild?.textContent;
    console.log(typeButton)
    if (typeButton === 'Сделано') {
      dispatch(changeReadyBtnHoverState(false))
    }
    if (typeButton === 'Стоп') {
      setIsHoveredStop(false);
      dispatch(changeStopBtnHoverState(false))
    }
  }


  return (
    <div className={styles.timer}>

      <div className={styles.wrapper + ' ' + (isHoveredStop ? styles.stopClicked : '')}>
        <Text As={'div'} size={150} weight={200}>
          {minutes}
        </Text>
        <Text As={'div'} size={150} weight={200}>
          :
        </Text>
        <Text As={'div'} size={150} weight={200}>
          {seconds}
        </Text>
        <button onClick={handleAddTime} className={styles.addTimeBtn}>
          <Icon name={EIcons.addBtn} size={50}/>
        </button>
      </div>

      <div className={styles.title}>
        <Text size={16} color={EColor.grey99}>Задача 1 - </Text>
        <Text size={16}>{currentTask ? currentTask.taskTitle : 'Текущая задача не добавлена'}</Text>
      </div>

      <div className={styles.timerButtonsWrapper}>

        {isCountDowning ? (
          <button
            onClick={handlePause}
            className={styles.startButton}
          >
            <Text size={16} weight={500} color={EColor.white}>Пауза</Text>
          </button>
        ) : (
          <button
            onClick={handleStart}
            className={styles.startButton}
            disabled={currentTask ? false : true}
          >
            <Text size={16} weight={500} color={EColor.white}>{isPausing && currentTask ? 'Продолжить' : 'Старт'}</Text>
          </button>
        )}

        {isPausing && !isBreaking && currentTask ? (
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleReady}
            className={styles.stopButton}
          >
            <Text size={16} weight={500} color={EColor.red}>Сделано</Text>
          </button>
        ) : (
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleStop}
            className={styles.stopButton}
            disabled={currentTask && isCountDowning ? false : true}
          >
            <Text size={16} weight={500} color={EColor.red}>{isBreaking ? 'Пропустить' : 'Стоп'}</Text>
          </button>
        )}

      </div>
    </div>
  );
}
