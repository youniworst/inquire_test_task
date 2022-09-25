import { Dispatch } from "@reduxjs/toolkit";
import $api from "../../../api";
import { IComment } from "../../globalTypes";
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

export const addComment =
  (postId: number, body: string) => async (dispatch: Dispatch) => {
    const data = { postId, body };
    $api.post<IComment>("/comments", data).then((response) => {
      const data = {
        body: response.data.body,
        id: response.data.id,
        postId: response.data.postId,
      };
      dispatch(postActions.addComment(data));
    });
  };
