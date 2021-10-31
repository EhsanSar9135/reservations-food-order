import { ChangeEvent, FC, useState } from 'react';
import { useAppDispatch } from '../Redux/App/hooks';
import { addFoodToCustomer } from '../Redux/Features/customerSlice';

interface CustomerCardType {
   id: string;
   name: string;
   food: string[];
}

const CustomerCard: FC<CustomerCardType> = ({ id, name, food }) => {
   const [customerFoodInput, setCustomerFoodInput] = useState('');
   const dispatch = useAppDispatch();

   const addFoodChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setCustomerFoodInput(event.target.value);
   };

   const addFoodToCustomerHandler = () => {
      if (!customerFoodInput) return;
      dispatch(
         addFoodToCustomer({
            id,
            food: customerFoodInput,
         })
      );
      setCustomerFoodInput('');
   };

   return (
      <section className="customer-food-card-container">
         <p>{name}</p>
         <section className="customer-foods-container">
            <div className="customer-food">
               {food.map((item) => (
                  <p key={id}>{item}</p>
               ))}
            </div>
            <div className="customer-food-input-container">
               <input
                  value={customerFoodInput}
                  onChange={addFoodChangeHandler}
               />
               <button onClick={addFoodToCustomerHandler}>Add</button>
            </div>
         </section>
      </section>
   );
};

export default CustomerCard;
