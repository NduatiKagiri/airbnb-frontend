import { createSlice } from '@reduxjs/toolkit';
import getHouses from '../actions/House/getHouses';
import createHouses from '../actions/House/createHouses';
import deleteHouses from '../actions/House/deleteHouses';

const initialState = {
  status: 'idle',
  houses: [],
};

const houseSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHouses.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      houses: action.payload,
    }));
    builder.addCase(getHouses.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getHouses.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(createHouses.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      houses: [...state.houses, action.payload],
    }));
    builder.addCase(createHouses.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(createHouses.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(deleteHouses.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      houses: state.houses.filter((house) => house.id !== action.payload),
    }));
    builder.addCase(deleteHouses.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(deleteHouses.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const housesRedux = houseSlice.actions;
export default houseSlice.reducer;
