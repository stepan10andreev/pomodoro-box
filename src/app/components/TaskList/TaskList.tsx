import React from 'react';
import { useAppSelector } from '../Hooks/useAppDispatch';
import { TaskItem } from './TaskItem';
import { AnimatePresence } from 'framer-motion';

export function TaskList() {
  const tasks = useAppSelector((state)=> state.tasks)
  if (tasks.length > 0) {
    return (
      <ul>
        <AnimatePresence>
        {tasks.map((task) => (
            <TaskItem
              taskTitle={task.taskTitle}
              countTomato={task.countTomato}
              key={task.taskId}
              taskId={task.taskId}
            />
            ))}
          </AnimatePresence>
      </ul>
    );
  }
  return null;
}
