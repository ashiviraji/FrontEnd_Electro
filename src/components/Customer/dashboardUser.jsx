import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import "../../assets/css/Customer/dashboardUser.css";
import {MdEventAvailable} from 'react-icons/md';
import {MdFolderSpecial} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs';
import dashboardUser from "../../assets/img/dashboardUser.svg";

const useStyles = makeStyles({
    currentRoot: {
    width: '300px',
    marginLeft: '30px',
    marginTop: '30px',
    backgroundColor:'#69B2F5 ',
    height:'150px',
    cursor:'pointer',
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#4A7FC8',
    
  },
  
  specialRoot:{
    width: '300px',
    marginLeft: '30px',
    marginTop: '30px',
    backgroundColor:'#F2C54D ',
    height:'150px',
    cursor:'pointer',
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#F29E17 ',
  },

  Myprofile:{
    width: '300px',
    marginLeft: '30px',
    marginTop: '30px',
    backgroundColor:'#F77D59  ',
    height:'150px',
    cursor:'pointer',
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#F42C18  ',
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
      <div className="home-user-main">
          <label className="welcome-note">Welcome Ashika</label>
      <div className="user-cards-area">
    <Card className={classes.currentRoot} id="card1">
      <CardContent>
        <label className="card-title-name">Current Available Bill Plans</label>
        
      </CardContent>
      <div>
      <MdEventAvailable className="svg-icon"></MdEventAvailable>
      <label className="numeric-value">3 </label>
      </div>
      <CardActions>
       
      </CardActions>
    </Card>

    <Card className={classes.specialRoot} id="card2">
      <CardContent>
        <label className="card-title-name">Special Events Bill Plans</label>
        
      </CardContent>
      <div>
      <MdFolderSpecial className="svg-icon"></MdFolderSpecial>
      <label className="numeric-value">5</label>
      </div>
      <CardActions>
       
      </CardActions>
    </Card>

    <Card className={classes.Myprofile} id="card3">
      <CardContent>
        <label className="card-title-name">My profile</label>
        
      </CardContent>
      <div>
      <BsFillPersonFill className="svg-icon"></BsFillPersonFill>
      <label className="numeric-value"></label>
      </div>
      <CardActions>
       
      </CardActions>
    </Card>

    
    </div>
    <div className="image-details">
    <img
            src={ dashboardUser}
            alt="unit-charge-update-admin"
            width="450"
            height="350"
          />
    </div>
    
    </div>

    
  );
}