import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export const Footer = (): React.ReactNode => {
  return (
    <Box className="footer-section" sx={{ backgroundColor: "#1976d2" }}>
      <Box>
        <Link href={"/"}>
          <Typography color="#000">Shops Finder</Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex" }}>
        <EmailIcon sx={{"& path":{color:"#000"}}}/>

        <a href="mailto:alaa85a@gmail.com">
          <Typography color="#000">alaa85a@gmail.com</Typography>
        </a>
      </Box>
    </Box>
  );
};
