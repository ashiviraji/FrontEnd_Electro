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
import ConfirmationBox from "../common/ConfirmationBox";

toast.configure();

export default function AdminUnitCharges60plus(props) {
  const [modalShow, setModalShow] = React.useState(false);


  let history = useHistory();

  const [Charge0to60, setCharge0to60] = useState("");
  const [Charge61to90, setCharge61to90] = useState("");
  const [Charge91to120, setCharge91to120] = useState("");
  const [Charge121to180, setCharge121to180] = useState("");
  const [Charge180plus, setCharge180plus] = useState("");
  const [normalUCharge, setNormalUCharge] = useState("");
  const [normalUnitPeriod, setNormalUnitPeriod] = useState("");
  const [Category, setCategory] = useState("");
  const [NewAmount, setNewAmount] = useState("");
  const [confirmationBox, setConfirmationBox] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

  var categoryId = "60+";
  function getNormalUnitdata() {
    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });
    Axios.get(`${process.env.REACT_APP_BASE_URL}/unit-charges/${categoryId}`, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {
        // console.log(response.data.data[1]);

        if (response.data.status) {


          setCharge0to60(response.data.data[0]);
          setCharge121to180(response.data.data[1]);
          setCharge61to90(response.data.data[2]);
          setCharge91to120(response.data.data[3]);
          setCharge180plus(response.data.data[4]);


        } else {

          confirmation()
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

  function confirmation() {
    setConfirmationBox({
      isOpen: true,
      title: "Can Not Perform This Action!",
      subTitle: "Your session has timed out. Please log in again.",
      btnStatus: "warning",
      onConfirm: () => {
        history.push("/sign-in");
        window.location.reload();//reload browser
        deleteAllCookies();
      },
    });
  }

  return (
    <div className="admin-unit-body">
      <div id="admin-unit-title-heading">
        <h2>
          <b>
            <label>FIXED BILLING MODEL (ONLY FOR 60kWh+)</label>
          </b>
        </h2>
      </div>

      <div class="admin-unit-table">
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
                {Charge0to60.Unit_category}
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                {Charge0to60.Unit_charge}
              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge0to60.Unit_charge, Charge0to60.Unit_category, Charge0to60.Update_unit_charges, "Unit")}
                disabled={!Charge0to60.Update_ucharge_status}              >
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
                getFunc={getNormalUnitdata}
                onHide={() => setModalShow(false)}
              />
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-fixedCharge"
              >
                {Charge0to60.Fixed_charge}

              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge0to60.Fixed_charge, Charge0to60.Unit_category, Charge0to60.Update_fixed_charges, "Fixed")}

                disabled={!Charge0to60.Update_fcharge_status}
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
                {Charge61to90.Unit_category}

              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                {Charge61to90.Unit_charge}

              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge61to90.Unit_charge, Charge61to90.Unit_category, Charge61to90.Update_unit_charges, "Unit")}
                disabled={!Charge61to90.Update_ucharge_status}

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
                {Charge61to90.Fixed_charge}

              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge61to90.Fixed_charge, Charge61to90.Unit_category, Charge61to90.Update_fixed_charges, "Fixed")}

                disabled={!Charge61to90.Update_fcharge_status}
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
                {Charge91to120.Unit_category}

              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                {Charge91to120.Unit_charge}

              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge91to120.Unit_charge, Charge91to120.Unit_category, Charge91to120.Update_unit_charges, "Unit")}

                disabled={!Charge91to120.Update_ucharge_status}
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
                {Charge91to120.Fixed_charge}

              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge91to120.Unit_charge, Charge91to120.Unit_category, Charge91to120.Update_unit_charges, "Fixed")}

                disabled={!Charge91to120.Update_fcharge_status}
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
                {Charge121to180.Unit_category}
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                {Charge121to180.Unit_charge}

              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge121to180.Unit_charge, Charge121to180.Unit_category, Charge121to180.Update_unit_charges, "Unit")}

                disabled={!Charge121to180.Update_ucharge_status}
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
                {Charge121to180.Fixed_charge}

              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge121to180.Unit_charge, Charge121to180.Unit_category, Charge121to180.Update_unit_charges, "Fixed")}

                disabled={!Charge121to180.Update_fcharge_status}>
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
                {/* {Charge180plus.Unit_category} */}
                {" "}
                {">"} 180
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                {Charge180plus.Unit_charge}

              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update"

                onClick={() => setDataToPopup(Charge180plus.Unit_charge, Charge180plus.Unit_category, Charge180plus.Update_unit_charges, "Unit")}
                disabled={!Charge180plus.Update_ucharge_status}>
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
                {Charge180plus.Fixed_charge}
              </label>
            </li>
            <li>
              <button
                className="admin-unit-label-list-update"
                onClick={() => setDataToPopup(Charge180plus.Fixed_charge, Charge180plus.Unit_category, Charge180plus.Update_fixed_charges, "Fixed")}
                disabled={!Charge180plus.Update_fcharge_status}
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
      <ConfirmationBox
        confirmationBox={confirmationBox}
        setConfirmationBox={setConfirmationBox}
      />
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
  const [confirmationBox, setConfirmationBox] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  function acceptUpdatedata(e) {
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
    setConfirmationBox({
      ...confirmationBox,
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
          // window.location.reload();//reload browser
          props.getFunc();
          toast.success('Updated Successfuly', {
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {

          confirmation()
        }
      }).catch((error) => {
        console.log("this is error  response", error);
      });
  }


  /**
   * Rejected unit charges update normal model by admin
   * @param {*} e 
   */
  function rejectUpdatedata(e) {
    e.preventDefault();
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    setConfirmationBox({
      ...confirmationBox,
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

        if (response.data.status) {
          // window.location.reload();//reload browser
          props.getFunc();
          toast.success('Rejected Successfuly', {
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {

          confirmation()
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
   * delete all cookies 
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

  function confirmation() {
    setConfirmationBox({
      isOpen: true,
      title: "Can Not Perform This Action!",
      subTitle: "Your session has timed out. Please log in again.",
      btnStatus: "warning",
      onConfirm: () => {
        history.push("/sign-in");
        window.location.reload();//reload browser
        deleteAllCookies();
      },
    });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form>
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
          <Button type="button" className="engineer-UpdateButton" onClick={(e) => {
            setConfirmDialog({
              isOpen: true,
              title: "Are You Sure Accept Changes",
              subTitle: "You can't  undo this operation",
              btnStatus: "success",
              onConfirm: () => {
                acceptUpdatedata(e);
              },
            });
          }}>
            ACCEPT
          </Button>
          <Button className="engineer-CancelButton" onClick={(e) => {
            setConfirmDialog({
              isOpen: true,
              title: "Are You Sure Reject Changes",
              subTitle: "You can't  undo this operation",
              btnStatus: "danger",
              onConfirm: () => {
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
      <ConfirmationBox
        confirmationBox={confirmationBox}
        setConfirmationBox={setConfirmationBox}
      />
    </Modal>
  );
}
