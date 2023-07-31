import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  avatar: string;
  bookmarked: Product[];
  bookmarkeds: Product[];
}
interface currentUserState {
  user: User;
}
interface Product {
  id: number;
  url: string;
  title: string;
  price: number;
  rate: number;
  categories: string;
}
const initialState: currentUserState = {
  user: {
    id: "",
    name: "",
    avatar: "",
    bookmarked: [],
    bookmarkeds: [],
  },
};

const currentUser = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setCurrentUser } = currentUser.actions;
export default currentUser.reducer;
