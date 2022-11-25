import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, HOUSES } from '../../../navigation/routes';

const createHouses = createAsyncThunk('houses/CREATE', async (houseInfo) => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + HOUSES}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(houseInfo),
    });
    const house = await response.json();
    return house;
  }
  return [];
});

export default createHouses;
