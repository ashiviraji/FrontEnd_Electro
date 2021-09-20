import React from "react";
import "../../assets/css/Admin/manageengineerhome.css";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import ManageCEBEngineer from "./../../components/Admin/ManageCEBEngineerHome";

export default function ManageCEBEngineerHome() {
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" color="blue" href="/dashboard-admin">
          Dahboard
        </Link>
        <Typography color="text.primary">Manage CEB Engineer</Typography>
      </Breadcrumbs>
      <div id="admin-manage-engineer-home">
        <label>
          <h2>
            <b>MANAGE CEB ENGINEER</b>
          </h2>
        </label>

        <NavLink to="/addnewcebengineer">
          <button className="admin-add-ceb-btn">
            <FaPlus />
            New CEB Engineer
          </button>
        </NavLink>
      </div>
      {/* <div className="container-fluid d-flex justify-content-center"> */}
      <div className="admin-manage-engineer-main">
        <ManageCEBEngineer />
      </div>
    </div>
    //   </div>
  );
}
