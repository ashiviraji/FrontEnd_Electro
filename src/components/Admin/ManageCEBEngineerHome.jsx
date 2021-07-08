import React from "react";
import "../../assets/css/Admin/manageengineerhome.css";
import img1 from "../../assets/img/bill1.jpg";
import { RiDeleteBinFill } from "react-icons/ri";

const ManageCEBEngineerHome = () => {
  const cardDetails = [
    { Name: "W.K.B.K.Madhushanka", Model: "TOU", Total_amount: "LKR : 3500" },
    { Name: "T.D.Jayalath", Model: "Fixed ", Total_amount: "LKR : 2500" },
  ];

  return cardDetails.map((card) => (
    <div className="col-md-4">
      <div>
        <div className="card text-center admin-manage-card-size">
          <div className="overFlow">
            <img src={img1} alt="Image1" className="card-img-top" />
          </div>
          <div className="card-body text-dark admin-manage-card">
            <h4 className="card-title">{card.Name}</h4>
            <div>
              <label>Suitable Model &nbsp;: &nbsp; {card.Model} </label>
              <label>Total Amount &nbsp;: &nbsp; {card.Total_amount} </label>
            </div>

            <div className="admin-manage-view-more">More Details</div>

            <div className="admin-deactivate-engineer">
              <RiDeleteBinFill></RiDeleteBinFill> Deactivate
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ManageCEBEngineerHome;
