import React from 'react';

import "../../assets/css/Customer/billPlans.css";
import img1 from "../../assets/img/bill1.jpg";
// import { Link } from "react-router-dom";

import {RiDeleteBinFill} from 'react-icons/ri';
const billPlans = () => {
    const cardDetails = [
        { Bill_Title: "Bill Plan 1", Model: "TOU", Total_amount: "LKR : 3500" },
        { Bill_Title: "Bill Plan 2", Model: "Fixed ", Total_amount: "LKR : 2500" },
        { Bill_Title: "Bill Plan 3", Model: "Fixed ", Total_amount: "LKR : 4500" },
       

    ];

    return (
          
      cardDetails.map((card) => (
        <div className="col-md-4">
        <div>
            <div className="card text-center bill-card-size">
                <div className="overFlow">
                    <img src={img1} alt="Image1" className="card-img-top" />
                </div>
                <div className="card-body text-dark bill-card" >
                    <h4 className="card-title">{card.Bill_Title}</h4>
                    <div className="bill-details">
                        <label>Suitable Model &nbsp;: &nbsp; {card.Model} </label>
                        <label>Total Amount &nbsp;: &nbsp; {card.Total_amount} </label>
                    </div>

                    <div className="view-more">
                        More Details
                    </div>

                    <div className="delete-plan">
                       <RiDeleteBinFill></RiDeleteBinFill> Delete Plan
                    </div>

                    
                </div>
            </div>
        </div>
        </div>
      )
          
           

           





 )
    ) 
    }



export default billPlans;
