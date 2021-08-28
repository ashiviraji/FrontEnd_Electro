import React from "react";
import img1 from "../../assets/img/undraw_Add_user_re_5oib.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import Axios from 'axios';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ConfirmDialog from "../Customer/bill_control/ConfirmDialog";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "20px",
    marginLeft: "10%",
    marginTop: "8%",
  },

  gridMain: {
    width: "80%",
  },
  button: {
    width: "100%",
    margin: "3px",
    textDecoration: "none"
  },
  iconCardsButtons: {
    justifyContent: "right",
  },
  buttonMoreDetails: {
    width: "100%",
    margin: "3px",
    backgroundColor: "#49ad74",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      background: "#439c69",
    },
  },
  linkStyle: {
    textDecoration: "none"
  }


});
const ManageCEBEngineerHome = () => {
  const classes = useStyles();
  const [cardDetails, setCardDetails] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  let history = useHistory();
  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


  const getCebengineer = async () => {
    // e.preventDefault();
    const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/manager-cebengineer`, {
      headers: {
        authorization: `Token ${token}`
      }

    })
    if (response.data.status) {
      return (response.data.data);

    } else {
      history.push("/sign-in");
      window.location.reload();//reload browser
      deleteAllCookies();//delete all cookies
    }

  }

  const removeCebengineer = async (emp_id) => {
    // e.preventDefault();
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/remove-cebengineer/${emp_id}`, {
      headers: {
        authorization: `Token ${token}`
      }

    })
    if (response.data.status) {
      window.location.reload();//reload browser
      toast.success('CEB Engineer Removed', {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } else {

      history.push("/sign-in");
      window.location.reload();//reload browser
      deleteAllCookies();//delete all cookies
    }

  }

  useEffect(async () => {
    var details = await getCebengineer();
    console.log("successfully get ceb engineer", details);
    setCardDetails(details);

  }, []);

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


  return (
    <div className={classes.gridMain}>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {cardDetails.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    key={index}
                  >
                    {/* Bill Plan {card.bill_id} */}
                  </Typography>
                  <div>
                    <img src={img1} alt="Image1" className="card-img-top" />
                  </div>
                  <div>
                    <label><b>{card.First_name} {card.Last_name}</b></label>
                    <label>Employee Id : EMP_{card.Emp_id}</label>
                  </div>
                </CardContent>
                <CardActions>
                  <div className="buttonContainer">

                    <Link className={classes.linkStyle} to={`/cebengineer-details?emp_id=${card.Emp_id}`}>
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        className={classes.buttonMoreDetails}
                      >
                        More Details &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} to="manage-cebengineer">
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={() => {
                          setConfirmDialog({
                            isOpen: true,
                            title: "Are You sure delete CEB engineer",
                            subTitle: "You can't  undo this operation",
                            btnStatus: "danger",
                            onConfirm: () => {
                              removeCebengineer(card.Emp_id);
                            },
                          });
                        }}
                      // onClick={() => { removeCebengineer(card.Emp_id) }}
                      >
                        Remove User &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );


};

export default ManageCEBEngineerHome;
