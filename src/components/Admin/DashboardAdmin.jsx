import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "../../assets/css/Admin/dashboardAdmin.css";
import { IoIosNotifications } from 'react-icons/io';
import { FaUsers } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import dashboardUser from "../../assets/img/dashboardUser.svg";
import Axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  adminCurrentRoot: {
    width: '300px',
    marginLeft: '30px',
    marginTop: '30px',
    backgroundColor: '#69B2F5 ',
    height: '150px',
    cursor: 'pointer',
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#4A7FC8',

  },

  adminSpecialRoot: {
    width: '300px',
    marginLeft: '30px',
    marginTop: '30px',
    backgroundColor: ' #F77D59 ',
    height: '150px',
    cursor: 'pointer',
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#F42C18 ',
  },

  adminMyprofile: {
    width: '300px',
    marginLeft: '30px',
    marginTop: '30px',
    backgroundColor: '#F2C54D  ',
    height: '150px',
    cursor: 'pointer',
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#F29E17   ',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(e) {
  // e.prevent
  let history = useHistory();
  const [requestCount, setRequestCount] = useState("");
  const [userCount, setUserCount] = useState("");

  const classes = useStyles();

  var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;


  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


  const getDashboardData = () => {
    // console.log("this is 1c getDashboardData",);
    // e.preventDefault();

    Axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard-details/${ParamsUserId}`, {
      headers: {
        authorization: `Token ${token}`
      }
    }).then((response) => {
      if (response.data.status) {
        // setDashboardData(response.data.data);
        setRequestCount(parseInt(response.data.data.result1[0].request_count) + parseInt(response.data.data.result2[0].request_count));
        setUserCount(response.data.data.result3[0].user_count);
        // console.log("dashboard data--->>", requestCount, userCount);

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

  useEffect(() => {
    getDashboardData(e);
  }, []);


  return (
    <div className="admin-home-user-main">

      <label className="admin-welcome-note">Welcome {document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).name}</label>
      <div className="admin-user-cards-area">
        <Card className={classes.adminCurrentRoot} id="admin-card1">
          <CardContent>
            <label className="admin-card-title-name">Registered Users</label>

          </CardContent>
          <div>
            <FaUsers className="admin-svg-icon"></FaUsers>
            <label className="admin-numeric-value">{userCount} </label>
          </div>
          <CardActions>

          </CardActions>
        </Card>

        <Card className={classes.adminSpecialRoot} id="admin-card2">
          <CardContent>
            <label className="admin-card-title-name">Unit Charge Requests</label>

          </CardContent>
          <div>
            <IoIosNotifications className="admin-svg-icon"></IoIosNotifications>
            <label className="admin-numeric-value">{requestCount}</label>
          </div>
          <CardActions>

          </CardActions>
        </Card>

        <Card className={classes.adminMyprofile} id="admin-card3">
          <CardContent>
            <label className="admin-card-title-name">My profile</label>

          </CardContent>
          <div>
            <BsFillPersonFill className="admin-svg-icon"></BsFillPersonFill>
            <label className="admin-numeric-value"></label>
          </div>
          <CardActions>

          </CardActions>
        </Card>


      </div>
      <div className="admin-image-details">
        <img
          src={dashboardUser}
          alt="unit-charge-update-admin"
          width="450"
          height="350"
        />
      </div>

    </div>


  );
}