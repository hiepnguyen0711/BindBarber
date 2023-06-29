import { createSlice } from "@reduxjs/toolkit";

const addCart = createSlice({
    name: 'addCart',
    initialState: {
        carts: [],
    },
    reducers:{
        addProductToCart: (state, action) => {
            state.carts.push({
                id: action.payload.cartId,
                name: action.payload.cartName,
                image: action.payload.cartImage,
                price: action.payload.cartPrice
            });
        },
        removeProductFromCart: (state, action) => {
            state.carts.splice(state.carts.indexOf(action.payload.cartId));
        }
    }
})
export const {addProductToCart, removeProductFromCart} = addCart.actions;
export default addCart.reducer;