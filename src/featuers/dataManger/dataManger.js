import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";


export const dataMangerSlicer=createSlice({
    name:'dataSlicer',
    initialState:[],
    reducers:{
        dataSlicer:(state,action)=>{
            state.push(action)
        }
    }
})

export const {dataSlicer}=dataMangerSlicer.actions
export default dataMangerSlicer.reducer