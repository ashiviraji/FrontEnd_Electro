import React from "react";
import "../../assets/css/Customer/billPlans.css";
import { RiFileAddLine } from "react-icons/ri";

import DeviceWisePlanCard from "../../components/Customer/DeviceWisePlans";
import "../../assets/css/Customer/deviewisePlans.css";
import Link from "react-router-dom";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link_ from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function DeviceWisePlans() {
  return (

    <div>

      <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '2rem',marginLeft: '2rem'}} separator={<NavigateNextIcon fontSize="small" />}>
        <Link_ underline="hover" color="blue" href="/dashboard-user">
          Dashboard
        </Link_ >
        <Typography color="text.primary">My Bill Plans</Typography>
      </Breadcrumbs>
      <div id="bill-plans-title-heading">
        <label>
          <h2 align="center">
            <b>MY BILL PLANS</b>
          </h2>
        </label>
      </div>
      <Link to="/manage-bill">
        <button className="add-new-bill-plan">
          <RiFileAddLine
            style={{ width: "25px", height: "25px" }}
          ></RiFileAddLine>
          <label className="new-bill-text">Add New Bill Plan</label>
        </button>

      </Link>

      <DeviceWisePlanCard />
    </div>
  );
}
