"use client"
import { Box } from "@mui/material";
import { GridLoader } from "react-spinners";

const LoadingSpinner = ({ floatingOver }: { floatingOver?: boolean }) => {
  // const floatingOverStyle: React.CSSProperties = floatingOver
  //   ? {

  //       position: "fixed",
  //       left: "50vw",
  //       top: "50vh",
  //       transform: "translate(-50%,-50%)",
  //     }
  //   : {};
  const floatingOverStyle: React.ComponentProps<'div'>['className'] = floatingOver
    ? "fixed left-[50vw] top-[50vh] transform translate-x-1/2 translate-x-1/2"
    : "";
  return (
    <Box
      className={`${floatingOverStyle} flex justify-center`}
    >
      <GridLoader color="rgba(54, 126, 214, 1)" size={20} />
    </Box>
  );
};

export { LoadingSpinner };
