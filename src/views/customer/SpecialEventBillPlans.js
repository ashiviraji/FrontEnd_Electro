import React from 'react';
import { RiFileAddLine } from "react-icons/ri";
import "../../assets/css/Customer/billPlans.css";
import { Link } from "react-router-dom";
import "../../assets/css/Customer/specialEventPlans.css";
import SpecialEventPlans from './../../components/Customer/SpecialEventBillPlans';

function SpecialEventBillPlans() {
    return (
        <div>
        <div id="special-bill-plans-title-heading">
          <label>MY SPECIAL EVENT BILL PLANS</label>
        </div>
        <Link to="/manage-bill">
          <button className="add-new-bill-plan">
            <RiFileAddLine
              style={{ width: "25px", height: "25px" }}
            ></RiFileAddLine>
            <label className="new-bill-text">Add New Bill Plan</label>
          </button>
        </Link>
        
        <SpecialEventPlans />
      </div>
    )
}

export default SpecialEventBillPlans;
