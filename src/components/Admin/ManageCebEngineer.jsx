import React from "react";
import "../../assets/css/Admin/admin.css";
import Engineer from "../../assets/img/CEBEngineer.png";
import { GrUserAdd } from "react-icons/gr";
import { NavLink } from "../../components/common/Sidebar-admin/SidebarElement";

export default function ManageCebEngineer() {
  return (
    <div className="body-manageengineer">
      <NavLink to="/addnewcebengineer">
        <GrUserAdd />
        <button className="addnewceb-btn">Add New CEB Engineer</button>
      </NavLink>

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

        <div className="row mb-3">
          <label for="image" className="col-sm-2 col-form-label" align="left">
            <b>Image</b>
          </label>
          <div className="w-50 p-1">
            <img src={Engineer} height={200} width={200} />
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
