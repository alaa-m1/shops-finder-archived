import { Box, Link as MUILink, Typography } from "@mui/material";
import { ColoredDevider } from "@/shared";
import  Link  from "next/link";
const NotFound=()=>{
return (
    <Box
      sx={{
        margin: "40px auto auto",
        maxWidth: "600px",
        boxShadow: "5px 5px 10px",
        ":hover": { boxShadow: "10px 10px 20px" },
        textAlign: "center",
        paddingBottom: "10px",
        color:"#000"
      }}
      data-testid="NotFound-div"
    >
        <Typography fontSize="16px" color="#00f">404</Typography>
        <Typography color="#000">PAGE NOT FOUND</Typography>
        <ColoredDevider/>
        <MUILink component={Link} href='/' sx={{textDecoration:'none', color:"#000"}}>Home Page</MUILink>
    </Box>
)
}
export default NotFound;