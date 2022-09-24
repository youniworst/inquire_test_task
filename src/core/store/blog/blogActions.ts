import { Dispatch } from "@reduxjs/toolkit";
import $api from "../../../api";
import { blogActions } from "./blogSlice";

export const getBlogList = () => async (dispatch: Dispatch) => {
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
      dispatch(blogActions.addBlogToList(response.data));
    });
  };
