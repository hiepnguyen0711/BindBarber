import { createSlice} from '@reduxjs/toolkit';


const bookSchedule = createSlice({
    name: 'bookSchedule',
    initialState: {
        dates: {
            dateId: null,
            dateName: null,
        },
        hours: null,
        barber: '',
        service: []
    },
    reducers:{
        addBooking: (state, action) => {
            state.dates.dateId = action.payload.date;
            state.dates.dateName = action.payload.dateName;
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
        }
    }
});

export const { addBooking, addBookingHours, addBookingBarber, addBookingService, removeBookingService } = bookSchedule.actions; // Thay đổi tên action thành addBooking
export default bookSchedule.reducer;