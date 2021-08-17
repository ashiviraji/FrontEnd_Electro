import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import "../../assets/css/Admin/dashboardAdmin.css";
import { IoIosNotifications } from 'react-icons/io';
import { FaUsers } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import dashboardUser from "../../assets/img/dashboardUser.svg";

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

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <div className="admin-home-user-main">
      <label className="admin-welcome-note">Welcome {document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).name}</label>
      <div className="admin-user-cards-area">
        <Card className={classes.adminCurrentRoot} id="admin-card1">
          <CardContent>
            <label className="admin-card-title-name">Register Users</label>

          </CardContent>
          <div>
            <FaUsers className="admin-svg-icon"></FaUsers>
            <label className="admin-numeric-value">150 </label>
          </div>
          <CardActions>

          </CardActions>
        </Card>

        <Card className={classes.adminSpecialRoot} id="admin-card2">
          <CardContent>
            <label className="admin-card-title-name">Unit Charge Notifications</label>

          </CardContent>
          <div>
            <IoIosNotifications className="admin-svg-icon"></IoIosNotifications>
            <label className="admin-numeric-value">6</label>
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