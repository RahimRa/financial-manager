'use client'

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import home from './slice/homeSlice'

const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('reduxState', serializedState)
  } catch (error) {
    console.error('Failed to save state to localStorage', error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.error('Failed to load state from localStorage', error)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()


const rootReducer = combineReducers({
  home,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
})


store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export type RootState = ReturnType<typeof rootReducer>
