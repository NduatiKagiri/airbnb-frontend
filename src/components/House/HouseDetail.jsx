import React from 'react';
import PropTypes from 'prop-types';

import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ReserveHouse from './ReserveHouse';

function HouseDetail({
  id,
  name,
  houseType,
  carBrand,
  housePrice,
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
      <p className="self-end pb-8">{carType}</p>
      <div className=" py-2 px-2 bg-slate-400 mb-3 flex justify-between">
        <p className=" ">
          $
          {housePrice}
        </p>
      </div>
      <div className="self-end flex gap-4">
        <p>Color: </p>
        <div className={color} style={{ backgroundColor: carColor }} />
      </div>
      <div className="btn-primary mt-8 flex items-center justify-center md:self-start">
        <SettingsIcon />
        <button type="button" className=" px-4" onClick={handleClick}>
          Reserve house
        </button>
        <ChevronRightOutlinedIcon />
      </div>

      <ReserveHouse
        id={id}
        name={name}
        houseType={houseType}
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
  carType: PropTypes.string.isRequired,
  carBrand: PropTypes.string.isRequired,
  carPrice: PropTypes.number.isRequired,
  carColor: PropTypes.string.isRequired,
  toggleReservation: PropTypes.func.isRequired,
  ReserveOpener: PropTypes.bool.isRequired,
};
