import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tokenLogger from './actions/User/tokenLogger';
import userSlice from './reducers/UserSlice';

const rootReducer = combineReducers({
  user: userSlice,
<<<<<<< Updated upstream:src/redux/configureStore.js

=======
  houses: houseSlice,
  // reservation: ReservationSlice,
>>>>>>> Stashed changes:src/redux/ConfigureStore.jsx
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.dispatch(tokenLogger());

export default store;
