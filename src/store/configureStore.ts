import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/comment";
import logger from "redux-logger";

// const middleware = [logger];
export const store = configureStore({
  reducer: {
    comment,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
