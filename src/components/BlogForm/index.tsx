import { Button, Box, TextField, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { FC, useState, useEffect } from "react";
import { ADD_POST, UPDATE_POST } from "../../core/constants/actions";
import { useAppDispatch } from "../../core/hooks";
import { addPost, updatePost } from "../../core/store/blog/blogActions";
import { FormProps } from "./types";

export const BlogForm: FC<FormProps> = ({
  action,
  bodyValue = "",
  titleValue = "",
  postId,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    setBody(bodyValue);
    setTitle(titleValue);
  }, []);

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e: any) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (action === ADD_POST) dispatch(addPost(title, body));
    if (action === UPDATE_POST) {
      dispatch(updatePost(title, body, postId as number));
    }
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
        }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="title"
          value={title}
          onChange={handleTitleChange}
          label="title"
          variant="standard"
          sx={{
            width: "600px",
            marginBottom: "20px",
          }}
        />
        <Typography
          style={{
            marginBottom: "5px",
            alignSelf: "flex-start",
          }}
          variant="subtitle1"
        >
          Body
        </Typography>
        <TextareaAutosize
          style={{
            width: "590px",
            minHeight: "300px",
            marginBottom: "20px",
            resize: "none",
          }}
          id="body"
          value={body}
          onChange={handleBodyChange}
        />
        <Button type="submit" variant="contained">
          {action}
        </Button>
      </Box>
    </>
  );
};
