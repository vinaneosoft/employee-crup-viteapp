import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        incrementAction:(state)=>{
            state.value=state.value+1; // mutable logic allowed using toolkit
        },
        decrementAction:(state)=>{
            state.value=state.value-1; 
        },
        resetAction:(state)=>{
            state.value=0;
        },
        incrementWithPayload:(state,action)=>{
            state.value=state.value+action.payload; 
        },
        decrementWithPayload:(state,action)=>{
            state.value=state.value-action.payload; 
        }
    }
});
export const {incrementAction,decrementAction, resetAction, incrementWithPayload, decrementWithPayload}=counterSlice.actions;
export const counterReducer=counterSlice.reducer;
//export default counterSlice;
//3. actions and reducer defined
