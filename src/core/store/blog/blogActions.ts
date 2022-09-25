import { Dispatch } from "@reduxjs/toolkit";
import $api from "../../../api";
import { IBlogItem } from "../../globalTypes";
import { blogActions } from "./blogSlice";

export const setBlogList = () => async (dispatch: Dispatch) => {
  $api
    .get<IBlogItem[]>("/posts")
    .then((response) => dispatch(blogActions.setBlogList(response.data)));
};

export const addPost =
  (title: string, body: string) => async (dispatch: Dispatch) => {
    const data = { title, body };
    $api
      .post<IBlogItem>("/posts", data)
      .then((response) => dispatch(blogActions.addPost(response.data)));
  };

export const deletePost = (id: number) => async (dispatch: Dispatch) => {
  await $api.delete(`/posts/${id}`);
  dispatch(blogActions.deletePost(id));
};

export const updatePost =
  (title: string, body: string, id: number) => async (dispatch: Dispatch) => {
    const data = { title, body };
    $api
      .put<IBlogItem>(`/posts/${id}`, data)
      .then((response) => dispatch(blogActions.updatePost(response.data)));
  };
