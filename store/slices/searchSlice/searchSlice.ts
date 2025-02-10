import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "./searchSlice.types";

const initialState: SearchState = {
  language: "javascript",
  searchInput: "",
  debouncedSearch: "",
  currentPage: 1,
  sortConfig: {
    field: null,
    order: "desc",
  },
  rowsPerPage: 20,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setDebouncedSearch: (state, action: PayloadAction<string>) => {
      state.debouncedSearch = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSortConfig: (
      state,
      action: PayloadAction<SearchState["sortConfig"]>
    ) => {
      state.sortConfig = action.payload;
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const {
  setLanguage,
  setSearchInput,
  setDebouncedSearch,
  setCurrentPage,
  setSortConfig,
  setRowsPerPage,
} = searchSlice.actions;
export default searchSlice.reducer;
