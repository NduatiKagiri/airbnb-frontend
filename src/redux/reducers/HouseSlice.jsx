import { createSlice } from '@reduxjs/toolkit';
import getHouse from '../actions/House/getHouse';
import createHouse from '../actions/House/createHouse';
import deleteHouse from '../actions/House/deleteHouse';

const initialState = {
  status: 'idle',
  cars: [],
};

const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHouse.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: action.payload,
    }));
    builder.addCase(getHouse.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getHouse.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(createHouse.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: [...state.cars, action.payload],
    }));
    builder.addCase(createHouse.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(createHouse.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(deleteHouse.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: state.cars.filter((car) => car.id !== action.payload),
    }));
    builder.addCase(deleteHouse.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(deleteHouse.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const houseRedux = houseSlice.actions;
export default houseSlice.reducer;
