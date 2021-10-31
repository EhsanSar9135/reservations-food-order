export interface ReservationsCardType {
   name: string;
}

const ReservationCard = ({ name }: ReservationsCardType) => {
   return (
      <>
         <div className="reservation-card-container">{name}</div>
      </>
   );
};

export default ReservationCard;
