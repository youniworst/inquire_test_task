import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CommentItemProps } from "./types";
export const CommentItem: FC<CommentItemProps> = ({ body, id }) => {
  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid blue",
        paddingTop: "30px",
        marginBottom: "20px",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          position: "absolute",
          top: "0",
          left: "5px",
          display: "inline",
        }}
      >
        {id}
      </Typography>
      <Typography
        sx={{
          paddingLeft: "15px",
        }}
        variant="body1"
      >
        {body}
      </Typography>
    </Box>
  );
};
