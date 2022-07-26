import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  bmls: null,
  error: null,
  page: 1
}

export const getBmls = createAsyncThunk( 'bmls/getBmls', async () => {
  const response = await axios.get('http://localhost:3002/api/v1/bmls');

  return response.data;
})

export const bmlsSlice = createSlice({
  name: 'bmls',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBmls.pending, ((state, action) => {
        state.loading = true;
      }))
      .addCase(getBmls.fulfilled, ((state, action) => {
        state.loading = false;
        state.error = null;
        // Add any fetched posts to the array
        state.bmls = action.payload
      }))
  }
})

export const {setPage} = bmlsSlice.actions

export default bmlsSlice.reducer


