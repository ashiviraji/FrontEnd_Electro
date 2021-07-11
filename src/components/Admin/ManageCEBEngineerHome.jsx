import React from "react";
import "../../assets/css/Admin/manageengineerhome.css";
import Engineers from "../../assets/img/Engineers.png";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ManageCEBEngineerHome = () => {
  const cardDetails = [
    {
      Name: "W.K.B.K.Madhushanka",
      Engineer_ID: "E 01",
      Url: "/cebengineer-details1",
    },
    {
      Name: "T.M.Jayalath",
      Engineer_ID: "E 02 ",
      Url: "/cebengineer-details2",
    },
  ];

  return cardDetails.map((card) => (
    <div className="col-md-4">
      <div>
        <div className="card text-center admin-manage-card-size">
          <div className="overFlow">
            <img src={Engineers} alt="Image1" className="card-img-top" />
          </div>
          <div className="card-body text-dark admin-manage-card">
            <h4 className="card-title">{card.Name}</h4>
            <div>
              <label>Engineer_ID &nbsp;: &nbsp; {card.Engineer_ID} </label>
            </div>

            <Link to={card.Url} className="link-moredetails">
              <div className="admin-manage-view-more">More Details</div>
            </Link>

            <div className="admin-deactivate-engineer">
              <RiDeleteBinFill /> Deactivate
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ManageCEBEngineerHome;
