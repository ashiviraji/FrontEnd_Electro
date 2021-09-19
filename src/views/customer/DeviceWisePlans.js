import React from "react";
import "../../assets/css/Customer/billPlans.css";
import { RiFileAddLine } from "react-icons/ri";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import DeviceWisePlanCard from "../../components/Customer/DeviceWisePlans";
import "../../assets/css/Customer/deviewisePlans.css";
import { Link as Link1} from "react-router-dom";

export default function DeviceWisePlans() {
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" color="blue" href="/dashboard-user">
          Dashboard
        </Link>
        <Typography color="text.primary"> My Bill Plans</Typography>
      </Breadcrumbs>
      <div id="bill-plans-title-heading">
        <label>MY BILL PLANS</label>
      </div>
      <Link1 to="/manage-bill">
        <button className="add-new-bill-plan">
          <RiFileAddLine
            style={{ width: "25px", height: "25px" }}
          ></RiFileAddLine>
          <label className="new-bill-text">Add New Bill Plan</label>
        </button>
      </Link1>
      
      <DeviceWisePlanCard />
    </div>
  );
}
