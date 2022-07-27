import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slices/counter.slice";
import bmlsReducer from "../slices/bmls.silce";
import searchResultsReducer from "../slices/searcResult.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bmls: bmlsReducer,
    searchResult: searchResultsReducer
  },
})
