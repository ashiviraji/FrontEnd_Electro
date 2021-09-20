import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import AdminUnitLessthan60 from "../../components/Admin/AdminUnitCharges0to60";

export default function AdminUnitCharges0to60() {
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
        <Typography color="text.primary">Unit Charges 0-60</Typography>
      </Breadcrumbs>
      <AdminUnitLessthan60 />
    </div>
  );
}
