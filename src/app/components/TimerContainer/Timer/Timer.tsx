import React, { MouseEvent, useEffect, useState } from 'react';
import styles from './timer.css';
import { EColor, Text } from '../../Text';
import { EIcons, Icon } from '../../Icon';
import { getPadTime } from '../../../utils/getPadTime';
import { useAppSelector } from '../../Hooks/useAppDispatch';
import { useDispatch } from 'react-redux';
import { decrementTomatoCount, deleteTask } from '../../../store/postTask/postTask';
import { changeChangedByMenuState, changeChangedByTimerState, changeReadyBtnHoverState, changeStopBtnHoverState } from '../../../store/buttonStates/buttonStates';
import { getWeekDay } from '../../../utils/getWeekDay';
import { resetDayStatistics, setDayStatistics } from '../../../store/statisticsData/dayStatistics';
import { addDayStatistic } from '../../../store/statisticsData/statisticsData';
import { setTodayDate } from '../../../store/entryDateState/entryDateState';
import { addTomatoForLongBreak, resetTomatoForLongBreak } from '../../../store/longBreakState/longBreakState';
import classNames from 'classnames';
import useSound from 'use-sound';
import sound from '../../../../assets/sounds/sound_timer-is-off.mp3';
import doneSound from '../../../../assets/sounds/done-sound.mp3';
import { Title } from 'chart.js/dist/plugins/plugin.title';

export function Timer() {
  const settings = useAppSelector((state) => state.settings)
  const timerValueSec = settings.tomatoDuration * 60;

  const tasks = useAppSelector((state) => state.tasks);
  const currentTask = tasks[0];

  const lastEntry = useAppSelector(state => state.entryDate);
  const dayStatistics = useAppSelector(state => state.dayStatistics);
  const tomatoForLongBreak = useAppSelector(state => state.tomatoLongBreak.tomatoForLongBreak);
  const theme = useAppSelector(state => state.theme);

  const [timer, setTimer] = useState(timerValueSec);
  const [isCountDowning, setIsCountDowning] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [isHoveredStop, setIsHoveredStop] = useState(false);
  const [play] = useSound(sound);
  const [playReady] = useSound(doneSound);

  const dispatch = useDispatch();

  // используем утилиту для того чтобы добавить 0 если секунды или минуты меньше 10
  // minutesValue нужна для вычисления seconds, так как minutes уже является строкой и будет ошибка в вычисление
  const minutesValue = Math.floor(timer / 60);
  const minutes = getPadTime(Math.floor(timer / 60));
  const seconds = getPadTime(timer - minutesValue * 60);

  useEffect(() => {
    const interval = setInterval(() =>{
      isCountDowning &&
        setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000)

    if (currentTask?.countTomato === 0) dispatch(deleteTask(currentTask.taskId));
    if (!currentTask) setTimer(timerValueSec);
    if (tomatoForLongBreak === settings.longBreakFrequency) {
      setIsBreaking(true);
      // setTimer(10)
      setTimer(settings.longBreakDuration * 60);
      dispatch(resetTomatoForLongBreak());
    }
    return (() => {
      clearInterval(interval);
    })
  }, [currentTask?.countTomato, isCountDowning])

  // при изменениях таймера и переменной ПЕРЕРЫВА
  useEffect(() => {
    if (timer === 0 && !isBreaking) {
      setIsCountDowning(false);
      dispatch(setDayStatistics('countTomato'));
      dispatch(decrementTomatoCount(currentTask?.taskId));
      dispatch(changeChangedByMenuState(false));
      dispatch(addTomatoForLongBreak());
      setIsBreaking(true);
      setTimer(settings.shortBreakDuration * 60);
      // setTimer(3)
    }
    if (timer === 0 && isBreaking) {
      setIsCountDowning(false);
      setIsBreaking(false);
      setTimer(timerValueSec);
    }
  }, [timer, isBreaking])

  // после смены теущей задачи - устаналиваем таймер и возвращаем isBreaking false
  useEffect(() => {
    setTimer(timerValueSec);
    setIsBreaking(false);
  }, [currentTask?.taskId])

  // только при изменении таймера
  useEffect(() => {
    isCountDowning && dispatch(setDayStatistics('workTime'));
    isCountDowning && !isBreaking && dispatch(setDayStatistics('doneTime'))
    if (timer === 0) play();
  }, [timer])

  useEffect(() => {
    const interval = setInterval(() =>{
      isPausing && !isBreaking &&
        dispatch(setDayStatistics('pauseTime'));
    }, 1000)
    return (() => {
      clearInterval(interval);
    })
  }, [isPausing])

  useEffect(() => {
    if (lastEntry.dayName) {
      const NOW = new Date();
      if (NOW.getDate() != lastEntry.day || NOW.getMonth() != lastEntry.month || NOW.getFullYear() != lastEntry.year) {
        dispatch(addDayStatistic(dayStatistics));
        dispatch(resetDayStatistics());
        // диспатч нового дня
        dispatch(setTodayDate(getWeekDay(NOW), NOW.getDate(), NOW.getTime(), NOW.getMonth(), NOW.getFullYear()));
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
    dispatch(changeChangedByTimerState(true));
  };

  const handleStop = () => {
    if (isBreaking) {
      setIsBreaking(false);
      setTimer(timerValueSec);
    }

    !isBreaking && dispatch(setDayStatistics('countStops'));

    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(timerValueSec);
  };

  const handlePause = () => {
    setIsCountDowning(false);
    setIsPausing(true);
  };

  const handleReady = () => {
    setIsCountDowning(false);
    setIsPausing(false);
    setTimer(timerValueSec);

    if(!isBreaking) {
      setIsBreaking(true);
      setTimer(settings.shortBreakDuration * 60);
      // setTimer(3)
    }

    dispatch(setDayStatistics('countTomato'));
    dispatch(decrementTomatoCount(currentTask.taskId));
    dispatch(changeChangedByMenuState(false));
    dispatch(addTomatoForLongBreak());
    playReady(doneSound);
  };

  const handleAddTime = () => {
    setTimer((timer) => timer + 60);
  }

  const onMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const typeButton = button.firstChild?.textContent;
    if (typeButton === 'Сделано') {
      dispatch(changeReadyBtnHoverState(true));
    }
    if (typeButton === 'Стоп') {
      setIsHoveredStop(true);
      dispatch(changeStopBtnHoverState(true));
    }
  }

  const onMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const typeButton = button.firstChild?.textContent;
    if (typeButton === 'Сделано') {
      dispatch(changeReadyBtnHoverState(false));
    }
    if (typeButton === 'Стоп') {
      setIsHoveredStop(false);
      dispatch(changeStopBtnHoverState(false));
    }
  }


  return (
    <div className={classNames(
      styles.timer,
      { [styles.dark]: theme === 'dark'})}
    >

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
            className={classNames(
              styles.startButton,
              {[styles.dark]: theme === 'dark'},
            )}
          >
            <Text size={16} weight={500} color={EColor.white}>Пауза</Text>
          </button>
        ) : (
          <button
            onClick={handleStart}
            className={classNames(
              styles.startButton,
              {[styles.dark]: theme === 'dark'},
            )}
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
