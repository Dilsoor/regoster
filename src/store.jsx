import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../src/feature/cart/cartSlice'
export const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})