import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, HOUSES } from '../../../navigation/routes';

const deleteHouses = createAsyncThunk('cars/DELETE', async (houseId) => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await fetch(`${BASE_URL + HOUSES}/${houseId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          Authorization: token,
        },
      });
      return response.ok ? houseId : null;
    } catch (e) {
      return e.errors;
    }
  }
  return [];
});

export default deleteHouses;
