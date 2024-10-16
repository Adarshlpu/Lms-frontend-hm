import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice';  

const store = configureStore({
  reducer: {
    auth: authSliceReducer   // Fix the typo here
  },
  devTools: true
});

export default store;
