import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HouseCard from '../../components/Houses/HouseCard';
import getHouses from '../../redux/actions/House/getHouses';
import getReservations from '../../redux/actions/Reservation/getReservation';

function MyReservations() {
  const dispatch = useDispatch();
  const { reservation } = useSelector((state) => state.reservations);
  const { houses } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(getReservations());
    dispatch(getHouses());
  }, [dispatch, houses.houses]);

  const house = (id) => {
    const filterdHouse = houses.filter((house) => hhouse.id === id);
    return filterdCar;
  };

  return (
    <div className="pb-4">
      <div className="flex flex-col items-center justify-center py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">Reserved Cars.</h1>
        <p className=" text-xs text-slate-400">Lists of all reservations.</p>
      </div>
      <div className="grid grid-cols-responsive px gap-4 justify-items-center">
        {reservation.length > 0 && houses.length > 0 ? (reservation.map((res) => {
          const reservedHouse = house(res.house_id)[0];
          return (
            <HouseCard
              key={res.id}
              id={reservedHouse.id}
              img={reservedHouse.photo}
              name={reservedHouse.name}
              housePrice={reservedHouse.price}
              houseLocation={reservedHouse.location}
              reservation
              reservationDate={res.date_out}
            />
          );
        })) : <div>No Reserved Houses</div> }
      </div>
    </div>
  );
}

export default MyReservations;
