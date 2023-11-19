"use client"
import {
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import logoSrc from "@/assets/images/phoenix.png";
import { CustomDrawer } from "./components";
import { useState } from "react";
import { LinkInfo } from "@/types";
import { StyledLink } from "@/shared";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";

type NavigationProps = {
  links: Array<LinkInfo>;
}; 

export const Header = ({ links }: NavigationProps) => {
  const pathname = usePathname();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(true);
const currentUser=null;
  return (

      <Box
        className="navigator-main-container"
        sx={{ flexGrow: 0, color: "#000" }}
      >
        <AppBar
          className="navigator-container"
          sx={{
            position: "relative",
            paddingRight: "0px !important",
             zIndex: "1000",
          }}
        >
          <Toolbar>
            {isSmallScreen ? (
              <Box className="logo-container">
                <Link href="/">
                  <Image src={logoSrc} alt="Logo" />
                </Link>
              </Box>
            ) : (
              <>
                <Box className="logo-container">
                  <Link href="/">
                    <Image src={logoSrc} alt="Logo" />
                  </Link>
                </Box>
                <Box className="link-container">
                  <Box>
                    {links.map((link, index) => (
                      <StyledLink
                        key={index}
                        href={link.path}
                        isactive={
                          pathname === link.path ? "active" : "inActive"
                        }
                      >
                        {link.label}
                      </StyledLink>
                    ))}
                  </Box>
                </Box>
              </>
            )}
            <CustomDrawer
              links={links}
              isSmallScreen={isSmallScreen}
              currentUser={currentUser}
            />
          </Toolbar>
        </AppBar>
      </Box>
  );
};
