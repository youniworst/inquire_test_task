import { IComment } from "../../globalTypes";

export type PostData = {
  title: string;
  body: string;
  comments: IComment[];
};
