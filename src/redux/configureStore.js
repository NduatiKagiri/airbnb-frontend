import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tokenLogger from './services/User/tokenLogger.jsx';
import userSlice from './reducers/UserSlice';

const rootReducer = combineReducers({
  user: userSlice,


});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.dispatch(tokenLogger());

export default store;
