import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Reservation {
   value: string[];
}

const initialState: Reservation = {
   value: [],
};

const reservationSlice = createSlice({
   name: 'reservation',
   initialState,
   reducers: {
      addReservation: (state, action: PayloadAction<string>) => {
         state.value.push(action.payload);
      },
   },
});

export const { addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
