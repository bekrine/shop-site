import {configureStore} from '@reduxjs/toolkit'
import toggelReducer from '../featuers/toggelMenu/toggelMenu'

export const store=configureStore({
    reducer:{
        toggleMenu:toggelReducer
    }
})