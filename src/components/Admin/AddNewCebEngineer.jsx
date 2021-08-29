import React from "react";
import "../../assets/css/Admin/admin.css";
import Axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react";
import { useHistory } from "react-router";
import ConfirmationBox from "../common/ConfirmationBox";

toast.configure();
export default function AddNewCebEngineer() {

  let history = useHistory();

  const [userFirstName, setUserFirstName] = useState("");
  const [useremail, setUseremai] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNic, setUserNic] = useState("");
  const [confirmationBox, setConfirmationBox] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

  const AddNewCebEngineer = (e) => {
    e.preventDefault();
    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });

    Axios.post(`${process.env.REACT_APP_BASE_URL}/add-cebengineer`, {
      firstName: userFirstName,
      lastName: userLastName,
      contact: userContact,
      nic: userNic,
      address: userAddress,
      email: useremail,
      password: userPassword
    }, {
      headers: {
        authorization: `Token ${token}`
      },
    })
      .then((response) => {

        if (response.data.status) {
          history.push("/manage-cebengineer");
          toast.success('New CEB Engineer Added Successfully', {
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("New CEB Engineer Added Successfully");

        } else {

          confirmation()
        }
      }).catch((error) => {
        console.log("This is  response", error);
      });
  };
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
    <div className="body-manageengineer">
      <form onSubmit={(e) => { AddNewCebEngineer(e) }}>
        <div className="ceb-heading">
          <h2 align="center">ADD NEW CEB ENGINEER</h2>
        </div>

        <div class="row mb-3">
          <label for="firstname" class="col-sm-2 col-form-label" align="left">
            <b>First Name</b>
          </label>
          <div class="w-50 p-1">
            <input type="text" class="form-control" id="firstname" onChange={(e) => { setUserFirstName(e.target.value); }}
              required />
          </div>
        </div>

        <div class="row mb-3">
          <label for="lastname" class="col-sm-2 col-form-label" align="left">
            <b>Last Name</b>
          </label>
          <div class="w-50 p-1">
            <input type="text" class="form-control" id="lastname" onChange={(e) => { setUserLastName(e.target.value); }}
              required />
          </div>
        </div>

        <div class="row mb-3">
          <label for="email" class="col-sm-2 col-form-label" align="left">
            <b>Email</b>
          </label>
          <div class="w-50 p-1">
            <input type="email" class="form-control" id="email" onChange={(e) => { setUseremai(e.target.value); }}
              required />
          </div>
        </div>

        <div class="row mb-3">
          <label for="password" class="col-sm-2 col-form-label" align="left">
            <b>Password</b>
          </label>
          <div class="w-50 p-1">
            <input type="password" class="form-control" id="password" onChange={(e) => { setUserPassword(e.target.value); }}
              required />
          </div>
        </div>

        <div class="row mb-3">
          <label
            for="contactnumber"
            class="col-sm-2 col-form-label"
            align="left"
          >
            <b>Contact Number</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="tel"
              class="form-control"
              id="contactnumber"
              onChange={(e) => { setUserContact(e.target.value); }}

              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="address" class="col-sm-2 col-form-label" align="left">
            <b>Address</b>
          </label>
          <div class="w-50 p-1">
            <input type="text" class="form-control" id="address" onChange={(e) => { setUserAddress(e.target.value); }}
              required />
          </div>
        </div>

        <div class="row mb-3">
          <label for="nicnumber" class="col-sm-2 col-form-label" align="left">
            <b>NIC Number</b>
          </label>
          <div class="w-50 p-1">
            <input type="text" class="form-control" id="nicnumber" onChange={(e) => { setUserNic(e.target.value); }}
              required />
          </div>
        </div>

        <div class="row mb-3">
          <label for="image" class="col-sm-2 col-form-label" align="left">
            <b>Image</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="file"
              accept="image/*"
              class="form-control"
              id="fileToUpload"
            />
          </div>
        </div>

        <div>
          <button type="submit" className="admin-add-update-btn">
            ADD
          </button>
        </div>
      </form>
      <ConfirmationBox
        confirmationBox={confirmationBox}
        setConfirmationBox={setConfirmationBox}
      />
    </div>
  );
}
