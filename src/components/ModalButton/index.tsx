import { FC, useState } from "react";
import { ModalButtonProps } from "./types";
import { Modal, Button, Box } from "@mui/material";

export const ModalButton: FC<ModalButtonProps> = ({ buttonText, children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e: any) => {
    setOpen(false);
  };
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </>
  );
};
