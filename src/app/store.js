import {configureStore} from '@reduxjs/toolkit'
import toggelReducer from '../featuers/toggelMenu/toggelMenu'
import toggleCardReducer from '../featuers/toggelcard/toggelcard'
import dataMangerReducer from '../featuers/dataManger/dataManger'
export const store=configureStore({
    reducer:{
        toggleMenu:toggelReducer,
        toggleCard:toggleCardReducer,
       dataManger: dataMangerReducer
    }
})