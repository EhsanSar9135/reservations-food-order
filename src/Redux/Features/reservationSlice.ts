import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   value: [],
};

const reservationSlice = createSlice({
   name: 'reservation',
   initialState,
   reducers: {},
});

export default reservationSlice.reducer;
