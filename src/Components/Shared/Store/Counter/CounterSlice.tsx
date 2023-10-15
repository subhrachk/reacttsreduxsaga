import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./CounterState";
import { RootState } from "../../../../store";

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrementCounter : (state, action : PayloadAction<number>) => {state.count = state.count - action.payload},
  },
});

export const {incrementCounter,decrementCounter} = counterSlice.actions;

export const SelectCounter = (state : RootState) => state.counter;

export default counterSlice.reducer;
