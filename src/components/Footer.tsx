import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export const Footer = (): React.ReactNode => {
  return (
    <Box className="flex justify-around items-center h-[50px] shadow-with-border bg-[#1976d2]">
      <Box>
        <Link href={"/"}>
          <Typography className="text-black">Shops Finder</Typography>
        </Link>
      </Box>
      <Box className="flex">
        <EmailIcon className="[&>path]:text-slate-800"/>

        <a href="mailto:alaa85a@gmail.com">
          <Typography className="text-black">alaa85a@gmail.com</Typography>
        </a>
      </Box>
    </Box>
  );
};
