import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface Itask {
// taskID явояется строкой а не числом!
  taskId: string;
  taskTitle: string;
  countTomato: number;
}

const initialState: Itask[] = []

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    taskAdded: {
      reducer (state, action: PayloadAction<Itask>) {
        state.push(action.payload)
      },
      prepare (taskTitle: string) {
        return {
          payload: {
            taskId: nanoid(),
            taskTitle,
            countTomato: 1
          }
        }
      },
    },

    incrementTomatoCount: {
      reducer (state, action: PayloadAction<string>) {
        const task = state.find((task) => task.taskId === action.payload)
        if (task) {
          task.countTomato += 1;
        }
      },
      prepare (taskId: string) {
        return {
          payload: taskId
        }
      },
    },

    decrementTomatoCount: {
      reducer (state, action: PayloadAction<string>) {
        const task = state.find((task) => task.taskId === action.payload)
        if (task) {
          task.countTomato -= 1;
        }
      },
      prepare (taskId: string) {
        return {
          payload: taskId
        }
      },
    },

    editTaskTitle: {
      reducer (state, action: PayloadAction<{taskTitle: string, taskId: string}>) {
        const { taskTitle, taskId } = action.payload
        const task = state.find((task) => task.taskId === taskId)
        if (task) {
          task.taskTitle = taskTitle;
        }

      },
      prepare (taskTitle: string, taskId:string) {
        return {
          payload: {
            taskTitle,
            taskId,
          }
        }
      },
    },

    deleteTask: {
      reducer (state, action: PayloadAction<string>) {
        return state.filter((task) => task.taskId !== action.payload)
      },
      prepare (taskId: string) {
        return {
          payload: taskId
        }
      },
    },
  }
})

// createSlice автоматически создается функция «создатель действия» с тем же именем
// Экспортируем этого создателя действия и используем его в наших компонентах пользовательского интерфейса для отправки действия,
export const { taskAdded, incrementTomatoCount, decrementTomatoCount, editTaskTitle, deleteTask } = taskSlice.actions;

// // экспортируем редьюсер
export default taskSlice.reducer;

// // экспортируем экшены (для метода dispatch в разным компонентах)
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// // экспортируем по умолчанию редьюсер
// export default counterSlice.reducer
