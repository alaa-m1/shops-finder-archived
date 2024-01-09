import React from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton, Box, Typography, ListItemButton } from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logoSrc from "@/assets/images/phoenix.png";
import { LinkInfo, User } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { StyledList } from "@/shared";

type CustomDrawerProps = {
  links: Array<LinkInfo>;
  isSmallScreen: boolean;
  currentUser: User;
};

export const CustomDrawer = ({
  links,
  isSmallScreen,
  currentUser,
}: CustomDrawerProps) => {
  const [open, setOpen] = useState(false);
  const drawerLinks: Array<LinkInfo> = [...links, { path: "", label: "" }];
  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton
            aria-label="Open menu drawer"
            onClick={() => setOpen(true)}
          >
            <MenuOutlinedIcon></MenuOutlinedIcon>
          </IconButton>

          <Drawer
            className="w-[180px] z-[1001]"
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            PaperProps={{ sx: { backgroundColor: "#1976d2" } }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography className="mt-[5px] text-[#fff] flex justify-center">
                <Image src={logoSrc} alt={"logo image"} />
              </Typography>
            </Box>
            <StyledList
              className="w-full max-w-[360px]"
              aria-labelledby="nested-list-subheader"
            >
              {drawerLinks.map((link, index) => {
                if (link.label !== "")
                  return (
                    <ListItemButton key={index} onClick={() => setOpen(false)}>
                      <Link className="w-full" href={link.path}>
                        <Typography className="text-black">
                          {link.label}
                        </Typography>
                      </Link>
                    </ListItemButton>
                  );
                return <div key={index}>&nbsp;</div>;
              })}

              {currentUser.id ? (
                <ListItemButton
                  onClick={() => {
                    console.log('SignOut')
                    setOpen(false);
                  }}
                >
                  <Link className="w-full" href={"/auth"}>
                    <Typography className="text-black">
                      {"Sign Out"}
                    </Typography>
                  </Link>
                </ListItemButton>
              ) : (
                <ListItemButton onClick={() => setOpen(false)}>
                  <Link className="w-full" href={"/auth"}>
                    <Typography className="text-black">
                      {"Sign In"}
                    </Typography>
                  </Link>
                </ListItemButton>
              )}
            </StyledList>
          </Drawer>
        </>
      ) : null}
    </>
  );
};
