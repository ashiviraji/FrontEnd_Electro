import React from "react";
import "../../assets/css/Admin/admin.css";
import Engineer1 from "../../assets/img/engineer1.png";
import { GrUserAdd } from "react-icons/gr";
import { NavLink } from "../common/Sidebar-admin/SidebarElement";

export default function ManageCebEngineer() {
  return (
    <div className="body-manageengineer">
      <form>
        <div className="ceb-heading">
          <h1 align="center">W.K.B.K.Madhushanka</h1>
        </div>

        <div className="row mb-3">
          <label
            for="firstname"
            className="col-sm-2 col-form-label"
            align="left"
          >
            <b>First Name</b>
          </label>
          <div className="w-50 p-1">
            <input
              type="text"
              className="form-control"
              id="firstname"
              value="Buthsara"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            for="lastname"
            className="col-sm-2 col-form-label"
            align="left"
          >
            <b>Last Name</b>
          </label>
          <div className="w-50 p-1">
            <input
              type="text"
              className="form-control"
              id="lastname"
              value="Madhushanka"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="email" className="col-sm-2 col-form-label" align="left">
            <b>Email</b>
          </label>
          <div className="w-50 p-1">
            <input
              type="email"
              className="form-control"
              id="email"
              value="buthsaramadhushanka@gmail.com"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            for="contactnumber"
            className="col-sm-2 col-form-label"
            align="left"
          >
            <b>Contact Number</b>
          </label>
          <div className="w-50 p-1">
            <input
              type="tel"
              className="form-control"
              id="contactnumber"
              value="078 344 1655"
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="address" class="col-sm-2 col-form-label" align="left">
            <b>Address</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="address"
              value="Akuress, Matara"
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
              value="961234567V"
              disabled
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
              value="CEB Engineer"
              disabled
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="image" className="col-sm-2 col-form-label" align="left">
            <b>Image</b>
          </label>
          <div className="w-50 p-1">
            <img src={Engineer1} height={150} width={150} />
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
