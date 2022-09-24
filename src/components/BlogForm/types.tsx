import { AnyAction } from "@reduxjs/toolkit";

export type FormProps = {
  action: string;
  bodyValue?: string;
  titleValue?: string;
  postId?: number;
};
