/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import signUpUser from '../../redux/actions/User/signUpUser';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const user = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [imageMessage, setImageMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      name: data.name,
      email: data.email,
      username: data.username
    };
    dispatch(signUpUser(userInfo));
  };
  useEffect(() => {
    if (user.status === 'success') {
      try {
        if (user.user.error) {
          setErrorMessage(user.user.error);
        } else {
          navigate('/cars');
        }
      } catch (e) {
        setErrorMessage(e.error);
      }
    }
  }, [navigate, user]);

  return (
    <div className="splash">
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
              type="email"
              name="email"
              id="email"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email
            </label>
          </div>
          <div className="field group">
            <input
              type="text"username
              name="username"
              id="username"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Username
            </label>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
          <Link to="/" className="mt-3 underline">Back to Home</Link>
        </form>
      </div>
    </div>
  );
}
