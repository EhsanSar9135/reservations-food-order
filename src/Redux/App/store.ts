import { configureStore } from '@reduxjs/toolkit';
import reservationSlice from '../Features/reservationSlice';

export const store = configureStore({
   reducer: {
      reservation: reservationSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
