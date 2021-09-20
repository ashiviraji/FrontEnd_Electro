import React from "react";
import AdminUChargeHome from "../../components/Admin/AdminUnitChargeHome";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function UnitChargesAdminHome() {
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" color="blue" href="/dashboard-admin">
          Dashboard
        </Link>
        <Typography color="text.primary">Unit Charges</Typography>
      </Breadcrumbs>

      <AdminUChargeHome />
    </div>
  );
}
