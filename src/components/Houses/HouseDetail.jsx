import React from 'react';
import PropTypes from 'prop-types';

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ReserveHouse from './ReserveHouse';

function HouseDetail({
  id,
  name,
  houseLocation,
  housePrice,
  toggleReservation,
  ReserveOpener,
}) {
  const handleClick = () => {
    toggleReservation();
  };

  return (
    <div className=" pr-8 flex flex-col md:w-96" key={id}>
      <h1 className=" self-end text-2xl">{name}</h1>
      <div className=" py-2 px-2 bg-slate-400 mb-3 flex justify-between">
        <p className=" ">{houseLocation}</p>
        <p className=" ">
          $
          {housePrice}
        </p>
      </div>
      <div className="btn-primary mt-8 flex items-center justify-center md:self-start">
        <SettingsIcon />
        <button type="button" className=" px-4" onClick={handleClick}>
          Reserve House
        </button>
        <ChevronRightOutlinedIcon />
      </div>
      <ReserveHouse
        id={id}
        name={name}
        houseLocation={houseLocation}
        housePrice={housePrice}
        ReserveOpener={ReserveOpener}
        handleClick={handleClick}
      />
    </div>
  );
}

export default HouseDetail;

HouseDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  houseLocation: PropTypes.string.isRequired,
  housePrice: PropTypes.number.isRequired,
  toggleReservation: PropTypes.func.isRequired,
  ReserveOpener: PropTypes.bool.isRequired,
};
