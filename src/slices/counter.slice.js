import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
}

export const getBmls = createAsyncThunk( 'bmls/getBmls', async () => {
  const response = await axios.get('http://localhost:3002/api/v1/bmls');

  return response.data;
})

export const counterSlice = createSlice({
  name: 'bmls',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer


