import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tokenLogger from './actions/User/tokenLogger';
import userSlice from './reducers/UserSlice';
import houseSlice from './reducers/HouseSlice';
import reservationSlice from './reducers/ReservationSlice';

const rootReducer = combineReducers({
  user: userSlice,
  houses: houseSlice,
  reservations: reservationSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.dispatch(tokenLogger());

export default store;
