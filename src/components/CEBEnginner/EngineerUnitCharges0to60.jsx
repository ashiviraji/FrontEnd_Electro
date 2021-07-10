import React from "react";
import { Card as card3 } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerpopup.css";

export default function EngineerUnitCharges0to60(props) {
  const [modalShow, setModalShow] = React.useState(false);
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
                00-30
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-unit-inside-unitCharge"
              >
                2.50
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
                30.00
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
                4.85
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
                60.00
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
