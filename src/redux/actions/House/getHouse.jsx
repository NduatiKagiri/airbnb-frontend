import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, HOUSES } from '../../../navigation/routes';

const getHouse = createAsyncThunk('houses/GET', async () => {
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
    console.log(houses);
    return houses;
  }
  return [];
});

export default getHouse;
