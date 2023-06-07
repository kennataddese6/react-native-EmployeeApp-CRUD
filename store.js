import {configureStore} from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
export const store = configureStore(
  {
    reducer: {
      employees: employeeReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
