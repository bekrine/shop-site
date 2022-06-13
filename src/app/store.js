import {configureStore} from '@reduxjs/toolkit'
import toggelReducer from '../featuers/toggelMenu/toggelMenu'
import toggleCardReducer from '../featuers/toggelcard/toggelcard'
export const store=configureStore({
    reducer:{
        toggleMenu:toggelReducer,
        toggleCard:toggleCardReducer
    }
})