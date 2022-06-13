import {createSlice} from '@reduxjs/toolkit'

export const toggelCardSlice=createSlice({
    name:'toggelCard',
    initialState:{
    istoggle:true
    },
    reducers:{
        toggleCard:(state)=>{
            state.istoggle=!state.istoggle
        }
    }
})

export const {toggleCard}=toggelCardSlice.actions

export default toggelCardSlice.reducer