import React from "react";
import "../../assets/css/Customer/billPlans.css";
import { RiFileAddLine } from "react-icons/ri";
import BillPlansPage from "./../../components/Customer/billPlans";

import DeviceWisePlanCard from "../../components/Customer/DeviceWisePlans";
import "../../assets/css/Customer/deviewisePlans.css";
import { Link } from "react-router-dom";

export default function DeviceWisePlans() {
  return (
    <div>
      <div id="bill-plans-title-heading">
        <label>MY BILL PLANS</label>
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
