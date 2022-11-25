import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, HOUSES } from '../../../navigation/routes';

const getHouses = createAsyncThunk('houses/GET', async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + HOUSES}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
    });
    const houses = await response.json();
    return houses;
  }
  return [];
});

export default getHouses;
