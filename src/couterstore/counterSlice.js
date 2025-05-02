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
        }
    }
});
export const {incrementAction,decrementAction, resetAction}=counterSlice.actions;
export const counterReducer=counterSlice.reducer;
//export default counterSlice;
//3. actions and reducer defined
