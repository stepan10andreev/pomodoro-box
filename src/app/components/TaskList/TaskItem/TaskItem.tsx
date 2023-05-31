import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './taskitem.css';
import { Text } from '../../Text'
import { ButtonMenu } from './ButtonMenu';
import { useDispatch } from 'react-redux';
import { editTaskTitle } from '../../../store/postTask/postTask';
import { AnimatePresence, motion } from 'framer-motion';

interface ITaskItem {
  taskTitle: string;
  countTomato: number;
  taskId: string;
}

export function TaskItem({ taskTitle, countTomato, taskId }: ITaskItem) {
  const ref = useRef<HTMLInputElement>(null);
  // можно записать значение внутрь компонента  и использовать его
  // const [taskTitleValue, setTaskTitleValue] = useState(taskTitle);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isInputFocused, setInputFocused] = useState(false);

  const dispatch = useDispatch();

  // autoFocus не установит фокус (так как ререндер не происходит), поэтому смена фокуса через побочный эффект
  useEffect(() => {
    if (isInputFocused) {
      ref.current?.focus();
    }
  }, [isInputFocused])

  // меняем значения
  const activeInput = () => {
    setIsInputDisabled(false)
    setInputFocused(true)
  }
  // при потере фокуса возвращаем disabled=true и isInputFocused также надо вернуть!!!
  const onBlur = () => {
    setIsInputDisabled(true)
    setInputFocused(false)
  }
  // функция на событие onChange
  function onChangeTaskTitle (event: ChangeEvent<HTMLInputElement>) {
    // setTaskTitleValue(event.target.value)
    dispatch(editTaskTitle(event.target.value, taskId))
  }


  return (

      <motion.li
        className={styles.taskItem}
        initial={{ opacity: 0, x: 400}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5}}
        exit={{opacity: 0, x: -400}}
      >
        <div className={styles.countTomatoes}>
          {countTomato}
        </div>
        <input ref={ref} className={styles.input} type="text" value={taskTitle} onChange={onChangeTaskTitle} onBlur={onBlur} disabled={isInputDisabled}/>
        <ButtonMenu onClickActiveInput={activeInput} taskId={taskId}/>
      </motion.li>
  );
}

