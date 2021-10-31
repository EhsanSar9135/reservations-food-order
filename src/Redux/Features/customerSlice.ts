import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
   id: string;
   name: string;
   food: string[];
}

interface Customers {
   value: Customer[];
}

const initialState: Customers = {
   value: [],
};

const customerSlice = createSlice({
   name: 'customers',
   initialState,
   reducers: {
      addCustomer: (state, action: PayloadAction<Customer>) => {
         state.value.push(action.payload);
      },
   },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
