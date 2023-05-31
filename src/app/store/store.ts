import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from './postTask/postTask';
import buttonsStateReducer from './buttonStates/buttonStates';
import weeksReducer from './weeks/weeks';
import todayReducer from './entryDateState/entryDateState';
import statisticsReducer from './statisticsData/statisticsData';
import dayStatisticsReducer from './statisticsData/dayStatistics';
import longBreakReducer from './longBreakState/longBreakState';
import numberClickedBarReducer from './numberClickedBar/numberClickedBar';
import themeReducer from './theme/theme';
import settingsReducer from './settings/settings';


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
  blacklist: ['buttonStates']
  // serialize: true,
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
  buttonStates: buttonsStateReducer,
  weeks: weeksReducer,
  entryDate: todayReducer,
  statisticsData: statisticsReducer,
  dayStatistics: dayStatisticsReducer,
  tomatoLongBreak: longBreakReducer,
  numberClickedBar: numberClickedBarReducer,
  theme: themeReducer,
  settings: settingsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false
    }),
})

export const persistor = persistStore(store)


// // only redux-toolkit
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

export type RootState = ReturnType<typeof store.getState>



