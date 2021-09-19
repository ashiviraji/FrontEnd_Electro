import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import PendingNormalUnitCharges from "./PendingNormalUnitCharges";
import PendingNormalFixedCharges from "./PendingNormalFixedCharges";
import PendingTouUnitCharges from "./PendingTouUnitCharges";
import PendingTouFixedCharges from "./PendingTouFixedCharges";

export default function SimpleCard() {
  let history = useHistory();

  const [visibleState1, setVisibleState1] = useState("");
  const [visibleState2, setVisibleState2] = useState("");
  const [visibleState3, setVisibleState3] = useState("");
  const [visibleState4, setVisibleState4] = useState("");

  return (
    <div className="engineer-home-user-main">
      <div className="ceb-engineer-heading">
        <h2 align="right">
          <b>PENDING UNIT CHARGE REQUESTS SENT TO ADMIN</b>
        </h2>
      </div>
      <div
        style={{
          width: "90%",
          float: "left",
          marginTop: "3%",
          marginBottom: "3%",
          display: `${visibleState1}`,
        }}
      >
        <p>
          <center>
            <h5>
              <b>Normal Unit Charges </b>
            </h5>
          </center>
        </p>
        <PendingNormalUnitCharges setVisibleState1={setVisibleState1} />
      </div>

      <div
        style={{
          width: "90%",
          float: "left",
          marginTop: "3%",
          marginBottom: "3%",
          display: `${visibleState2}`,
        }}
      >
        <p>
          <center>
            <h5>
              <b>Normal Fixed Charges</b>
            </h5>
          </center>
        </p>
        <PendingNormalFixedCharges setVisibleState2={setVisibleState2} />
      </div>
      <div
        style={{
          width: "90%",
          float: "left",
          marginTop: "3%",
          marginBottom: "3%",
          display: `${visibleState3}`,
        }}
      >
        <p>
          <center>
            <h5>
              <b>TOU Unit Charges</b>
            </h5>
          </center>
        </p>
        <PendingTouUnitCharges setVisibleState3={setVisibleState3} />
      </div>
      <div
        style={{
          width: "90%",
          float: "left",
          marginTop: "3%",
          marginBottom: "3%",
          display: `${visibleState4}`,
        }}
      >
        <p>
          <center>
            <h5>
              <b>TOU Fixed Charges</b>
            </h5>
          </center>
        </p>
        <PendingTouFixedCharges setVisibleState4={setVisibleState4} />
      </div>
    </div>
  );
}
