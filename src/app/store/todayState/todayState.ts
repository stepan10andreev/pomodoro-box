import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IToday {
  day: string;
  // numberDay: number;
  // numberMonth: number;
  msDate: number;
}

const initialState: IToday = {
  msDate: 0,
  day: '',
  // numberDay: 0,
  // numberMonth: 0,
}



const todaySlice = createSlice({
  name: 'todayIs',
  initialState,
  reducers: {
    setTodayDate: {
      reducer (state, action: PayloadAction<IToday>) {
        state.msDate =  action.payload.msDate;
        state.day = action.payload.day;
      },
      prepare ( day: string, msDate: number ) {
        return {
          payload: {
            day,
            msDate
          }
        }
      }
    },
  }
})

export const { setTodayDate } = todaySlice.actions;

export default todaySlice.reducer;
