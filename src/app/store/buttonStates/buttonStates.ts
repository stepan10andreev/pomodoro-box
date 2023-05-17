import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IButtonStates {
  isStopButtonClicked: boolean;
  isStopButtonHovered: boolean;
  isReadyButtonClicked: boolean;
  isReadyButtonHovered: boolean;
}

const initialState: IButtonStates = {
  isStopButtonClicked: false,
  isStopButtonHovered: false,
  isReadyButtonClicked: false,
  isReadyButtonHovered: false,
}

const buttonStatesSlice = createSlice({
  name: 'buttonStates',
  initialState,
  reducers: {
    changeStopBtnHoverState: {
      reducer (state, action: PayloadAction<boolean>) {
        state.isStopButtonHovered = action.payload;
      },
      prepare (btnState: boolean) {
        return {
          payload: btnState,
        }
      }
    },
    changeReadyBtnHoverState: {
      reducer (state, action: PayloadAction<boolean>) {
        state.isStopButtonHovered = action.payload;
      },
      prepare (btnState: boolean) {
        return {
          payload: btnState,
        }
      }
    }
  }
})

export const { changeStopBtnHoverState, changeReadyBtnHoverState } = buttonStatesSlice.actions;

export default buttonStatesSlice.reducer;
