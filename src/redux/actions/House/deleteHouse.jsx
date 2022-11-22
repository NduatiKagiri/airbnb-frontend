import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, Houses } from '../../../navigation/routes';

const deleteHouses = createAsyncThunk('house/DELETE', async (houseId) => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await fetch(`${BASE_URL + CARS}/${houseId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          Authorization: token,
        },
      });
      return response.ok ? carId : null;
    } catch (e) {
      return e.errors;
    }
  }
  return [];
});

export default deleteHouses;
