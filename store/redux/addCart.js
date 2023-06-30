import { createSlice } from "@reduxjs/toolkit";

const addCart = createSlice({
    name: 'addCart',
    initialState: {
        carts: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.carts.push({
                id: action.payload.cartId,
                name: action.payload.cartName,
                image: action.payload.cartImage,
                price: action.payload.cartPrice,
                quantity: action.payload.cartQuantity
            });
        },
        removeProductFromCart: (state, action) => {
            state.carts.splice(state.carts.indexOf(action.payload.cartId));
        },
        updateToCart: (state, action) => {
            const { cartId, cartQuantity } = action.payload;
            const cartItem = state.carts.find(item => item.id === cartId);
            if (cartItem) {
                cartItem.quantity += cartQuantity;
            }
        },
        updateReduceToCart: (state, action) => {
            const {cartId, cartQuantity} = action.payload;
            const cartItem = state.carts.find(item => item.id == cartId);
            if(cartItem){
                cartItem.quantity -= cartQuantity;
            }
        },
        removeAllCart: (state, action) => {
            state.carts = [];
        }

    }
})
export const { addProductToCart, removeProductFromCart, updateToCart, updateReduceToCart, removeAllCart } = addCart.actions;
export default addCart.reducer;