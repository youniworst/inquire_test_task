import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { blogSlice } from "./blog/blogSlice";
import { postSlice } from "./post/postSlice";
export const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
    post: postSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
