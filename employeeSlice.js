import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import employeeService from './employeeService';
const initialState = {
  employees: [],
  emplooyee: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const createEmployee = createAsyncThunk(
  'employees/register',
  async (employeeData, thunkAPI) => {
    try {
      return await employeeService.createEmployee(employeeData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
export const getEmployee = createAsyncThunk(
  'employees/getAll',
  async (_, thunkAPI) => {
    try {
      return await employeeService.getEmployee();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createEmployee.pending, state => {
        state.isLoading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getEmployee.pending, state => {
        state.isLoading = true;
      })
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = action.payload;
      })
      .addCase(getEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {reset} = employeeSlice.actions;
export default employeeSlice.reducer;
