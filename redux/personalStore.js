import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const personalStore = createSlice({
  name: "personal",
  initialState,
  reducers: {
    addMovieToPersonal: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMovieToPersonal } = publicStore.actions;

export default personalStore.reducer;
