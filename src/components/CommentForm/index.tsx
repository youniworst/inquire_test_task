import { FC } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import { CommentFormProps } from "./types";

export const CommentForm: FC<CommentFormProps> = () => {
  return (
    <>
      <Box component="form">
        <TextField></TextField>
        <Button></Button>
      </Box>
    </>
  );
};
