import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import $api from "../../../api";
import { blogActions } from "./blogSlice";

export const getBlogList = () => async (dispatch: Dispatch) => {
   $api.get("/posts").then((response: any) => dispatch(blogActions.setBlogList(response.data)));
};
