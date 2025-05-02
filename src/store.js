
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./couterstore/counterSlice";
const store=configureStore({
   reducer: {
      counter:counterReducer // key is user defined, value is reducer imported from slice
   }
});


export default store;

//1. store created

//4. congifured reducer in the store