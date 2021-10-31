import { FC } from 'react';
import { useAppDispatch } from '../Redux/App/hooks';
import { addCustomer } from '../Redux/Features/customerSlice';
import { removeReservation } from '../Redux/Features/reservationSlice';
import { v4 as uuid } from 'uuid';

export interface ReservationsCardType {
   name: string;
   index: number;
}

const ReservationCard: FC<ReservationsCardType> = ({ name, index }) => {
   const dispatch = useAppDispatch();
   const removeReservationHandler = () => {
      dispatch(removeReservation(index));
      dispatch(
         addCustomer({
            id: uuid(),
            name,
            food: [],
         })
      );
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
