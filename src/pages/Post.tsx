import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { getPostData } from "../core/store/post/postActions";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import { IComment } from "../core/globalTypes";
import { CommentItem, CommentForm } from "../components";

export const Post: FC = () => {
  const { id } = useParams();
  const { title, body, comments } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostData(Number(id)));
  }, [dispatch, id]);

  const commentsList = comments.map((item: IComment) => (
    <CommentItem key={item.id} body={item.body} id={item.id} />
  ));
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
        <CommentForm postId={Number(id)} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: "10px",
            }}
          >
            Comments:
          </Typography>
          {commentsList}
        </Box>
      </Container>
    </>
  );
};
