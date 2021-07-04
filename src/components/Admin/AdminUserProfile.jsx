import React from "react";
import "../../assets/css/admin.css";
import Admin from "../../assets/img/Admin.png";

export default function AdminUserProfile() {
  return (
    <div className="body-engineer">
      <form>
        <div className="ceb-heading">
          <h1 align="center">User Profile</h1>
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
              value="Hasini"
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
              value="Hatharasinghe"
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
              value="hasinividushanka@gmail.com"
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
              value="076 606 5684"
              required
            />
          </div>
        </div>

        <div class="row mb-3">
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
        </div>

        <div class="row mb-3">
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
        </div>

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
