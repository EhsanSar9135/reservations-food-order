import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import ReservationCard from './Components/ReservationCard';
import { useAppSelector } from './Redux/App/hooks';
import { addReservation } from './Redux/Features/reservationSlice';

const App = () => {
   const [reservationNameInput, setReservationNameInput] = useState('');
   const reservations = useAppSelector((state) => state.reservation.value);
   const dispatch = useDispatch();
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
                     {reservations.map((name) => (
                        <ReservationCard name={name} />
                     ))}
                  </section>
               </div>
               <div className="reservation-input-container">
                  <input />
                  <button>Add</button>
               </div>
            </section>
            <section className="customer-food-container">
               <div className="customer-food-card-container">
                  <p>Emma Watson</p>
                  <section className="customer-foods-container">
                     <div className="customer-food-container"></div>
                     <div className="customer-food-input-container">
                        <input
                           value={reservationNameInput}
                           onChange={changeReservationHandler}
                        />
                        <button onClick={addReservationHandler}>Add</button>
                     </div>
                  </section>
               </div>
            </section>
         </section>
      </section>
   );
};

export default App;
