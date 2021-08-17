import React from "react";
import { Card as card3 } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerpopup.css";

import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Axios from 'axios';

export default function EngineerUnitCharges0to60(props) {
  const [modalShow, setModalShow] = React.useState(false);

  let history = useHistory();

  const [Charge0to30, setCharge0to30] = useState("");
  const [Charge31to60, setCharge31to60] = useState("");
  // const [FixedCharge0to30, setFixedCharge0to30] = useState("");
  // const [FixedCharge31to60, setFixedCharge31to60] = useState("");

  const [normalUCharge, setNormalUCharge] = useState("");
  const [normalUnitPeriod, setNormalUnitPeriod] = useState("");
  const [Category, setCategory] = useState("");

  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

  var categoryId = "0-60";
  function getNormalUnitdata() {
    Axios.get(`${process.env.REACT_APP_BASE_URL}/unit-charges/${categoryId}`, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {
        // console.log(response.data.data[1]);

        if (response.data.status) {


          setCharge0to30(response.data.data[0]);
          // setFixedCharge0to30(response.data.data[0].Fixed_charge);


          setCharge31to60(response.data.data[1]);

          // setFixedCharge31to60(response.data.data[1].Fixed_charge);




        } else {

          history.push("/sign-in");
          window.location.reload();//reload browser
          deleteAllCookies();//delete all cookies
        }
      }).catch((error) => {
        console.log("this is 1c response", error);
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

  useEffect(() => {
    getNormalUnitdata();
  }, []);


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
            <label>FIXED BILLING MODEL (BETWEEN 0-60 kWh)</label>
          </b>
        </h2>
      </div>

      <div class="engineer-unit-table-0to60">
        <ul id="engineer-unit-horizontal-list">
          <li id="engineer-unit-title-category">Category</li>
          <li>Unit Charge(LKR/kWh)</li>
          <li>Fixed Charge(LKR/month)</li>
        </ul>
      </div>

      <card3>
        <card3.Body className="card3-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-category"
              >
                {Charge0to30.Unit_category}
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                {Charge0to30.Unit_charge}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(Charge0to30.Unit_charge, Charge0to30.Unit_category, "Unit")}
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
                {Charge0to30.Fixed_charge}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(Charge0to30.Fixed_charge, Charge0to30.Unit_category, "Fixed")}
              >
                UPDATE
              </button>
            </li>
          </ul>
        </card3.Body>
      </card3>

      <card3>
        <card3.Body className="card3-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-category"
              >
                {Charge31to60.Unit_category}
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                {Charge31to60.Unit_charge}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(Charge31to60.Unit_charge, Charge31to60.Unit_category, "Unit")}
              >
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-fixedCharge"
              >
                {Charge31to60.Fixed_charge}
              </label>
            </li>
            <li>
              <button
                className="engineer-unit-label-list-update"
                onClick={() => setDataToPopup(Charge31to60.Fixed_charge, Charge31to60.Unit_category, "Fixed")}
              >
                UPDATE
              </button>
            </li>
          </ul>
        </card3.Body>
      </card3>
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