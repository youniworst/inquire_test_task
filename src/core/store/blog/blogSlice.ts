import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  blogList: [] as any,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogList(state, action: PayloadAction<[]>) {
      state.blogList = action.payload;
    },
    addPostToList(state, action: PayloadAction<any>) {
      state.blogList = [...state.blogList, action.payload];
    },
    deletePost(state, action: PayloadAction<number>) {
      state.blogList = state.blogList.filter(
        (item: any) => item.id !== action.payload
      );
    },
  },
});

export const blogActions = blogSlice.actions;
