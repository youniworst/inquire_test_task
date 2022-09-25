import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlogItem } from "../../globalTypes"

export const initialState = {
  blogList: [] as IBlogItem[],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogList(state, action: PayloadAction<IBlogItem[]>) {
      state.blogList = action.payload;
    },
    addPost(state, action: PayloadAction<IBlogItem>) {
      state.blogList = [...state.blogList, action.payload];
    },
    deletePost(state, action: PayloadAction<number>) {
      state.blogList = state.blogList.filter(
        (item: any) => item.id !== action.payload
      );
    },
    updatePost(state, action: PayloadAction<IBlogItem>) {
      state.blogList = [
        ...state.blogList.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
    },
  },
});

export const blogActions = blogSlice.actions;
