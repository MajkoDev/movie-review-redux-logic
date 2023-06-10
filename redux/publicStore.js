import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const publicStore = createSlice({
  name: "public",
  initialState,
  reducers: {},
});

export default publicStore.reducer;
