import { configureStore } from '@reduxjs/toolkit'
import toursSlice from './slices/tours-slice'

export const store = configureStore({
  reducer: {
    tours : toursSlice,
  }
})