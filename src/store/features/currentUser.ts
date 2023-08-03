import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  avatar: string;
  bookmarked: Product[];
  bookmarkeds: Product[];
  addresses: Address[];
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
interface Address {
  name: string;
  location: string;
  postalCode: string;
  isActive: boolean;
}

const initialState: currentUserState = {
  user: {
    id: "",
    name: "",
    avatar: "",
    bookmarked: [],
    bookmarkeds: [],
    addresses: [],
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
