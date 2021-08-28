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
import ConfirmDialog from "../Customer/bill_control/ConfirmDialog";

toast.configure();

export default function AdminUnitCharges0to60(props) {
  const [modalShow, setModalShow] = React.useState(false);

  let history = useHistory();

  const [Charge0to30, setCharge0to30] = useState("");
  const [Charge31to60, setCharge31to60] = useState("");
  const [normalUCharge, setNormalUCharge] = useState("");
  const [normalUnitPeriod, setNormalUnitPeriod] = useState("");
  const [Category, setCategory] = useState("");
  const [NewAmount, setNewAmount] = useState("");

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
          setCharge31to60(response.data.data[1]);

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


  function setDataToPopup(value, unitPeriod, newValue, categ) {
    setModalShow(true);
    setNormalUCharge(value);
    setNormalUnitPeriod(unitPeriod);
    setCategory(categ)
    setNewAmount(newValue);

  }


  return (
    <div className="admin-unit-body">
      <div id="admin-unit-title-heading">
        <h2>
          <b>
            <label>FIXED BILLING MODEL (BETWEEN 0-60 kWh)</label>
          </b>
        </h2>
      </div>

      <div class="admin-unit-table-0to60">
        <ul id="admin-unit-horizontal-list">
          <li id="admin-unit-title-category">Category</li>
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
                id="admin-unit-inside-category"
              >
                {Charge0to30.Unit_category}
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                {Charge0to30.Unit_charge}
              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge0to30.Unit_charge, Charge0to30.Unit_category, Charge0to30.Update_unit_charges, "Unit")}
                disabled={!Charge0to30.Update_ucharge_status}
              >
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
              <MyVerticallyCenteredModal
                unitPrice={normalUCharge}
                unitPeriod={normalUnitPeriod}
                categoryName={Category}
                newAmount={NewAmount}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-fixedCharge"
              >
                {Charge0to30.Fixed_charge}
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge0to30.Fixed_charge, Charge0to30.Unit_category, Charge0to30.Update_fixed_charges, "Fixed")}

                disabled={!Charge0to30.Update_fcharge_status}
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
                id="admin-unit-inside-category"
              >
                {Charge31to60.Unit_category}
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                {Charge31to60.Unit_charge}
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge31to60.Unit_charge, Charge31to60.Unit_category, Charge31to60.Update_unit_charges, "Unit")}
                disabled={!Charge31to60.Update_ucharge_status}
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
                id="admin-unit-inside-fixedCharge"
              >
                {Charge31to60.Fixed_charge}
              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge31to60.Fixed_charge, Charge31to60.Unit_category, Charge31to60.Update_fixed_charges, "Fixed")}
                disabled={!Charge31to60.Update_fcharge_status}

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
    </div>
  );
}

function MyVerticallyCenteredModal(props) {

  let history = useHistory();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  function acceptedUpdatedata(e) {
    e.preventDefault();

    getUpdatedata(e);
    props.onHide();
  }

  function getUpdatedata(e) {
    // console.log(NewAmount, props.categoryName, props.timePeriod);
    e.preventDefault();
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

    var categoryId = "normal";



    Axios.post(`${process.env.REACT_APP_BASE_URL}/accepted-unit-charges-update/${categoryId}`, {
      newPrice: props.newAmount,
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

  function rejectedUpdatedata(e) {
    rejectUpdatedata(e);
    props.onHide();
  }

  function rejectUpdatedata(e) {
    // console.log(NewAmount, props.categoryName, props.timePeriod);
    e.preventDefault();
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

    var categoryId = "normal";



    Axios.post(`${process.env.REACT_APP_BASE_URL}/reject-unit-charges-update/${categoryId}`, {
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
          toast.success('rejected successfuly', {
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
      <form >
        {/* onSubmit={(e) => { getUpdatedata(e) }} */}
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
            <label className="engineer-new-unit-price">LKR : {props.newAmount}</label>

          </div>
        </Modal.Body>

        <Modal.Footer id="engineer-accept-reject-button">
          <Button type="button" onClick={(e) => {
            setConfirmDialog({
              isOpen: true,
              title: "Are You sure Accept changes",
              subTitle: "You can't  undo this operation",
              btnStatus: "success",
              onConfirm: (e) => {
                acceptedUpdatedata(e);
              },
            })
          }} className="engineer-UpdateButton" >
            ACCEPT
          </Button>
          <Button className="engineer-CancelButton" onClick={(e) => {
            setConfirmDialog({
              isOpen: true,
              title: "Are You sure Reject changes",
              subTitle: "You can't  undo this operation",
              btnStatus: "danger",
              onConfirm: (e) => {
                rejectedUpdatedata(e);
              },
            });
          }}>
            REJECT
          </Button>
        </Modal.Footer>
      </form>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </Modal>
  );
}