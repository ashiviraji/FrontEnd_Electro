import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import Typography from '@material-ui/core/Typography';
import "../../assets/css/CEBEngineer/dashboardengineer.css";
import { GoRequestChanges } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import dashboardUser from "../../assets/img/dashboardUser.svg";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import PendingNormalUnitCharges from "./PendingNormalUnitCharges";
import PendingNormalFixedCharges from "./PendingNormalFixedCharges";
import PendingTouUnitCharges from "./PendingTouUnitCharges";
import PendingTouFixedCharges from "./PendingTouFixedCharges";

const useStyles = makeStyles({
  engineerCurrentRoot: {
    width: "300px",
    marginLeft: "30px",
    marginTop: "30px",
    backgroundColor: "#69B2F5 ",
    height: "150px",
    cursor: "pointer",
    borderLeftWidth: "10px",
    borderLeftStyle: "solid",
    borderLeftColor: "#4A7FC8",
  },

  engineerSpecialRoot: {
    width: "300px",
    marginLeft: "30px",
    marginTop: "30px",
    backgroundColor: " #F77D59 ",
    height: "150px",
    cursor: "pointer",
    borderLeftWidth: "10px",
    borderLeftStyle: "solid",
    borderLeftColor: "#F42C18 ",
  },

  engineerMyprofile: {
    width: "300px",
    marginLeft: "30px",
    marginTop: "30px",
    backgroundColor: "#F2C54D  ",
    height: "150px",
    cursor: "pointer",
    borderLeftWidth: "10px",
    borderLeftStyle: "solid",
    borderLeftColor: "#F29E17   ",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  let history = useHistory();

  const [requestCount, setRequestCount] = useState("");
  const [userCount, setUserCount] = useState("");
  const [visibleState, setVisibleState] = useState("");

  const classes = useStyles();
  var ParamsUserId = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    ).userId;

  // console.log(ParamsUserId);

  var token = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    ).token;

  const getDashboardData = () => {
    // e.preventDefault();

    Axios.get(
      `${process.env.REACT_APP_BASE_URL}/dashboard-details/${ParamsUserId}`,
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.data.status) {
          setRequestCount(
            parseInt(response.data.data.result1[0].request_count) +
              parseInt(response.data.data.result2[0].request_count)
          );
          setUserCount(response.data.data.result3[0].user_count);
        } else {
          history.push("/sign-in");
          window.location.reload(); //reload browser
          deleteAllCookies(); //delete all cookies
        }
      })
      .catch((error) => {
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

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="engineer-home-user-main">
      <label className="engineer-welcome-note">
        Welcome{" "}
        {
          document.cookie
            .split(";")
            .map((cookie) => cookie.split("="))
            .reduce(
              (accumulator, [key, value]) => ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value),
              }),
              {}
            ).name
        }
      </label>
      <div className="engineer-user-cards-area">
        <Card className={classes.engineerCurrentRoot} id="engineer-card1">
          <CardContent>
            <label className="engineer-card-title-name">Registered Users</label>
          </CardContent>
          <div>
            <FaUsers className="engineer-svg-icon"></FaUsers>
            <label className="engineer-numeric-value">{userCount} </label>
          </div>
          <CardActions></CardActions>
        </Card>

        <Card className={classes.engineerSpecialRoot} id="engineer-card2">
          <CardContent>
            <label className="engineer-card-title-name">
              Unit Charge Notifications
            </label>
          </CardContent>
          <div>
            <GoRequestChanges className="engineer-svg-icon"></GoRequestChanges>
            <label className="engineer-numeric-value">{requestCount}</label>
          </div>
          <CardActions></CardActions>
        </Card>

        <Card className={classes.engineerMyprofile} id="engineer-card3">
          <CardContent>
            <label className="engineer-card-title-name">My profile</label>
          </CardContent>
          <div>
            <BsFillPersonFill className="engineer-svg-icon"></BsFillPersonFill>
            <label className="engineer-numeric-value"></label>
          </div>
          <CardActions></CardActions>
        </Card>
      </div>
      <div style={{ width: "90%", float: "left", marginTop: "10%",display: `${visibleState}` }} >
        <p>
          <center>
            <h6>
              <b>Pending Normal Unit Charges </b>
            </h6>
          </center>
        </p>
        <PendingNormalUnitCharges setVisibleState={setVisibleState}/>
      </div>

      <div style={{ width: "90%", float: "left", marginTop: "10%",display: `${visibleState}` }}>
        <p>
          <center>
            <h6>
              <b>Pending Normal Fixed Charges</b>
            </h6>
          </center>
        </p>
        <PendingNormalFixedCharges setVisibleState={setVisibleState} />
      </div>
       <div style={{ width: "90%", float: "left", marginTop: "10%",display: `${visibleState}` }}>
        <p>
          <center>
            <h6>
              <b>Pending TOU Unit Charges</b>
            </h6>
          </center>
        </p>
        <PendingTouUnitCharges setVisibleState={setVisibleState} />
      </div>
       <div style={{ width: "90%", float: "left", marginTop: "10%",display: `${visibleState}` }}>
        <p>
          <center>
            <h6>
              <b>Pending TOU Fixed Charges</b>
            </h6>
          </center>
        </p>
        <PendingTouFixedCharges setVisibleState={setVisibleState}/>
      </div>
    </div>
  );
}
