import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from './postTask/postTask';
import buttonsStateReducer from './buttonStates/buttonStates';
import weeksReducer from './weeks/weeks';
import todayReducer from './todayState/todayState';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/es/storage";

// redux-toolkit + redux-persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['buttonstates']
  // serialize: true,
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
  buttonstates: buttonsStateReducer,
  weeks: weeksReducer,
  today: todayReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)


// // redux-toolkit
// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     buttonstates: buttonsStateReducer,
//     weeks: weeksReducer,
//   }
// })

// // // аналогичная запись с экспорта по умолчанию (но для экспорта типа корневого редьюсера нужна переменная store)
// // export default configureStore({
// //   reducer: {
// //     post: postsReducer
// //   }
// // })

// // экспорт типа корневого редьюсера для использования в useSelector в других компонентах или для создания хука useAppSelector
// // Если в configureStore одна функция, она будет напрямую использоваться как корневой редьюсер для хранилища.
// // Если это объект редьюсеров слайсов, например {users : usersReducer, posts : postsReducer}, configureStore автоматически создаст корневой редьюсер,
// // передав этот объект утилите ReduxcombineReducers.
export type RootState = ReturnType<typeof store.getState>


// // // экспорт типа dispatch такжде для создания хука для использования thunk
// export type AppDispatch = typeof store.dispatch
// export default store

