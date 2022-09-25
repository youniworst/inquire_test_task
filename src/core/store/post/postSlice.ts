import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostData } from "./types";
import { IComment } from "../../globalTypes";

export const initialState = {
  title: "",
  body: "",
  comments: [] as IComment[],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostData(state, action: PayloadAction<PostData>) {
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.comments = action.payload.comments;
    },
    addComment(state,action: PayloadAction<IComment>) {
      state.comments = [...state.comments, action.payload]
    }
  },
});

export const postActions = postSlice.actions;
