import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, HOUSE } from '../../../navigation/routes';

const getHouse = createAsyncThunk('cars/GET', async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + HOUSE}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
    });
    const house = await response.json();
    console.log(house)
    return house;
  }
  return [];
});

export default getHouse;
