import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Buttons/Loading';
import HouseDetails  from '../../components/House/HouseDetail';
import getHouse from '../../redux/actions/House/getHouse';

function Reservation() {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.house);

  const [ReserveOpener, setReserveOpener] = useState(true);

  const toggleReservation = () => {
    setReserveOpener(!ReserveOpener);
  };

  useEffect(() => {
    dispatch(getHouse());
  }, [dispatch]);

  const { id } = useParams();

  const house = houses.filter((house) => house.id === Number(id))[0];

  return (
    <section
      className="grid md:grid-cols-[4fr,_1fr] gap-3 items-center justify-between p-4  md:p-8 md:pt-8 "
      id="Reservation"
    >
      {house && house.id ? (
        <>
          <img
            src={house.image}
            alt={house.name}
            className="rounded-3xl max-h-screen w-11/12 md:w-full object-cover"
          />
          <HouseDetails
            id={Number(id)}
            name={car.name}
            houseType={house.type}
            HousePrice={house.fee_per_day}
            toggleReservation={toggleReservation}
            ReserveOpener={ReserveOpener}
          />
        </>
      ) : <Loading message="Loading Car information..." /> }
    </section>
  );
}

export default Reservation;
