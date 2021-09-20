import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


import AdminUnit60plus from "../../components/Admin/AdminUnitCharges60plus";

export default function AdminUnitCharges60plus() {
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
        <Typography color="text.primary">Unit Charges 60+</Typography>
      </Breadcrumbs>
      <AdminUnit60plus />
    </div>
  );
}
