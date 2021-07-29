import React from "react";
import "../../src/assets/css/informationTable.css";
import { useHistory } from "react-router";
import Axios from 'axios';
import { useEffect, useState } from "react";


export default function InformationTable() {

  let history = useHistory();

  const [fixedUCharge0to30, setFixedMduleUCharge0to30] = useState("");
  const [fixedUCharge0to60, setFixedMduleUCharge0to60] = useState("");
  const [fixedUCharge121to180, setFixedMduleUCharge121to180] = useState("");
  const [fixedUCharge31to60, setFixedMduleUCharge31to60] = useState("");
  const [fixedUCharge61to90, setFixedMduleUCharge61to90] = useState("");
  const [fixedUCharge91to120, setFixedMduleUCharge91to120] = useState("");
  const [fixedUCharge180plus, setFixedMduleUCharge180plus] = useState("");

  const [touUChargeDay, setTouMduleUChargeDay] = useState("");
  const [touUChargeOffPeak, setTouMduleUChargeOffPeak] = useState("");

  const [touUChargePeak, setTouMduleUChargePeak] = useState("");










  var category = "all";
  function getalldata() {


    Axios.get(`${process.env.REACT_APP_BASE_URL}/information/${category}`)
      .then((response) => {

        if (response.data.status) {

          console.log(response.data.data.result2);
          setFixedMduleUCharge0to30(response.data.data.result1[0]);
          setFixedMduleUCharge0to60(response.data.data.result1[1]);
          setFixedMduleUCharge121to180(response.data.data.result1[2]);
          setFixedMduleUCharge31to60(response.data.data.result1[3]);
          setFixedMduleUCharge61to90(response.data.data.result1[4]);
          setFixedMduleUCharge91to120(response.data.data.result1[5]);
          setFixedMduleUCharge180plus(response.data.data.result1[6]);

          setTouMduleUChargeDay(response.data.data.result2[0]);

          setTouMduleUChargeOffPeak(response.data.data.result2[1]);
          setTouMduleUChargePeak(response.data.data.result2[2]);






          // setFixedMduleUCharge0to60(response.data.data.result1[1]);

          // setFixedMduleUCharge0to60(response.data.data.result1[1]);



          // let r = response.data.data.result1[0];
          // console.log("fff:", r.Fixed_charge)
          console.log("successfully get unit charges informations");

        } else {

          history.push("/sign-in");
          window.location.reload();//reload browser
          deleteAllCookies();//delete all cookies
        }
      }).catch((error) => {
        console.log("this is error response", error);
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
    getalldata();
  }, []);

  return (
    <div>
      <form >
        <div className="infotable-form">
          <div className="infotable-grp">
            <div className="infotable-title">
              <h2 className="maintitle-info"> Tariff Plan</h2>
              <p>
                The following Electricity Tariffs have been approved by the Public Utility Commission of Sri Lanka.
              </p>
              <h5>Domestic (D-1) </h5>
            </div>
            <div className="infotable-group1">
              <p>
                If 30 day Consumption is between 0-60 kWh per month the following tariffs will be applicable.
              </p>
              <table className="table table-hover">
                <thead>
                  <tr className="bg-info rowfont" >
                    <th scope="col title1"> Monthly Consumption (kWh)</th>
                    <th scope="col title2">Unit Charge (LKR/kWh)</th>
                    <th scope="col title3">Fixed Charge (LKR/month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{fixedUCharge0to30.Unit_category}</td>
                    <td>{fixedUCharge0to30.Unit_charge}</td>
                    <td>{fixedUCharge0to30.Fixed_charge}</td>
                  </tr>
                  <tr>
                    <td>{fixedUCharge31to60.Unit_category}</td>
                    <td>{fixedUCharge31to60.Unit_charge}</td>
                    <td>{fixedUCharge31to60.Fixed_charge}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="infotable-group2">
              <p>
                If 30 day consumption is above 60kWh per month the following tariffs will be applicable.
              </p>
              <table className="table table-hover">
                <thead>
                  <tr className="bg-info rowfont">
                    <th scope="col title1"> Monthly Consumption (kWh)</th>
                    <th scope="col title2">Unit Charge (LKR/kWh)</th>
                    <th scope="col title3">Fixed Charge (LKR/month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{fixedUCharge0to60.Unit_category}</td>
                    <td>{fixedUCharge0to60.Unit_charge}</td>
                    <td>{fixedUCharge0to60.Fixed_charge}</td>
                  </tr>
                  <tr>
                    <td>{fixedUCharge61to90.Unit_category}</td>
                    <td>{fixedUCharge61to90.Unit_charge}</td>
                    <td>{fixedUCharge61to90.Fixed_charge}</td>
                  </tr>
                  <tr>
                    <td>{fixedUCharge91to120.Unit_category}</td>
                    <td>{fixedUCharge91to120.Unit_charge}</td>
                    <td>{fixedUCharge91to120.Fixed_charge}</td>
                  </tr>
                  <tr>
                    <td>{fixedUCharge121to180.Unit_category}</td>
                    <td>{fixedUCharge121to180.Unit_charge}</td>
                    <td>{fixedUCharge121to180.Fixed_charge}</td>
                  </tr>
                  <tr>
                    <td>{fixedUCharge180plus.Unit_category}</td>
                    <td>{fixedUCharge180plus.Unit_charge}</td>
                    <td>{fixedUCharge180plus.Fixed_charge}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="infotable-group3">
              <p>
                Domestic Time of Use
              </p>
              <table className="table table-hover">
                <thead>
                  <tr className="bg-info rowfont">
                    <th scope="col title1">Time of Use</th>
                    <th scope="col title2">Unit Charge (LKR/kWh)</th>
                    <th scope="col title3">Fixed Charge (LKR/month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{touUChargeOffPeak.Time_category} (2230-0530 hrs)</td>
                    <td>{touUChargeOffPeak.Unit_charge} </td>
                    <td>{touUChargeOffPeak.Fixed_charge} </td>
                  </tr>
                  <tr>
                    <td>{touUChargeDay.Time_category} (0530-1830 hrs)</td>
                    <td>{touUChargeDay.Unit_charge} </td>
                    <td>{touUChargeDay.Fixed_charge} </td>
                  </tr>
                  <tr>
                    <td>{touUChargePeak.Time_category} (1830-2230 hrs)</td>
                    <td>{touUChargePeak.Unit_charge}</td>
                    <td>{touUChargePeak.Fixed_charge}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
