import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

const searchState = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchState.actions;
export default searchState.reducer;
