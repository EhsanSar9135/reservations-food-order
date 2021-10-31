import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
   id: string;
   name: string;
   food: string[];
}

interface Customers {
   value: Customer[];
}

interface AddFoodToCustomerPayload {
   id: string;
   food: string;
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
      addFoodToCustomer: (
         state,
         action: PayloadAction<AddFoodToCustomerPayload>
      ) => {
         state.value.forEach((customer) => {
            if (customer.id === action.payload.id) {
               customer.food.push(action.payload.food);
            }
         });
      },
   },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
