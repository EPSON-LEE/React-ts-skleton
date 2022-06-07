import { configureStore } from "@reduxjs/toolkit";
import counterAReducer, { increment as incrementA, addFive } from "./reducers/counterA";
import counterBReducer, { increment as incrementB, addTwo } from "./reducers/counterB";


const store = configureStore({
    reducer: {
        counterA: counterAReducer,
        counterB: counterBReducer
    }
})

console.log("Initial State:", store.getState());
  
export default store