// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
// import { addFive } from "../counterA";

const counterSliceB = createSlice({
  name: "sliceB",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    addTwo(state, action) {
      return state + 2;
    }
  },
  // extraReducers: {
  //   [addFive](state, action) {
  //     return state + 5;
  //   }
  // }
});

console.log(counterSliceB);

const { actions, reducer } = counterSliceB;

export const { increment, addTwo } = actions;

export default reducer;
