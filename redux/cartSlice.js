import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart: [],
        itemCount: 0,
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            state.total = 0
            for(let item of state.cart){
                state.total += item.count * item.data.price
            }
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload,1)
            state.total = 0
            for(let item of state.cart){
                state.total += item.count * item.data.price
            }
        },
        // getItemCount: (state) => {
        //     state.itemCount = ()=>{
        //         let count = 0
        //         for(let item of state.cart){
        //             count += item.count
        //         }
        //         return count
        //     }
        // },
        // getTotalAmount: (state) => {
        //     state.total = () => {
        //         let total = 0
        //         for(let item of state.cart){
        //             total += item.count * item.data.price
        //         }
        //         return total
        //     }
        // }
    }
})

export const { addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer