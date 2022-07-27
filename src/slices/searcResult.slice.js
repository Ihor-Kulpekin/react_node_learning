import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {bmlsSlice} from "./bmls.silce";

const initialState = {
  loading: false,
  searchResults: null,
  error: null,
}

export const getSearchResults = createAsyncThunk('searchResults/getSearchResults', async (payload) => {
  const response = await axios.get(`http://localhost:3002/api/v1/bmls/search-results?search_value=${payload}`);

  return response.data;
})

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    clearResults: (state) => {
      state.searchResults = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getSearchResults.pending , ((state)=>{
      state.loading = true;
    }))
      .addCase(getSearchResults.fulfilled, ((state, action) => {
        state.loading = false;
        state.error = null;
        // Add any fetched posts to the array
        state.searchResults = action.payload;
      }))
      .addCase(getSearchResults.rejected, ((state, action) => {
        state.error = action.payload;
        state.loading = false;
      }))
  }
});

export const {clearResults} = searchResultsSlice.actions

export default searchResultsSlice.reducer
