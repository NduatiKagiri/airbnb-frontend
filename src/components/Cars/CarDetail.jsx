import React from 'react';
import PropTypes from 'prop-types';

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ReserveCar from './ReserveCar';

function CarDetail({
  id,
  name,
  carLocation,
  carPrice,
  toggleReservation,
  ReserveOpener,
}) {
  const color = 'self-end p-4';
  const handleClick = () => {
    toggleReservation();
  };

  return (
    <div className=" pr-8 flex flex-col md:w-96" key={id}>
      <h1 className=" self-end text-2xl">{name}</h1>
      <div className=" py-2 px-2 bg-slate-400 mb-3 flex justify-between">
        <p className=" ">{carLocation}</p>
        <p className=" ">
          $
          {carPrice}
        </p>
      </div>
      <div className="btn-primary mt-8 flex items-center justify-center md:self-start">
        <SettingsIcon />
        <button type="button" className=" px-4" onClick={handleClick}>
          Reserve Car
        </button>
        <ChevronRightOutlinedIcon />
      </div>
      <ReserveCar
        id={id}
        name={name}
        carLocation={carLocation}
        carPrice={carPrice}
        ReserveOpener={ReserveOpener}
        handleClick={handleClick}
      />
    </div>
  );
}

export default CarDetail;

CarDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  carLocation: PropTypes.string.isRequired,
  carPrice: PropTypes.number.isRequired,
  toggleReservation: PropTypes.func.isRequired,
  ReserveOpener: PropTypes.bool.isRequired,
};
