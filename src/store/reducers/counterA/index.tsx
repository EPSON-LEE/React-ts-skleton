// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { addTwo } from "../counterB";


const counterSliceA = createSlice({
    name: "sliceA",
    initialState: 0,
    reducers: {
        increament(state, actiion) {
            return state as number + 1
        },
        addFive(state, action) {
            return state as number + 5
        }
    },
    extraReducers: {
        [addTwo](state, action) {
            return state + 2;
        }
    }
});

console.log(counterSliceA);
// console.log("addTwo, imported from B to A: ", addFive);

const { actions, reducer } = counterSliceA;

export const { increment, addFive } = actions;

export default reducer;
