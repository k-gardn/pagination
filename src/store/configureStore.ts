import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "../modules/comment";
import logger from "redux-logger";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// const middleware = [logger];
export const store = configureStore({
  reducer: {
    commentSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
