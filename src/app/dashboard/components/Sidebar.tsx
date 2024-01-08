import { IconButton, Box, Typography, ListItemButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import clsx from "clsx";
import { StyledLink, StyledList, sideBarLinksDetails } from "@/shared";
import { LinkInfo } from "@/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type CustomDrawerProps = {
  fullWidth: boolean;
  isSmallScreen: boolean;
  onCloseSideBar: (value: boolean) => void;
};

export const Sidebar = ({
  fullWidth,
  isSmallScreen,
  onCloseSideBar,
}: CustomDrawerProps) => {
  const drawerLinks: Array<LinkInfo> = [
    ...sideBarLinksDetails,
    { path: "", label: "" },
  ];
  const searchParams = useSearchParams();
  const  pathname  = usePathname();
  return (
    <aside
      className={clsx(
        "h-full bg-[#ccc] sidebar-container",
        { "sidebar-full": fullWidth },
        { "sidebar-min": !fullWidth }
      )}
    >
      {!fullWidth && (
        <IconButton
          aria-label="Open menu drawer"
          onClick={() => onCloseSideBar(!fullWidth)}
          sx={{ mt: 1 }}
        >
          {fullWidth ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </IconButton>
      )}
      {fullWidth && (
        <StyledList
          sx={{ width: "100%", maxWidth: 360 }}
          aria-labelledby="nested-list-subheader"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListItemButton sx={{ padding: "0px", marginBottom: "10px" }}>
              <StyledLink
                href={"/dashboard"}
                isactive={
                  pathname === "/dashboard"
                    ? "active"
                    : "inActive"
                }
                style={{ width: "100%", padding: "4px" }}
              >
                User Dashboard
              </StyledLink>
            </ListItemButton>

            <IconButton
              aria-label="Open menu drawer"
              onClick={() => onCloseSideBar(!fullWidth)}
            >
              {fullWidth ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
            </IconButton>
          </Box>
          {drawerLinks.map((link, index) => {
            if (link.label !== "")
              return (
                <ListItemButton
                  key={index}
                  sx={{ padding: "0px" }}
                >
                  <a style={{}}></a>
                  <StyledLink
                    href={`/dashboard?p=${link.path}`}
                    isactive={
                      searchParams.get("p") === link.path
                        ? "active"
                        : "inActive"
                    }
                    style={{ width: "100%", padding: "8px 16px" }}
                  >
                    {link.label}
                  </StyledLink>
                </ListItemButton>
              );
            return <div key={index}>&nbsp;</div>;
          })}
          {isSmallScreen && (
            <>
              <ListItemButton>
                <Link style={{ width: "100%" }} href={"/"}>
                  <Typography sx={{ color: "primary.main" }}>Home</Typography>
                </Link>
              </ListItemButton>
              <ListItemButton>
                <Link style={{ width: "100%" }} href={"/about"}>
                  <Typography sx={{ color: "primary.main" }}>About</Typography>
                </Link>
              </ListItemButton>
            </>
          )}
        </StyledList>
      )}
    </aside>
  );
};
