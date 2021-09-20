import React from "react";
import EngineerDetails1 from "../../components/Admin/CebEngineerDetails1";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function CebEngineerDetails1() {
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" color="blue" href="/manage-cebengineer">
          Manage CEB Engineer
        </Link>
        <Typography color="text.primary">More Deatil</Typography>
      </Breadcrumbs>
      <EngineerDetails1 />
    </div>
  );
}
