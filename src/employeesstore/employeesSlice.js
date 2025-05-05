import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEmployees } from "../model/employeecrud";


/* pending */
 const fetchLength=createAsyncThunk(
    'data/fetchLength', 
    async ()=>{
         const employees=await getAllEmployees();
         return employees.length;
    }
); 


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
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchLength.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
          .addCase(fetchLength.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
          .addCase(fetchLength.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const {loadCount}=employeesSlice.actions;
export const employeesReducer=employeesSlice.reducer;