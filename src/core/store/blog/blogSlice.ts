import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
    blogList: []
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
        setBlogList(state,action: PayloadAction<[]>) {
            state.blogList = action.payload
        }
  },
});

export const blogActions = blogSlice.actions;