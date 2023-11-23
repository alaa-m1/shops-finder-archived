"use client"
import { Box } from "@mui/material";
import { GridLoader } from "react-spinners";

const FullScreenSpinner = () => {
  return (
    <Box
      className="absolute top-0 bottom-0 left-0 right-0 z-[1009] bg-transparent"
    >
      <Box
        className="absolute left-1/2 top-1/2"
      >
        <GridLoader color="rgba(54, 126, 214, 1)" size={20} />
      </Box>
    </Box>
  );
};

export { FullScreenSpinner };
