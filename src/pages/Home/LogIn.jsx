/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import logInUser from '../../redux/actions/User/logInUser';

export default function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const user = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      username: data.username,
    };
    dispatch(logInUser(userInfo));

    setTimeout(() => {
      if (user.status === 'success') {
        navigate('/houses');
      } else {
        navigate('/');
      }
    }, 1500);
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="alert">{errorMessage}</div>
      )}
      <div className="field group">
        <input
          type="text"
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
        Login
      </button>
    </form>
  );
}
