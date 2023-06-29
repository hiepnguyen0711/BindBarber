import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../redux/bookSchedule';
import addCart from '../redux/addCart';

export const store = configureStore({
    reducer:{
        booking: bookingReducer,
        cartProduct: addCart
    }
});