import { configureStore } from '@reduxjs/toolkit';
import customerSlice from '../Features/customerSlice';
import reservationSlice from '../Features/reservationSlice';

export const store = configureStore({
   reducer: {
      reservations: reservationSlice,
      customers: customerSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
