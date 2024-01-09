import React from "react";
import { Box, Typography } from "@mui/material";
import { ColoredDevider } from "@/shared";
import  Link  from "next/link";
const NotFound=()=>{
return (
    <Box
    className="mx-auto mt-[150px] max-w-[600px] shadow-md hover:shadow-lg text-center py-[10px] text-black"
      data-testid="NotFound-div"
    >
        <Typography className="text-[16px] text-blue-600">404</Typography>
        <Typography className="text-black uppercase">Page not Found</Typography>
        <ColoredDevider/>
        <Link href='/' className="no-underline text-blue-950">Home Page</Link>
    </Box>
)
}
export default NotFound;