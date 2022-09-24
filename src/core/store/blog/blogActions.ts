import { Dispatch } from "@reduxjs/toolkit";
import $api from "../../../api";
import { blogActions } from "./blogSlice";

export const setBlogList = () => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  $api
    .get("/posts", config)
    .then((response: any) => dispatch(blogActions.setBlogList(response.data)));
};

export const addPost =
  (title: string, body: string) => async (dispatch: Dispatch) => {
    const data = { title, body };
    $api.post("/posts", data).then((response) => {
      dispatch(blogActions.addPost(response.data));
    });
  };

export const deletePost = (id: number) => async(dispatch: Dispatch) => {
   await $api.delete(`/posts/${id}`)
   dispatch(blogActions.deletePost(id))
}

export const updatePost =  (title: string, body: string,id: number) => async (dispatch: Dispatch) => {
   const data = { title, body };
   $api.put(`/posts/${id}`, data).then((response) => {
     dispatch(blogActions.updatePost(response.data));
   });
 };