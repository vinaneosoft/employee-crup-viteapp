
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./couterstore/counterSlice";
const store=configureStore({
   reducer: {counterReducer}// we will configure the reducer here once we create it
});


export default store;

//1. store created