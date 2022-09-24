import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { BlogItemProps } from "./types";
import { deletePost } from "../../core/store/blog/blogActions";
import { useAppDispatch } from "../../core/hooks";
import { ModalButton } from "../ModalButton";
import { BlogForm } from "../BlogForm";
import { UPDATE_POST } from "../../core/constants/actions";

export const BlogItem: FC<BlogItemProps> = ({ title, body, id }) => {
  const dispatch = useAppDispatch();
  const handleClickDelete = () => {
    dispatch(deletePost(id));
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "160px",
          padding: "20px",
          border: "1px solid blue",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            padding: "10px",
          }}
        >
          {body}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button onClick={handleClickDelete} variant="contained">
            Delete
          </Button>
          <ModalButton buttonText="Update">
            <BlogForm bodyValue={body} titleValue={title} postId={id} action={UPDATE_POST} />
          </ModalButton>
        </Box>
      </Box>
    </>
  );
};
