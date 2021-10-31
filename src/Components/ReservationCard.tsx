import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../Redux/Features/reservationSlice';

export interface ReservationsCardType {
   name: string;
   index: number;
}

const ReservationCard: FC<ReservationsCardType> = ({ name, index }) => {
   const dispatch = useDispatch();
   const removeReservationHandler = () => {
      dispatch(removeReservation(index));
   };
   return (
      <>
         <div
            onClick={removeReservationHandler}
            className="reservation-card-container"
         >
            {name}
         </div>
      </>
   );
};

export default ReservationCard;
