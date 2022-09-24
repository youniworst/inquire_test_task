import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  title: "",
  body: "",
  comments: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostData(state,action: PayloadAction<any>) {
        state.title = action.payload.title
        state.body = action.payload.body
        state.comments = action.payload.comments
    }
  },
});

export const postActions = postSlice.actions;