/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import createHouses from '../../redux/actions/House/createHouses';

function AddHouseForm() {
  const houses = useSelector((state) => state.houses);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const houseInfo = {
      car: {
        name: data.name,
        location: data.house_location,
        price: data.price,
        photo: data.image,
      },
    };
    dispatch(createHouses(houseInfo));
    navigate('/houses');
  };

  useEffect(() => {
    if (houses.status === 'success') {
      try {
        if (houses.houses.error) {
          setErrorMessage(houses.houses.error);
        }
      } catch (e) {
        setErrorMessage(e.error);
      }
    }
  }, [houses]);

  return (
    <div className="add-car-wrapper">
      <div className="overlay">
        <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
          {errorMessage && <div className="alert">{errorMessage}</div>}
          <div className="field group">
            <input
              type="text"
              name="name"
              id="name"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Name
            </label>
          </div>
          <div className="field group">
            <input
              type="text"
              name="house_location"
              id="house_location"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="car_type"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              House Location
            </label>
          </div>
          <div className="grid md:grid-cols-1 w-full">
            <div className="field group">
              <input
                type="text"
                name="image"
                id="image"
                className="text-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Add a photo url
              </label>
            </div>
            <div className="field group">
              <input
                type="number"
                step=".01"
                name="price"
                min={0}
                id="price"
                className="text-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Price
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Create House
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddHouseForm;
