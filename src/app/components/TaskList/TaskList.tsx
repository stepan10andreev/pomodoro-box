import React from 'react';
import styles from './tasklist.css';
import { useAppSelector } from '../Hooks/useAppDispatch';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const tasks = useAppSelector((state)=> state.posts)
  console.log(tasks)
  if (tasks.length > 0) {
    return (
      <ul>
        {tasks.map((task) => (
        <TaskItem
          taskTitle={task.taskTitle}
          countTomato={task.countTomato}
          key={task.taskId}
        />))}
      </ul>
    );
  }
  return null;
}