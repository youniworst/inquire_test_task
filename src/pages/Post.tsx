import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { getPostData } from "../core/store/post/postActions";
import { useAppDispatch, useAppSelector } from "../core/hooks";

export const Post: FC = () => {
  const { id } = useParams();
  const { title, body, comments } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPostData(Number(id)));
  }, [id]);
  const commentsList = comments.map((item: any) => {
    return (
      <Typography
        sx={{
          marginBottom: "20px",
        }}
        key={item.id}
        variant="body1"
      >
        {item.body}
      </Typography>
    );
  });

  return (
    <>
      <Container>
        <Typography
          sx={{
            marginBottom: "25px",
          }}
          variant="h1"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            marginBottom: "50px",
          }}
          variant="body1"
        >
          {body}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {commentsList}
        </Box>
      </Container>
    </>
  );
};
