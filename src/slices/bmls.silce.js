import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  bmls: null,
  error: null,
  page: 1,
  totalCount: 0
}

export const getBmls = createAsyncThunk( 'bmls/getBmls', async (payload) => {
  const response = await axios.get(`http://localhost:3002/api/v1/bmls?limit=${payload.limit}&page=${payload.page}&skip=${payload.skip}`);

  return response.data;
});

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
        state.bmls = action.payload.items;
        state.totalCount = action.payload.totalCount;
      }))
      .addCase(getBmls.rejected, ((state, action) => {
        state.error = action.payload;
        state.loading = false;
      }))
  }
})

export const {setPage} = bmlsSlice.actions

export default bmlsSlice.reducer


