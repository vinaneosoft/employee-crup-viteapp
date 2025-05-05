import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEmployees } from "../model/employeecrud";



 export const fetchLength=createAsyncThunk(
    'employeescount/fetchLength', 
    async ()=>{
         const employees=await getAllEmployees();
         console.log("thunk", employees);
         return employees;
    }
); 


const employeesSlice=createSlice({
    name:'employeescount',
    initialState:{
            value:0
    },
    reducers:{
        loadCount:(state, action)=>{
           // console.log(action.payload);
            state.value=action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchLength.fulfilled, (state, action) => {
            state.value = action.payload.length;
        })
         
    }
});

export const {loadCount}=employeesSlice.actions;
export const employeesReducer=employeesSlice.reducer;