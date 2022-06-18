import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";


export const dataMangerSlicer=createSlice({
    name:'dataSlicer',
    initialState:[],
    reducers:{
        dataSlicer:(state,action)=>{
            state.push(action)
        },
        deletItem:(state,action)=>{

           return  state = (action.payload)
        }
    }
})

export const {dataSlicer,deletItem}=dataMangerSlicer.actions
export default dataMangerSlicer.reducer