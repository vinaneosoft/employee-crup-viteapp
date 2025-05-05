import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllEmployees } from '../model/employeecrud';

// Thunk to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await getAllEmployees()
  return response.data.length;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value:0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;