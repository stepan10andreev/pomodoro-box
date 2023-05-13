import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postTask/postTask';

// // const store
export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})

// // // аналогичная запись с экспорта по умолчанию (но для экспорта типа корневого редьюсера нужна переменная store)
// // export default configureStore({
// //   reducer: {
// //     post: postsReducer
// //   }
// // })

// // экспорт типа корневого редьюсера для использования в useSelector в других компонентах или для создания хука useAppSelector
// // Если в configureStore одна функция, она будет напрямую использоваться как корневой редьюсер для хранилища.
// // Если это объект редьюсеров слайсов, например {users : usersReducer, posts : postsReducer}, configureStore автоматически создаст корневой редьюсер,
// // передав этот объект утилите ReduxcombineReducers .
export type RootState = ReturnType<typeof store.getState>

// // // экспорт типа dispatch такжде для создания хука для использования thunk
// // export type AppDispatch = typeof store.dispatch
// export default store

