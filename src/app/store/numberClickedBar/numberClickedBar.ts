import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IClickedBar {
  clickedBar: number | null;
}

const initialState: IClickedBar = {
  clickedBar: null
}

// const initialState: null | number = null;

const numberClickedBarSlice = createSlice({
  name: 'numberClickedBar',
  initialState,
  reducers: {
    setClickedBarNum: {
      reducer (state, action: PayloadAction<number>) {
        state.clickedBar = action.payload;
      },
      prepare (barNum: number) {
        return {
          payload: barNum,
        }
      }
    },
    resetClickedBarNum: {
      reducer (state, action: PayloadAction<string>) {
        state.clickedBar = null;
      },
      prepare () {
        return {
          payload: '',
        }
      }
    },
  }
})

export const { setClickedBarNum, resetClickedBarNum } = numberClickedBarSlice.actions;

export default numberClickedBarSlice.reducer;
