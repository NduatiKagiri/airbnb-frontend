import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Buttons/Loading';
import HouseDetail from '../../components/Houses/HouseDetail';
import getHouses from '../../redux/actions/House/getHouses';

function Reservation() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const [ReserveOpener, setReserveOpener] = useState(true);

  const toggleReservation = () => {
    setReserveOpener(!ReserveOpener);
  };

  useEffect(() => {
    dispatch(getHouses());
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
            src={house.photo}
            alt={house.name}
            className="rounded-3xl max-h-screen w-11/12 md:w-full object-cover"
          />
          <HouseDetail
            id={Number(id)}
            name={house.name}
            houseLocation={house.location}
            housePrice={house.price}
            toggleReservation={toggleReservation}
            ReserveOpener={ReserveOpener}
          />
        </>
      ) : <Loading message="Loading House information..." /> }
    </section>
  );
}

export default Reservation;
