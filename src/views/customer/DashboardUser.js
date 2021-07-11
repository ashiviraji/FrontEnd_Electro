import React from "react";
import Dashboarduser from "../../components/Customer/dashboardUser";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../../assets/css/breadcrumb.css";

export default function DashboardUser() {
  return (
    <div>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <Dashboarduser />
    </div>
  );
}
