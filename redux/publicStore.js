import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: 1, name: 'Citizen Kane'},
  {id: 2, name: 'Inception'},
  {id: 3, name: 'Drive My Car'}
];

export const publicStore = createSlice({
  name: "public",
  initialState,
  reducers: {},
});

export default publicStore.reducer;
