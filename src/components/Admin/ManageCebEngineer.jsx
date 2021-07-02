import React from "react";
// import { Route } from "react-router-dom";
import "../../assets/css/admin.css";
// import AddNewCebEngineer from "../../views/Admin/AddNewCebEngineer";
import Engineer from "../../assets/img/CEBEngineer.png";

export default function ManageCebEngineer() {
  return (
    <div className="body-manageengineer">
      <form>
        <div className="ceb-heading">
          <h1 align="center">W.K.B.K.Madhushanka</h1>
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
              value="Buthsara"
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
              value="Madhushanka"
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
              value="buthsaramadhushanka@gmail.com"
              required
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
              value="078 344 1655"
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="image" class="col-sm-2 col-form-label" align="left">
            <b>Image</b>
          </label>
          <div class="w-50 p-1">
            <img src={Engineer} height={200} width={200} />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="adminbtn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
