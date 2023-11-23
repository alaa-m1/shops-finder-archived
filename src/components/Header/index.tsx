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
  const currentUser = null;
  return (

    <Box
      className="shadow-with-border flex-grow-0 text-black"
    >
      <AppBar
        // className="navigator-container"
        className="flex justify-between p-[5px]  
          bg-gradient-to-b from-indigo-900 via-indigo-500 to-indigo-600
          place-items-center [&_.MuiToolbar-root]:w-full relative pr-0 z-[1000]"
      // sx={{
      //   position: "relative",
      //   paddingRight: "0px !important",
      //    zIndex: "1000",
      // }}
      >
        <Toolbar>
          {isSmallScreen ? (
            <Box className="grow-[1]">
              <Link href="/">
                <Image src={logoSrc} alt="Logo" />
              </Link>
            </Box>
          ) : (
            <>
              <Box className="grow-[1]">
                <Link href="/">
                  <Image src={logoSrc} alt="Logo" />
                </Link>
              </Box>
              <Box
                className="flex grow-[2] place-items-center justify-between [&>div>a>span]:mx-[10px] [&>div>a>span]:transition-colors ease-in delay-200 hover:[&>div>a>span]:text-[#e76712]"
              >
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
