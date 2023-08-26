import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  avatar: string;
  bookmarked: Product[];
  bookmarkeds: Product[];
  addresses: Address[];
  cartItems: CartItem[];
}
interface CartCount {
  index: number;
  value: number;
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
interface CartItem {
  name: string;
  color: string;
  size: number;
  image: string;
  price: number;
  count: number;
}

const initialState: currentUserState = {
  user: {
    id: "",
    name: "",
    avatar: "",
    bookmarked: [],
    bookmarkeds: [],
    addresses: [] as Address[],
    cartItems: [],
  },
};

const currentUser = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setCardItemCount: (state, action: PayloadAction<CartCount>) => {
      if (action.payload.value >= 1)
        state.user.cartItems[action.payload.index].count = action.payload.value;
    },
  },
});

export const { setCurrentUser, setCardItemCount } = currentUser.actions;
export default currentUser.reducer;
