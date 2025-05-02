import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEmployees } from "../model/employeecrud";


/* pending */
/* const fetchLength=createAsyncThunk(
    'data/fetchInitialData', 
    async ()=>{
         const employees=await getAllEmployees();
         return employees.length;
    }
); */


const employeesSlice=createSlice({
    name:'employeescount',
    initialState:{
        value: 0
    },
    
    reducers:{
        loadCount:(state, action)=>{
           // console.log(action.payload);
            state.value=action.payload;
        },
    }
});

export const {loadCount}=employeesSlice.actions;
export const employeesReducer=employeesSlice.reducer;