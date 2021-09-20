import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import AdminNewUnitChargesToU from "../../components/Admin/AdminUnitChargesToU";
export default function AdminUnitChargesToU() {
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" color="blue" href="/admin-unit-charges">
          Unit Charges
        </Link>
        <Typography color="text.primary">Unit Charges TOU</Typography>
      </Breadcrumbs>
      <AdminNewUnitChargesToU />
    </div>
  );
}
