import React from "react";
import { Card as card2 } from "react-bootstrap";
import "../../assets/css/Admin/adminupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/Admin/popup.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

export default function AdminUnitChargesToU(props) {
  const [modalShow, setModalShow] = React.useState(false);

  let history = useHistory();

  const [touUChargeDay, setTouMduleUChargeDay] = useState("");
  const [touUChargeOffPeak, setTouMduleUChargeOffPeak] = useState("");
  const [touUChargePeak, setTouMduleUChargePeak] = useState("");
  const [touUCharge, setTouUCharge] = useState("");
  const [touTimePeriod, setTouTimePeriod] = useState("");
  const [Category, setCategory] = useState("");
  const [NewAmount, setNewAmount] = useState("");

  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

  var categoryId = "tou";
  function getToudata() {


    Axios.get(`${process.env.REACT_APP_BASE_URL}/unit-charges/${categoryId}`, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {
        // console.log(response.data.data[1]);

        if (response.data.status) {


          setTouMduleUChargeDay(response.data.data[0]);

          setTouMduleUChargeOffPeak(response.data.data[1]);
          setTouMduleUChargePeak(response.data.data[2]);




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

  useEffect(() => {
    getToudata();
  }, []);

  function setDataToPopup(value, timePeriod, newValue, categ) {
    setModalShow(true);
    setTouUCharge(value);
    setTouTimePeriod(timePeriod);
    setCategory(categ);
    setNewAmount(newValue);
  }


  return (
    <div className="admin-unit-body">
      <div id="admin-tou-title-heading">
        <h2>
          <b>
            <label>TOU BILLING MODEL</label>
          </b>
        </h2>
      </div>

      <div class="admin-unit-table-0to60">
        <ul id="admin-unit-horizontal-list">
          <li id="admin-unit-title-category">Time of Use(ToU)</li>
          <li>Unit Charge(LKR/kWh)</li>
          <li>Fixed Charge(LKR/month)</li>
        </ul>
      </div>

      <card2>
        <card2.Body className="card2-body">
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-category"
              >
                {touUChargePeak.Time_category}  (18.30-22.30)
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-unitCharge"
              >
                {touUChargePeak.Unit_charge}
              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(touUChargePeak.Unit_charge, touUChargePeak.Time_category, touUChargePeak.Update_unit_charges, "Unit")}
                disabled={!touUChargePeak.Update_ucharge_status}
              >
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
              <MyVerticallyCenteredModal
                unitPrice={touUCharge}
                timePeriod={touTimePeriod}
                categoryName={Category}
                newAmount={NewAmount}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-fixedCharge"
              >
                {touUChargePeak.Fixed_charge}
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" onClick={() => setDataToPopup(touUChargePeak.Fixed_charge, touUChargePeak.Time_category, touUChargePeak.Update_fixed_charges, "Fixed")} disabled={!touUChargePeak.Update_fcharge_status}>
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>

      <card2>
        <card2.Body className="card2-body">
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-category"
              >
                {touUChargeDay.Time_category} (5.30-18.30)
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-unitCharge"
              >
                {touUChargeDay.Unit_charge}
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" onClick={() => setDataToPopup(touUChargeDay.Unit_charge, touUChargeDay.Time_category, touUChargeDay.Update_unit_charges, "Unit")} disabled={!touUChargeDay.Update_ucharge_status}>
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-fixedCharge"
              >
                {touUChargeDay.Fixed_charge}
              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(touUChargeDay.Fixed_charge, touUChargeDay.Time_category, touUChargeDay.Update_fixed_charges, "Fixed")}
                disabled={!touUChargeDay.Update_fcharge_status}
              >
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>

      <card2>
        <card2.Body className="card2-body">
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-category"
              >
                {touUChargeOffPeak.Time_category}  (22.30-05.30)
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-unitCharge"
              >
                {touUChargeOffPeak.Unit_charge}
              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(touUChargeOffPeak.Unit_charge, touUChargeOffPeak.Time_category, touUChargeOffPeak.Update_unit_charges, "Unit")}
                disabled={!touUChargeOffPeak.Update_ucharge_status}
              >
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-fixedCharge"
              >
                {touUChargeOffPeak.Fixed_charge}
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" onClick={() => setDataToPopup(touUChargeOffPeak.Fixed_charge, touUChargeOffPeak.Time_category, touUChargeOffPeak.Update_fixed_charges, "Fixed")} disabled={!touUChargeOffPeak.Update_fcharge_status}>
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {


  const [increasingAmount, setIncreasingAmount] = useState("");

  let history = useHistory();


  function getTouUpdatedata(e) {
    console.log(props.newAmount, props.categoryName, props.timePeriod);
    e.preventDefault();

    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

    var categoryId = "tou";



    Axios.post(`${process.env.REACT_APP_BASE_URL}/accepted-unit-charges-update/${categoryId}`, {
      newPrice: props.newAmount,
      categoryName: props.categoryName,
      timePeriod: props.timePeriod
    }, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {
        // console.log(response.data.data[1]);

        if (response.data.status) {
          window.location.reload();//reload browser
          toast.success('Updated successfuly', {
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
   * Rejected unit charges update TOU by admin
   * @param {*} e 
   */
  function rejectUpdatedata(e) {
    console.log(props.newAmount, props.categoryName, props.timePeriod);
    e.preventDefault();

    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

    var categoryId = "tou";



    Axios.post(`${process.env.REACT_APP_BASE_URL}/reject-unit-charges-update/${categoryId}`, {
      categoryName: props.categoryName,
      timePeriod: props.timePeriod
    }, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {

        if (response.data.status) {
          window.location.reload();//reload browser
          toast.success('Rejected successfuly', {
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {

          history.push("/sign-in");
          window.location.reload();//reload browser
          deleteAllCookies();//delete all cookies
        }
      }).catch((error) => {
        console.log("this is error  response", error);
      });
  }


  function rejectedUpdatedata(e) {
    rejectUpdatedata(e);
    props.onHide();
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
      <form onSubmit={(e) => { getTouUpdatedata(e) }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">

            Update {props.categoryName} Charges - {props.timePeriod}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="engineer-popup-price-changes"
            style={{ display: "flex" }}
          >
            <h4>Current  {props.categoryName} Price </h4>

            <label className="engineer-current-label">LKR : {props.unitPrice}</label>
          </div>
          {/* <div
          className="engineer-popup-price-changes"
          style={{ display: "flex" }}
        >
          <h4>Increasing Amount </h4>
          <input className="engineer-increase-amount"
          // onChange={(e) => { priceChanges(e) }}
          ></input>
        </div> */}

          <div
            className="engineer-popup-price-changes"
            style={{ display: "flex" }}
          >
            <h4>New  {props.categoryName} Price </h4>
            <label className="engineer-new-unit-price">LKR : {props.newAmount}</label>
          </div>
        </Modal.Body>

        <Modal.Footer id="engineer-accept-reject-button">
          <Button type="submit" onClick={props.onHide} className="engineer-UpdateButton">
            UPDATE
          </Button>
          <Button onClick={(e) => { rejectedUpdatedata(e) }} className="engineer-CancelButton">
            CANCEL
          </Button>
        </Modal.Footer>

      </form>
    </Modal>
  );
}
