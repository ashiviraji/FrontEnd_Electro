import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import DeviceChartfixed from "../../components/Customer/deviceChartFixed";

export default function DevicewiseChartFixed() {
  const params = new URLSearchParams(window.location.search);
  const calculatedBillId = params.get("bill_id");
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" color="blue" href={`/bill-comparison?bill_id=${calculatedBillId}`}>
          More Details
        </Link>

        <Link underline="hover" color="blue" href={`/device-wise?bill_id=${calculatedBillId}`}>
        Device Wise Usage
        </Link>

        <Typography color="text.primary">Device Wise Chart Usage Fixed</Typography>
      </Breadcrumbs>
      <DeviceChartfixed />
    </div>
  );
}
