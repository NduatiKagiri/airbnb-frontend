import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import deleteHouse from '../../redux/actions/House/deleteHouse';
import getHouse from '../../redux/actions/House/getHouse';

function HouseCard(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    id,
    img,
    name,
    houseLocation,
    housePrice
  } = props;
  const reservationLink = `/house/reservation/${id}`;

  // const handleDelete = (e, id) => {
  //   e.preventDefault();
  //   location.state = {};
  //   dispatch(deleteHouse(id));
  // };

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
            {' '}
            (
            {housePrice}
            )
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default HouseCard;

// HouseCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   carType: PropTypes.string.isRequired,
//   carBrand: PropTypes.string.isRequired,
//   carPrice: PropTypes.number.isRequired,
//   reservationDate: PropTypes.string,
//   reservation: PropTypes.bool,
//   deleteCar: PropTypes.bool,
// };
//
// HouseCard.defaultProps = {
//   reservationDate: String(Date.now()),
//   reservation: false,
//   deleteCar: false,
// };
