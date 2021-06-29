import React from "react";
import "../../assets/css/admin.css";

export default function AddNewCebEngineer() {
  return (
    <div className="body-engineer">
      <form>
        <div className="heading">
          <h1>Add New CEB Engineer</h1>
        </div>

        <div class="row mb-3">
          <label for="firstname" class="col-sm-2 col-form-label" align="left">
            <b>First Name</b>
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="firstname" required />
          </div>
        </div>

        <div class="row mb-3">
          <label for="lastname" class="col-sm-2 col-form-label" align="left">
            <b>Last Name</b>
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="lastname" required />
          </div>
        </div>

        <div class="row mb-3">
          <label for="email" class="col-sm-2 col-form-label" align="left">
            <b>Email</b>
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="email" required />
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
          <div class="col-sm-10">
            <input
              type="tel"
              class="form-control"
              id="contactnumber"
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="image" class="col-sm-2 col-form-label" align="left">
            <b>Image</b>
          </label>
          <div class="col-sm-10">
            <input
              type="file"
              accept="image/*"
              class="form-control"
              id="fileToUpload"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn submitbtn my-3">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
