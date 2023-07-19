import { configureStore } from "@reduxjs/toolkit";
// reducers
import searchReducer from "./features/search";
import currentUserReducer from "./features/currentUser";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    currentUser: currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
