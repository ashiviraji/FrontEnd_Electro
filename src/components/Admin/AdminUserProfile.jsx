import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../../assets/css/CEBEngineer/engineer.css";
import Engineer1 from "../../assets/img/engineer1.png";
import Axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ConfirmDialog from "../Customer/bill_control/ConfirmDialog";
import ConfirmationBox from "../common/ConfirmationBox";

toast.configure();

export default function EngineerUserProfile() {

  let history = useHistory();

  const [userFirstName, setUserFirstName] = useState("");
  const [useremail, setUseremai] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userDesignation, setUserDesignation] = useState("");
  const [userNic, setUserNic] = useState("");
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
  var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;



  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


  const getUser = (e) => {
    e.preventDefault();
    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });

    Axios.get(`${process.env.REACT_APP_BASE_URL}/user-profile/${ParamsUserId}`, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {

        if (response.data.status) {

          setUserFirstName(response.data.data[0].First_name);
          setUserLastName(response.data.data[0].Last_name);
          setUseremai(response.data.data[0].Email);
          setUserContact(response.data.data[0].Conatact_no);

          setUserAddress(response.data.data[0].Address);
          setUserDesignation(response.data.data[0].Role);
          setUserNic(response.data.data[0].NIC);


          console.log("successfully get user profile of ceb engineer");

        } else {

          confirmation()
        }
      }).catch((error) => {
        console.log("this is 1c response", error);
      });
  };


  const updateUser = (e) => {
    e.preventDefault();
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });
    Axios.put(`${process.env.REACT_APP_BASE_URL}/user-profile/${ParamsUserId}`, {
      firstName: userFirstName,
      lastName: userLastName,
      contact: userContact,
      nic: userNic,
      address: userAddress
    }, {
      headers: {
        authorization: `Token ${token}`
      },
    })
      .then((response) => {

        if (response.data.status) {
          document.cookie = `name=${userFirstName}`;
          toast.success('User Profile Updated', {
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("successfully update user profile of ceb engineer");

        } else {

          confirmation()
        }
      }).catch((error) => {
        console.log("This is  response", error);
      });
  };

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
    <div className="body-engineer">
      <form onLoad={(e) => { getUser(e) }}>
        <div className="ceb-engineer-heading">
          <h2 align="center">USER PROFILE</h2>
        </div>

        {/* <div class="alert alert-success w-25 mx-auto p-3" role="alert">

          <strong> Updated successfully!</strong>
        </div> */}

        <div class="row mb-3">
          <label for="firstname" class="col-sm-2 col-form-label" align="left">
            <b>First Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="firstname"
              value={userFirstName}
              onChange={(e) => { setUserFirstName(e.target.value); }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="lastname" class="col-sm-2 col-form-label" align="left">
            <b>Last Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="lastname"
              value={userLastName}
              onChange={(e) => { setUserLastName(e.target.value); }}

              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="email" class="col-sm-2 col-form-label" align="left">
            <b>Email</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="email"
              class="form-control"
              id="email"
              value={useremail}
              // onChange={(e) => { setUseremai(e.target.value); }}
              disabled
            />
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
              value={userContact}
              onChange={(e) => { setUserContact(e.target.value); }}

              required
            />
          </div>
        </div>

        {/* <div class="row mb-3">
          <label for="username" class="col-sm-2 col-form-label" align="left">
            <b>User Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="firstname"
              value="buthsaramadhushanka"
              required
            />
          </div>
        </div> */}

        {/* <div class="row mb-3">
          <label for="password" class="col-sm-2 col-form-label" align="left">
            <b>Password</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="password"
              class="form-control"
              id="firstname"
              value="123456789"
              required
            />
          </div>
        </div> */}

        <div class="row mb-3">
          <label for="address" class="col-sm-2 col-form-label" align="left">
            <b>Address</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="address"
              value={userAddress}
              onChange={(e) => { setUserAddress(e.target.value); }}

              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="nicnumber" class="col-sm-2 col-form-label" align="left">
            <b>NIC Number</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="nicnumber"
              value={userNic}
              onChange={(e) => { setUserNic(e.target.value); }}


            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="designation" class="col-sm-2 col-form-label" align="left">
            <b>Designation</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="designation"
              value={userDesignation}
              // onChange={(e) => { setUserDesignation(e.target.value); }}

              disabled
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="image" class="col-sm-2 col-form-label" align="left">
            <b>Image</b>
          </label>
          <div className="w-50 p-1">
            <img src={Engineer1} height={150} width={150} />
          </div>
        </div>

        <div class="row mb-3">
          <label for="updateimage" class="col-sm-2 col-form-label" align="left">
            <b>Update Image</b>
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
          <button type="button" className="admin-add-update-btn" onClick={(e) => {
            setConfirmDialog({
              isOpen: true,
              title: "Are You Sure Update Profile",
              subTitle: "Click  'Yes'  To Update Profile",
              btnStatus: "success",
              onConfirm: () => {
                updateUser(e);
              },
            });
          }}>
            Update
          </button>
        </div>
      </form>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ConfirmationBox
        confirmationBox={confirmationBox}
        setConfirmationBox={setConfirmationBox}
      />
    </div>
  );
}
