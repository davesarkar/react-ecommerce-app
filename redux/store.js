import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../redux/counterSlice'
import cartSlice from './cartSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice
  },
})
