import { createSlice } from "@reduxjs/toolkit";

export const toggelSlice=createSlice({
    name:'toggelMenu',
    initialState:{
        istoggle:true
    },
    reducers:{
        toggle:(state)=>{
            state.istoggle=!state.istoggle
        }
    },
})

export const{toggle}=toggelSlice.actions
export default toggelSlice.reducer