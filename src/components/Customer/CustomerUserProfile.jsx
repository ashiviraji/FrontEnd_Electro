import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
// import "../../assets/css/Admin/admin.css";
import "../../assets/css/Customer/customer.css";
import Admin from "../../assets/img/Admin.png";
import Axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ConfirmDialog from "../Customer/bill_control/ConfirmDialog";
import ConfirmationBox from "../common/ConfirmationBox";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

toast.configure();

export default function CustomerUserProfile() {
  let history = useHistory();

  const [userFirstName, setUserFirstName] = useState("");
  const [useremail, setUseremai] = useState("");
  const [userLastName, setUserLastName] = useState("");
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

  // console.log(ParamsUserId);

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

          // console.log("successfully get user profile of customer");

        } else {

          confirmation();
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
      userEmail: useremail,
      lastName: userLastName
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
          document.cookie = `name=${response.data.data[0].First_name + " " + response.data.data[0].Last_name}`;

        } else {
          confirmation();

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
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" color="blue" href="/dashboard-user">
          Dashboard
        </Link>
        <Typography color="text.primary"> User Profile</Typography>
      </Breadcrumbs>
      <div className="body-customeruser">
        <form onLoad={(e) => { getUser(e) }}>
          <div className="ceb-heading">
            <h2 align="center"> <b>USER PROFILE</b></h2>
          </div>

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
                onChange={(e) => { setUseremai(e.target.value); }}

                required
              />
            </div>
          </div>

          {/* <div class="row mb-3">
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
              value="076 922 5684"
              required
            />
          </div>
        </div> */}

          {/* <div class="row mb-3">
          <label for="username" class="col-sm-2 col-form-label" align="left">
            <b>User Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="firstname"
              value="hasinihatharasinghe"
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

          {/* <div class="row mb-3">
          <label for="address" class="col-sm-2 col-form-label" align="left">
            <b>Address</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="address"
              value="Elawella Road, Matara"
              required
            />
          </div>
        </div> */}
          {/* 
        <div class="row mb-3">
          <label for="nicnumber" class="col-sm-2 col-form-label" align="left">
            <b>NIC Number</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="nicnumber"
              value="971234567V"
              disabled
            />
          </div>
        </div> */}

          {/* <div class="row mb-3">
          <label for="designation" class="col-sm-2 col-form-label" align="left">
            <b>Designation</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="designation"
              value="Admin"
              disabled
            />
          </div>
        </div> */}

          <div class="row mb-3">
            <label for="image" class="col-sm-2 col-form-label" align="left">
              <b>Image</b>
            </label>
            <div className="w-50 p-1">
              <img src={Admin} height={150} width={150} />
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
    </div>
  );
}
