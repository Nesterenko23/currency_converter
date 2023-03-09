import { configureStore } from '@reduxjs/toolkit'
import currency from './Slices/currencySlice'
export const store = configureStore({
  reducer: {
    currency,
  },
})