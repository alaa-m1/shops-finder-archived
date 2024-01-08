"use client"
import { useMediaQuery,useTheme } from "@mui/material";
import { useState } from "react";
import { Sidebar } from "./components";

const DashboardLayout = ({ children }:{children: React.ReactNode}) => {
  const theme=useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(true);
    return (
      <div className="flex h-full gap-2">
        
        <Sidebar isSmallScreen={isSmallScreen} fullWidth={open} onCloseSideBar={(v) => setOpen(v)} />
        <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px]">
          {children}
        </div>
      </div>
    );
  };
  
  export default DashboardLayout;