import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HouseCard from '../../components/House/HouseCard';
import getReservations from '../../redux/actions/Reservation/getReservation';
import getHouse from '../../redux/actions/Car/getHouse';

function MyReservations() {
  const dispatch = useDispatch();
  const { reservation } = useSelector((state) => state.reservation);
  const { houses } = useSelector((state) => state.house);

  useEffect(() => {
    dispatch(getReservations());
    dispatch(getHouse());
  }, [dispatch, houses.houses]);

  const house = (id) => {
    const filterdHouse = houses.filter((hou) => hou.id === id);
    return filterdHouse;
  };

  return (
    <div className="pb-4">
      <div className="flex flex-col items-center justify-center py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">Reserved Cars.</h1>
        <p className=" text-xs text-slate-400">Lists of all reservations.</p>
      </div>
      <div className="grid grid-cols-responsive px gap-4 justify-items-center">
        {reservation.length > 0 && houses.length > 0 ? (reservation.map((res) => {
          const reservedCar = house(res.house_id)[0];
          return (
            <HouseCard
              key={res.id}
              id={reservedCar.id}
              img={reservedCar.image}
              name={reservedCar.name}
              housePrice={reservedCar.fee_per_day}
              reservation
              reservationDate={res.reservation_date}
            />
          );
        })) : <div>No Reserved Cars</div> }
      </div>
    </div>
  );
}

export default MyReservations;
