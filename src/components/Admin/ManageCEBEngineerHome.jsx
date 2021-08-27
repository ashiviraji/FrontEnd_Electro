import React from "react";
import "../../assets/css/Admin/manageengineerhome.css";
import Engineers from "../../assets/img/Engineers.png";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import Axios from 'axios';

var name = "kamal";
const ManageCEBEngineerHome = () => {

  let history = useHistory();
  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


  const getCebengineer = async () => {
    // e.preventDefault();
    const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/manager-cebengineer`, {
      headers: {
        authorization: `Token ${token}`
      }

    })
    if (response.data.status) {
      return (response.data.data);

    } else {
      console.log(response.data.message);
      history.push("/sign-in");
      window.location.reload();//reload browser
      deleteAllCookies();//delete all cookies
    }

  }

  useEffect(async () => {
    var details = await getCebengineer();
    console.log("successfully get ceb engineer", details);
  }, []);

  /**
    * function of delete all cookies
    */
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  const cardDetails = [
    {
      Name: "W.K.B.K.Madhushanka",
      Engineer_ID: "E 01",
      Url: "/cebengineer-details1",
    },
    {
      Name: "T.M.Jayalath",
      Engineer_ID: "E 02 ",
      Url: `/cebengineer-details2?name=${name}`,
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
