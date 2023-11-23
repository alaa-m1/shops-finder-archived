"use client"
import { Typography } from "@mui/material";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isactive: "active" | "inActive";
    children: React.ReactNode;
  };
const LinkComponent = ({ children, ...props }: LinkComponentProps) => {
  return (
    <Link {...props}>
      <Typography
        component="span"
        className={`text-white text-[16px] ${props.isactive === "active" ? "font-bold" : "font-normal"}`}
      >
        {children}
      </Typography>
    </Link>
  );
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isactive === "active" ? "bold" : "normal")};
  text-decoration: none;
`;

export { StyledLink };
