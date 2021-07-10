import React from "react";
import { Card as card2 } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerpopup.css";

export default function EngineerUnitChargesToU(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="engineer-unit-body">
      <div id="engineer-tou-title-heading">
        <h2>
          <b>
            <label>ToU BILLING MODEL</label>
          </b>
        </h2>
      </div>

      <div class="engineer-unit-table-0to60">
        <ul id="engineer-unit-horizontal-list">
          <li id="engineer-unit-title-category">Time of Use(ToU)</li>
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
                id="engineer-tou-inside-category"
              >
                Peak (18.30-22.30)
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-tou-inside-unitCharge"
              >
                54.00
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
                id="engineer-tou-inside-fixedCharge"
              >
                540.00
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
        </card2.Body>
      </card2>

      <card2>
        <card2.Body className="card2-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-tou-inside-category"
              >
                Day (5.30-18.30)
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-tou-inside-unitCharge"
              >
                25.00
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
                id="engineer-tou-inside-fixedCharge"
              >
                540.00
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
        </card2.Body>
      </card2>

      <card2>
        <card2.Body className="card2-body">
          <ul id="engineer-unit-horizontal-list-inside">
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-tou-inside-category"
              >
                Off-peak (22.30-05.30)
              </label>
            </li>
            <li>
              <label
                className="engineer-unit-label-list-inside"
                id="engineer-tou-inside-unitCharge"
              >
                13.00
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
                id="engineer-tou-inside-fixedCharge"
              >
                540.00
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
        </card2.Body>
      </card2>
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
