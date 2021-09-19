import React from "react";
import { RiFileAddLine } from "react-icons/ri";
import "../../assets/css/Customer/billPlans.css";
import { Link as Link1 } from "react-router-dom";
import "../../assets/css/Customer/specialEventPlans.css";
import SpecialEventPlans from "./../../components/Customer/SpecialEventBillPlans";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function SpecialEventBillPlans() {
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
        <Typography color="text.primary"> Special Event Bill Plans</Typography>
      </Breadcrumbs>
      <div id="special-bill-plans-title-heading">
        <label>MY SPECIAL EVENT BILL PLANS</label>
      </div>
      <Link1 to="/special-event-new-bill">
        <button className="add-new-bill-plan">
          <RiFileAddLine
            style={{ width: "25px", height: "25px" }}
          ></RiFileAddLine>
          <label className="new-bill-text">Add New Bill Plan</label>
        </button>
      </Link1>

      <SpecialEventPlans />
    </div>
  );
}

export default SpecialEventBillPlans;
