import { FC, useState } from "react";
import { Button, Box, TextareaAutosize } from "@mui/material";
import { CommentFormProps } from "./types";
import { addComment } from "../../core/store/post/postActions";
import { useAppDispatch } from "../../core/hooks";

export const CommentForm: FC<CommentFormProps> = ({ postId }) => {
  const [body, setBody] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addComment(postId, body));
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "40px",
        }}
      >
        <TextareaAutosize
          id="body"
          value={body}
          onChange={handleBodyChange}
          style={{
            width: "600px",
            height: "36px",
            resize: "none",
          }}
        />
        <Button type="submit" variant="contained">
          Add comment
        </Button>
      </Box>
    </>
  );
};
