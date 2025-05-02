import { createSlice } from "@reduxjs/toolkit";


const employeesSlice=createSlice({
    name:'employeescount',
    initialState:{
        value:0
    },
    reducers:{
        incrementCount:(state)=>{
            state.value=state.value+1; // mutable logic allowed using toolkit
        },
        decrementCount:(state)=>{
            state.value=state.value-1; 
        }
    }
});

export const {incrementCount,decrementCount}=employeesSlice.actions;
export const employeesReducer=employeesSlice.reducer;