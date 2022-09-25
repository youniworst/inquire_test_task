import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { BlogItemProps } from "./types";
import { deletePost } from "../../core/store/blog/blogActions";
import { useAppDispatch } from "../../core/hooks";
import { ModalButton } from "../ModalButton";
import { BlogForm } from "../BlogForm";
import { Link } from "react-router-dom";
import { UPDATE_POST } from "../../core/constants/actions";

export const BlogItem: FC<BlogItemProps> = ({ title, body, id }) => {
  const dispatch = useAppDispatch();
  const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <Box
        sx={{
          height: "400px",
          padding: "20px",
          border: "1px solid blue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            height: '64px',
            overflow: 'hidden',
            textAlign: "center",
          }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            padding: "12px",
            overflow: "hidden",
            height: "200px",
            textAlign: "justify",
            textOverflow: "ellipsis",
          }}
        >
          {body}
        </Typography>
        <Link
          style={{
            display: "block",
            padding: "10px",
          }}
          to={`/${id}`}
        >
          Read full post
        </Link>
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
            <BlogForm
              bodyValue={body}
              titleValue={title}
              postId={id}
              action={UPDATE_POST}
            />
          </ModalButton>
        </Box>
      </Box>
    </>
  );
};
