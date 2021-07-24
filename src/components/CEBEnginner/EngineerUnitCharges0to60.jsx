import React from "react";
import { Card as card3 } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerpopup.css";
import { useState } from "react";
import { useHistory } from "react-router";
import Axios from 'axios';


export default function EngineerUnitCharges0to60(props) {
  const [modalShow, setModalShow] = React.useState(false);

  let history = useHistory();

  const [UnitCharge0to30, setUnitCharge0to30] = useState("");
  const [UnitCharge31to60, setUnitCharge31to60] = useState("");
  const [FixedCharge0to30, setFixedCharge0to30] = useState("");
  const [FixedCharge31to60, setFixedCharge31to60] = useState("");

  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;



  Axios.get(`http://localhost:3001/unit-charges0to60`, {
    headers: {
      authorization: `Token ${token}`
    }
  })
    .then((response) => {
      // console.log(response.data.data[1]);

      if (response.data.status) {


        setUnitCharge0to30(response.data.data[0].Unit_charge);
        setFixedCharge0to30(response.data.data[0].Fixed_charge);


        setUnitCharge31to60(response.data.data[1].Unit_charge);

        setFixedCharge31to60(response.data.data[1].Fixed_charge);




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


  return (
    <div className="engineer-unit-body">
      <form>
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
                  00-30
                </label>
              </li>
              <li>
                <label
                  className="engineer-unit-label-list-inside"
                  id="engineer-unit-inside-unitCharge"
                >
                  {UnitCharge0to30}
                </label>
              </li>
              <li>
                <button
                  className="engineer-unit-label-list-update"
                  onClick={() => setModalShow(true)}
                >
                  UPDATE
                </button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </li>
              <li>
                <label
                  className="engineer-unit-label-list-inside"
                  id="engineer-unit-inside-fixedCharge"
                >
                  {FixedCharge0to30}
                </label>
              </li>
              <li>
                <button
                  className="engineer-unit-label-list-update"
                  onClick={() => setModalShow(true)}
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
                  31-60
                </label>
              </li>
              <li>
                <label
                  className="engineer-unit-label-list-inside"
                  id="engineer-unit-inside-unitCharge"
                >
                  {UnitCharge31to60}
                </label>
              </li>
              <li>
                <button
                  className="engineer-unit-label-list-update"
                  onClick={() => setModalShow(true)}
                >
                  UPDATE
                </button>
              </li>
              <li>
                <label
                  className="engineer-unit-label-list-inside"
                  id="engineer-unit-inside-fixedCharge"
                >
                  {FixedCharge31to60}
                </label>
              </li>
              <li>
                <button
                  className="engineer-unit-label-list-update"
                  onClick={() => setModalShow(true)}
                >
                  UPDATE
                </button>
              </li>
            </ul>
          </card3.Body>
        </card3>
      </form>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Unit Charges
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div
          className="engineer-popup-price-changes"
          style={{ display: "flex" }}
        >
          <h4>Current Unit Price </h4>

          <label className="engineer-current-label">LKR : 7.85</label>
        </div>
        <div
          className="engineer-popup-price-changes"
          style={{ display: "flex" }}
        >
          <h4>Increasing Amount </h4>
          <input className="engineer-increase-amount"></input>
        </div>

        <div
          className="engineer-popup-price-changes"
          style={{ display: "flex" }}
        >
          <h4>New Unit Price </h4>
          <input className="engineer-new-unit-price"></input>
        </div>
      </Modal.Body>

      <Modal.Footer id="engineer-accept-reject-button">
        <Button onClick={props.onHide} className="engineer-UpdateButton">
          UPDATE
        </Button>
        <Button onClick={props.onHide} className="engineer-CancelButton">
          CANCEL
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
