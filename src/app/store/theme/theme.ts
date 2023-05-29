import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ITheme = string;


const initialState: ITheme = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => action.payload,
  }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
