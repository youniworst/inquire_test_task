import { FC, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { BlogItemProps } from "./types";

export const BlogItem: FC<BlogItemProps> = ({ title, body }) => {
  return (
    <>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{body}</Typography>
      </Box>
    </>
  );
};
