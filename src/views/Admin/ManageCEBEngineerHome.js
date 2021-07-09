import React from "react";
import "../../assets/css/Admin/manageengineerhome.css";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import ManageCEBEngineer from "./../../components/Admin/ManageCEBEngineerHome";

export default function ManageCEBEngineerHome() {
  return (
    <div>
      <div id="admin-manage-engineer-home">
        <label>
          <h1>Manage CEB Engineer</h1>
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
