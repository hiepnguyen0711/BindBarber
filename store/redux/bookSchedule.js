import { createSlice } from '@reduxjs/toolkit';


const bookSchedule = createSlice({
    name: 'bookSchedule',
    initialState: {
        // dates: {
        //     dateId: null,
        //     dateName: null,
        // },
        dates: '',
        hours: null,
        barber: '',
        service: [],
        prices: 0
    },
    reducers: {
        addBookingDay: (state, action) => {
            // state.dates.dateId = action.payload.dateId;
            state.dates = action.payload.dateName;
        },
        addBookingHours: (state, action) => {
            state.hours = action.payload.hour;
        },
        addBookingBarber: (state, action) => {
            state.barber = action.payload.barberName;
        },
        addBookingService: (state, action) => {
            state.service.push(action.payload.serviceName);
        },
        removeBookingService: (state, action) => {
            state.service.splice(state.service.indexOf(action.payload.serviceName));
        },
        removeAllBookingServices: (state) => {
            state.service = [];
        },
        addBookingPrice: (state, action) => {
            state.prices += action.payload.price;
        },
        removeBookingPrice: (state, action) => {
            state.prices -= action.payload.price;
        },
        removeAllBookingPrice: (state) => {
            state.prices = 0;
        }
    }
});

export const { addBookingDay, addBookingHours, addBookingBarber, addBookingService, removeBookingService, removeAllBookingServices, addBookingPrice, removeBookingPrice, removeAllBookingPrice } = bookSchedule.actions; // Thay đổi tên action thành addBooking
export default bookSchedule.reducer;