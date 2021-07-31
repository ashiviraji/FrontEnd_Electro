import React from "react";

import { Card as card2 } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerpopup.css";
import { useState } from "react";
import { useHistory } from "react-router";
import Axios from 'axios';

export default function EngineerUnitCharges60plus(props) {
  const [modalShow, setModalShow] = React.useState(false);


  let history = useHistory();

  const [UnitCharge0to60, setUnitCharge0to60] = useState("");
  const [UnitCharge61to90, setUnitCharge61to90] = useState("");
  const [UnitCharge91to120, setUnitCharge91to120] = useState("");

  const [UnitCharge121to180, setUnitCharge121to180] = useState("");
  const [UnitCharge180plus, setUnitCharge180plus] = useState("");

  const [FixedCharge0to60, setFixedCharge0to60] = useState("");
  const [FixedCharge61to90, setFixedCharge61to90] = useState("");
  const [FixedCharge91to120, setFixedCharge91to120] = useState("");

  const [FixedCharge121to180, setFixedCharge121to180] = useState("");
  const [FixedCharge180plus, setFixedCharge180plus] = useState("");

  const [normalUCharge, setNormalUCharge] = useState("");
  const [normalUnitPeriod, setNormalUnitPeriod] = useState("");
  const [Category, setCategory] = useState("");

  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

  var category = "60+";

  Axios.get(`${process.env.REACT_APP_BASE_URL}/unit-charges/${category}`, {
    headers: {
      authorization: `Token ${token}`
    }
  })
    .then((response) => {
      // console.log(response.data.data[1]);

      if (response.data.status) {


        setUnitCharge0to60(response.data.data[0].Unit_charge);
        setFixedCharge0to60(response.data.data[0].Fixed_charge);
        setUnitCharge121to180(response.data.data[1].Unit_charge);
        setFixedCharge121to180(response.data.data[1].Fixed_charge);
        setUnitCharge61to90(response.data.data[2].Unit_charge);
        setFixedCharge61to90(response.data.data[2].Fixed_charge);
        setUnitCharge91to120(response.data.data[3].Unit_charge);
        setFixedCharge91to120(response.data.data[3].Fixed_charge);
        setUnitCharge180plus(response.data.data[4].Unit_charge);
        setFixedCharge180plus(response.data.data[4].Fixed_charge);


      } else {

        history.push("/sign-in");
        window.location.reload();//reload browser
        deleteAllCookies();//delete all cookies
      }
    }).catch((error) => {
      console.log("this is 1c response", error);
    });


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

  function setDataToPopup(value, unitPeriod, categ) {
    setModalShow(true);
    setNormalUCharge(value);
    setNormalUnitPeriod(unitPeriod);
    setCategory(categ)

  }

  return (
    <div className="engineer-unit-body">
      <div id="engineer-unit-title-heading">
        <h2>
          <b>
            <label>FIXED BILLING MODEL (ONLY FOR 60kWh+)</label>
          </b>
        </h2>
      </div>

      <div class="engineer-unit-table">
        <ul id="engineer-unit-horizontal-list">
          <li id="engineer-unit-title-category">Category</li>
          <li>Unit Charge(LKR/kWh)</li>
          <li>Fixed Charge(LKR/month)</li>
        </ul>
      </div>

      <card2>
        <card2.Body className="card2-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-category"
              >
                00-60
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                {UnitCharge0to60}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(UnitCharge0to60, "00-60", "Unit")}
              >
                UPDATE
              </button>

              <MyVerticallyCenteredModal
                unitPrice={normalUCharge}
                unitPeriod={normalUnitPeriod}
                categoryName={Category}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-fixedCharge"
              >
                {FixedCharge0to60}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(FixedCharge0to60, "00-60", "Fixed")}
              >
                UPDATE
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>

      <card2>
        <card2.Body className="card2-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-category"
              >
                61-90
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                {UnitCharge61to90}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(UnitCharge61to90, "61-90", "Unit")}

              >
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-fixedCharge"
              >
                {FixedCharge61to90}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(FixedCharge61to90, "61-90", "Fixed")}

              >
                UPDATE
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>
      <card2>
        <card2.Body className="card2-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-category"
              >
                91-120
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                {UnitCharge91to120}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(UnitCharge91to120, "91-120", "Unit")}
              >
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-fixedCharge"
              >
                {FixedCharge91to120}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(FixedCharge91to120, "91-120", "Fixed")}
              >
                UPDATE
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>
      <card2>
        <card2.Body className="card2-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-category"
              >
                121-180
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                {UnitCharge121to180}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(UnitCharge121to180, "121-180", "Unit")}
              >
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-fixedCharge"
              >
                {FixedCharge121to180}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(FixedCharge121to180, "121-180", "Fixed")}
              >
                UPDATE
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>
      <card2>
        <card2.Body className="card2-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-category"
              >
                {" "}
                {">"} 180
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                {UnitCharge180plus}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(UnitCharge180plus, "More than 180", "Unit")}
              >
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-fixedCharge"
              >
                {FixedCharge180plus}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(FixedCharge180plus, "More than 180", "Fixed")}
              >
                UPDATE
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {


  const [NewAmount, setNewAmount] = useState("");
  let history = useHistory();


  function getUpdatedata(e) {
    // console.log(NewAmount, props.categoryName, props.timePeriod);
    e.preventDefault();

    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

    var categoryId = "normal";



    Axios.post(`${process.env.REACT_APP_BASE_URL}/unit-charges-update/${categoryId}`, {
      newPrice: NewAmount,
      categoryName: props.categoryName,
      unitPeriod: props.unitPeriod
    }, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {
        // console.log(response.data.data[1]);

        if (response.data.status) {
          window.location.reload();//reload browser

        } else {

          history.push("/sign-in");
          window.location.reload();//reload browser
          deleteAllCookies();//delete all cookies
        }
      }).catch((error) => {
        console.log("this is error  response", error);
      });
  }

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


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={(e) => { getUpdatedata(e) }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update {props.categoryName} Charges - {props.unitPeriod}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="engineer-popup-price-changes"
            style={{ display: "flex" }}
          >
            <h4>Current {props.categoryName} Price </h4>

            <label className="engineer-current-label">LKR : {props.unitPrice}</label>
          </div>
          {/* <div
          className="engineer-popup-price-changes"
          style={{ display: "flex" }}
        >
          <h4>Increasing Amount </h4>
          <input className="engineer-increase-amount"></input>
        </div> */}

          <div
            className="engineer-popup-price-changes"
            style={{ display: "flex" }}
          >
            <h4>New {props.categoryName} Price </h4>
            <input className="engineer-new-unit-price" required onChange={(e) => { setNewAmount(e.target.value); }} placeholder="LKR"></input>
          </div>
        </Modal.Body>

        <Modal.Footer id="engineer-accept-reject-button">
          <Button type="submit" onClick={props.onHide} className="engineer-UpdateButton" >
            UPDATE
          </Button>
          <Button onClick={props.onHide} className="engineer-CancelButton">
            CANCEL
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
