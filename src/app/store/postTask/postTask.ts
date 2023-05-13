import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface Itask {
// taskID явояется строкой а не числом!
  taskId: string;
  taskTitle: string;
  countTomato: number;
}

const initialState: Itask[] = []

const postTask = createSlice({
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
      }
    }
  }
})

// createSlice автоматически создается функция «создатель действия» с тем же именем
// Экспортируем этого создателя действия и используем его в наших компонентах пользовательского интерфейса для отправки действия,
export const { taskAdded } = postTask.actions;

// // экспортируем редьюсер
export default postTask.reducer;

// // экспортируем экшены (для метода dispatch в разным компонентах)
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// // экспортируем по умолчанию редьюсер
// export default counterSlice.reducer
