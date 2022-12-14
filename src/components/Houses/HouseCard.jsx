import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import deleteHouses from '../../redux/actions/House/deleteHouses';

function HouseCard(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    id,
    img,
    name,
    houseLocation,
    housePrice,
    reservationDate,
    reservation,
    deleteHouse,
  } = props;
  const reservationLink = `/${id}/details`;

  const handleDelete = (e, id) => {
    e.preventDefault();
    location.state = {};
    dispatch(deleteHouses(id));
  };

  return (
    <Link to={reservationLink}>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-3 hover:shadow-lg hover:shadow-lime-500 hover:brightness-110">
        <img
          className="rounded-t-lg object-cover w-full h-72"
          src={img}
          alt={name}
        />
        <div className="p-5">
          <h1 className=" text-xl">
            {name}
          </h1>
          {!deleteHouse && <p className=" text-sm">{houseLocation}</p>}
          {reservation && (
            <div className="bg-lime-400 self-end p-2 rounded-full">
              <p>{reservationDate}</p>
            </div>
          )}
          {!reservation && !deleteHouse && (
            <p className="self-end py-2 px-2 bg-lime-500 rounded-full my-4">
              $
              {housePrice}
              /night
            </p>
          )}
          {deleteHouse && (
            <button
              className=" bg-red-400 self-stretch p-2 rounded-full mt-4 hover:bg-red-600 active:bg-red-200"
              type="button"
              onClick={(e) => handleDelete(e, id)}
            >
              Delete House
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default HouseCard;

HouseCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  houseLocation: PropTypes.string.isRequired,
  housePrice: PropTypes.number.isRequired,
  reservationDate: PropTypes.string,
  reservation: PropTypes.bool,
  deleteHouse: PropTypes.bool,
};

HouseCard.defaultProps = {
  reservationDate: String(Date.now()),
  reservation: false,
  deleteHouse: false,
};
