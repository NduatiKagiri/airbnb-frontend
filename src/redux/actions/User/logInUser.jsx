import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, LOG_IN } from '../../../navigation/routes';

const logInUser = createAsyncThunk('LOG_IN', async (userinfo) => {
  const response = await fetch(`${BASE_URL + LOG_IN}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(userinfo),
  });
  const resp = await response.json();
  localStorage.setItem('token', resp.token);
  return resp.user;
});

export default logInUser;
