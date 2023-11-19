import Drawer from "@mui/material/Drawer";
import { IconButton, Box, Typography, ListItemButton } from "@mui/material";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logoSrc from "@/assets/images/phoenix.png";
import { LinkInfo } from "@/types";
import Link from "next/link";
import { StyledList } from "./components";
import Image from "next/image";

type CustomDrawerProps = {
  links: Array<LinkInfo>;
  isSmallScreen: boolean;
  currentUser: any;
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
            sx={{ width: "180px", zIndex:"1001" }}
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            PaperProps={{ sx: { backgroundColor: "#1976d2" } }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ marginTop: "5px", color: "#fff" }}>
                <Image src={logoSrc} alt={"logo image"}/>
              </Typography>
            </Box>
            <StyledList
              sx={{ width: "100%", maxWidth: 360 }}
              aria-labelledby="nested-list-subheader"
            >
              {drawerLinks.map((link, index) => {
                if (link.label !== "")
                  return (
                    <ListItemButton key={index} onClick={() => setOpen(false)}>
                      <Link style={{ width: "100%" }} href={link.path}>
                        <Typography sx={{ color: "#000" }}>
                          {link.label}
                        </Typography>
                      </Link>
                    </ListItemButton>
                  );
                return <div key={index}>&nbsp;</div>;
              })}

              {currentUser ? (
                <ListItemButton
                  onClick={() => {
                    console.log('SignOut')
                    setOpen(false);
                  }}
                >
                  <Link style={{ width: "100%" }} href={"/auth"}>
                    <Typography sx={{ color: "#000" }}>
                      {"Sign Out"}
                    </Typography>
                  </Link>
                </ListItemButton>
              ) : (
                <ListItemButton onClick={() => setOpen(false)}>
                  <Link style={{ width: "100%" }} href={"/auth"}>
                    <Typography sx={{ color: "#000" }}>
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
