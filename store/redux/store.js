import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../redux/bookSchedule';

export const store = configureStore({
    reducer:{
        booking: bookingReducer
    }
});