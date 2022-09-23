import { Container, Typography, Grid, Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ModalButton, BlogItem } from "../components";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import { getBlogList } from "../core/store/blog/blogActions";

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const blogList = useAppSelector((state) => state.blog.blogList);

  useEffect(() => {
    dispatch(getBlogList());
  }, []);

  const blogContainer =
    blogList.length > 0 ? (
      <Grid container spacing={{ xs: 2 }} columns={12}>
        {blogList.map((blogItem: any) => {
          return (
            <Grid item xs={3} sm={3} md={3} key={blogItem.id}>
              <BlogItem title={blogItem.title} body={blogItem.body} />
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
        {blogContainer}
      </Container>
    </>
  );
};
