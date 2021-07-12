import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import img1 from "../../assets/img/devicewise.png";
import "../../assets/css/Customer/deviewisePlans.css";
import { Link } from "react-router-dom";

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
  linkStyle:{
    textDecoration:"none"
  }
  

});

const cardDetails = [
  { Bill_Title: "Bill Plan 1", Model: "TOU", Total_amount: "LKR : 3500" },
  { Bill_Title: "Bill Plan 2", Model: "Fixed ", Total_amount: "LKR : 2500" },
  { Bill_Title: "Bill Plan 3", Model: "Fixed ", Total_amount: "LKR : 4500" },
  { Bill_Title: "Bill Plan 4", Model: "Fixed ", Total_amount: "LKR : 4500" },
  { Bill_Title: "Bill Plan 5", Model: "Fixed ", Total_amount: "LKR : 4500" },
  { Bill_Title: "Bill Plan 6", Model: "Fixed ", Total_amount: "LKR : 4500" },
];

export default function DeviceWisePlans() {
  const classes = useStyles();

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
                    {card.Bill_Title}
                  </Typography>
                  <div>
                    <img src={img1} alt="Image1" className="card-img-top" />
                  </div>
                  <div>
                    <label>Suitable Model : {card.Model}</label>
                    <label>Total Amount :  {card.Total_amount}</label>
                  </div>
                </CardContent>
                <CardActions>
                  <div className="buttonContainer">
                    <Link className={classes.linkStyle} to="/device-wise">
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Device Wise Usage &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} to="/Bill-More-Details">
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        className={classes.buttonMoreDetails}
                      >
                        More Details &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} to="#">
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                      >
                        Delete Plan &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

// }

// );
