import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slices/counter.slice";
import bmlsReducer from "../slices/bmls.silce";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bmls: bmlsReducer
  },
})
