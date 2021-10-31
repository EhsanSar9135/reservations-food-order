import { FC } from 'react';
import { useAppDispatch } from '../Redux/App/hooks';
import { removeReservation } from '../Redux/Features/reservationSlice';

export interface ReservationsCardType {
   name: string;
   index: number;
}

const ReservationCard: FC<ReservationsCardType> = ({ name, index }) => {
   const dispatch = useAppDispatch();
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
