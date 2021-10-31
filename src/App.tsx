import { ChangeEvent, useState } from 'react';
import './App.css';
import CustomerCard from './Components/CustomerCard';
import ReservationCard from './Components/ReservationCard';
import { useAppDispatch, useAppSelector } from './Redux/App/hooks';
import { addReservation } from './Redux/Features/reservationSlice';

const App = () => {
   // UseStates
   const [reservationNameInput, setReservationNameInput] = useState('');

   // Redux Hooks
   const reservations = useAppSelector((state) => state.reservations.value);
   const customers = useAppSelector((state) => state.customers.value);
   const dispatch = useAppDispatch();

   // Event Handlers
   const changeReservationHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setReservationNameInput(event.target.value);
   };
   const addReservationHandler = () => {
      if (!reservationNameInput) return;
      dispatch(addReservation(reservationNameInput));
      setReservationNameInput('');
   };

   return (
      <section className="App">
         <section className="container">
            <section className="reservation-container">
               <div>
                  <h5 className="reservation-header">Reservations</h5>
                  <section className="reservation-cards-container">
                     {reservations.map((name, index) => (
                        <ReservationCard
                           key={index}
                           name={name}
                           index={index}
                        />
                     ))}
                  </section>
               </div>
               <div className="reservation-input-container">
                  <input
                     value={reservationNameInput}
                     onChange={changeReservationHandler}
                  />
                  <button onClick={addReservationHandler}>Add</button>
               </div>
            </section>
            <section className="customer-food-container">
               {customers.map((customer) => (
                  <CustomerCard />
               ))}
            </section>
         </section>
      </section>
   );
};

export default App;
