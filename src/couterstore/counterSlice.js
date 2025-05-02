import { createSlice } from "@reduxjs/toolkit";



const counterSlice=createSlice({

    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        incrementCounter:(state)=>{
            state.value=state.value+1; // mutable logic allowed using toolkit
        },
        decrementCounter:(state)=>{
            state.value=state.value-1; 
        }
    }
});

export const {incrementCounter,decrementCounter}=counterSlice.actions;
export const counterReducer=counterSlice.reducer;


//export default counterSlice;


//3. actions and reducer defined
