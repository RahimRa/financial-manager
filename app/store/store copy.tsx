'use client'

import { configureStore } from '@reduxjs/toolkit'
import home from './slice/homeSlice'


const rootReducer = {
  home,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
