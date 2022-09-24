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
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{body}</Typography>

        <Box>
          <Button onClick={handleClickDelete} variant="contained">
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
};
