
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./couterstore/counterSlice";
import { employeesReducer } from "./employeesstore/employeesSlice";
const store=configureStore({
   reducer: {
      counter:counterReducer, 
      empcounter:employeesReducer// key is user defined, value is reducer imported from slice
   }
});


export default store;

//1. store created

//4. congifured reducer in the store