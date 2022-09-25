import { Dispatch } from "@reduxjs/toolkit";
import $api from "../../../api";
import { postActions } from "./postSlice";
import { PostData } from "./types";

export const getPostData = (id: number) => async (dispatch: Dispatch) => {
  $api.get<PostData>(`posts/${id}?_embed=comments`).then((response) => {
    const data = {
      title: response.data.title,
      body: response.data.body,
      comments: response.data.comments,
    };
    dispatch(postActions.setPostData(data));
  });
};
