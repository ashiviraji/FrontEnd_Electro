import React from "react";
import "../../assets/css/Admin/manageengineerhome.css";

import ManageCEBEngineer from "./../../components/Admin/ManageCEBEngineerHome";

export default function ManageCEBEngineerHome() {
  return (
    <div>
      <div id="admin-manage-engineer-home">
        <label>
          <h1>Manage CEB Engineer</h1>
        </label>
      </div>
      {/* <div className="container-fluid d-flex justify-content-center"> */}
      <div className="admin-manage-engineer-main">
        <ManageCEBEngineer />
      </div>
    </div>
    //   </div>
  );
}
