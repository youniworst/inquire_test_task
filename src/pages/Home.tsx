import {
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { FC, useEffect } from "react";
import { ModalButton, BlogItem, BlogForm } from "../components";
import { ADD_POST } from "../core/constants/actions";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import { setBlogList } from "../core/store/blog/blogActions";
import { IBlogItem } from "../core/globalTypes";

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const blogList = useAppSelector((state) => state.blog.blogList);


  useEffect(() => {
    dispatch(setBlogList());
  }, [dispatch]);


  const blogContainer =
    blogList.length > 0 ? (
      <Grid container spacing={{ xs: 2 }} columns={12}>
        {blogList.map((blogItem: IBlogItem) => {
          return (
            <Grid item xs={3} sm={3} md={3} key={blogItem.id}>
              <BlogItem title={blogItem.title} body={blogItem.body} id={blogItem.id} />
            </Grid>
          );
        })}
      </Grid>
    ) : (
      <Typography
        style={{
          textAlign: "center",
        }}
        variant="h3"
      >
        You have no posts :(
      </Typography>
    );

  return (
    <>
      <Container>
        <Typography
          style={{
            marginBottom: "50px",
            textAlign: "center",
          }}
          variant="h1"
        >
          Blog
        </Typography>
        <Box
          style={{
            minHeight: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <Typography variant="h4">
            Hi author! Lets create a new post
          </Typography>
          <ModalButton buttonText="Create new post">
            <BlogForm action={ADD_POST}/>
          </ModalButton>
        </Box>
        {blogContainer}
      </Container>
    </>
  );
};
