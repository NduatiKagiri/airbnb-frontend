/* eslint linebreak-style: ["error", "unix"] */

import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


const ReservationScreen = () => {
    // Redux part when redux is applied 
// const houses = useSelector((state) => state.houses);
const reservations = useSelector((state) => state.reservations);
const [isHouse, setIsHouse] = useState(false);

const defaultImage = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600';

  const getHouse = (houseId) => {
    const house = houses.find((house) => house.id === houseId);
    return house;
  };

    useEffect(() => {
    if (houses.length) setIsHouse(true);
  }, [houses]);

return (
    <div className="container page-reservation">
      <div className="info-container">
        <h2> Your reservations</h2>
        <p>
          Know all future and past reservations made by you, as well as the selected vehicle
          and the date range you choose.
        </p>
         {(reservations.length === 0) && (
          <p className="no-reservations-message">No reservations has been made yet</p>
        )}