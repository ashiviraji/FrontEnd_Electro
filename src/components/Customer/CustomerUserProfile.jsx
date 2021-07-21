import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
// import "../../assets/css/Admin/admin.css";
import "../../assets/css/Customer/customer.css";
import Admin from "../../assets/img/Admin.png";
import Axios from 'axios';

export default function CustomerUserProfile() {
  let history = useHistory();

  const [userFirstName, setUserFirstName] = useState("");
  const [useremail, setUseremai] = useState("");
  const [userLastName, setUserLastName] = useState("");
  // const [ParamsUserId, setParamsUserId] = useState("");


  const getUser = (e) => {
    e.preventDefault();
    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;

    // console.log(ParamsUserId);

    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

    Axios.get(`http://localhost:3001/user-profile/${ParamsUserId}`, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {
        // console.log(response.data.status);
        // history.push("/sign-in")
        // console.log("this is response", response);
        if (response.data.status) {

          setUserFirstName(response.data.data[0].First_name);
          setUserLastName(response.data.data[0].Last_name);
          setUseremai(response.data.data[0].Email);

          console.log("successfully get user profile of customer");

        } else {

          history.push("/sign-in");
          window.location.reload();//reload browser
          deleteAllCookies();//delete all cookies
        }
      }).catch((error) => {
        console.log("this is 1c response", error);
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

  return (
    <div className="body-customeruser">
      <form onLoad={(e) => { getUser(e) }}>
        <div className="ceb-heading">
          <h2 align="center">USER PROFILE</h2>
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
          <button type="submit" className="admin-add-update-btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
