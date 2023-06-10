import { configureStore } from "@reduxjs/toolkit";
import publicReducer from "./publicStore";
import personalReducer from "./personalStore";

export default configureStore({
  reducer: {
    public: publicReducer,
    personal: personalReducer,
  },
});
