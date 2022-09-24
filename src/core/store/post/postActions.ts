import { Dispatch } from "@reduxjs/toolkit";
import $api from "../../../api";
import { postActions } from "./postSlice";

export const getPostData = (id: number) => async (dispatch: Dispatch) => {
  $api.get(`posts/${id}?_embed=comments`).then((response: any) => {
    const data = {
      title: response.data.title,
      body: response.data.body,
      comments: response.data.comments,
    };
    dispatch(postActions.setPostData(data));
  });
};
