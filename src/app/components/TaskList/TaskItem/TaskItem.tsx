import React, { ChangeEvent, useState } from 'react';
import styles from './taskitem.css';
import { Text } from '../../Text'
import { ButtonMenu } from './ButtonMenu';
import { useDispatch } from 'react-redux';
import { editTaskTitle } from '../../../store/postTask/postTask';

interface ITaskItem {
  taskTitle: string;
  countTomato: number;
  taskId: string;
}

export function TaskItem({ taskTitle, countTomato, taskId }: ITaskItem) {
  // можно записать значение внутрь компонента  и использовать его
  // const [taskTitleValue, setTaskTitleValue] = useState(taskTitle);
  const dispatch = useDispatch();

  function onChangeTaskTitle (event: ChangeEvent<HTMLInputElement>) {
    // setTaskTitleValue(event.target.value)
    dispatch(editTaskTitle(event.target.value, taskId))
  }

  return (
    <li className={styles.taskItem}>
      <div className={styles.countTomatoes}>
        {countTomato}
      </div>
      {/* <Text size={16} weight={300}>{taskTitle}</Text> */}
      <input className={styles.input} type="text" value={taskTitle} onChange={onChangeTaskTitle}/>
      <ButtonMenu />
    </li>
  );
}

