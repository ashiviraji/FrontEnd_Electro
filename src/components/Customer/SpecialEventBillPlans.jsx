import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import img1 from "../../assets/img/specialEvent.png";
import "../../assets/css/Customer/specialEventPlans.css";
import { Link } from "react-router-dom";
import Axios from 'axios';
import  {useHistory}  from 'react-router-dom'
import ConfirmDialog from "../Customer/bill_control/ConfirmDialog";
import Notification from "../Customer/bill_control/Notification";

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

// const cardDetails = [
//   { Bill_Title: "Special Event Plan 1", Choose_model: "TOU Model", Duration:"1 days", moreDetails:"TOU-Event-Form",device_wise:"/special-tou-device-wise"},
//   { Bill_Title: "Special Event Plan 2", Choose_model: "Fixed Model",Duration:"2 days", moreDetails:"special-event-fixed",device_wise:"/special-fixed-device-wise" },
//   { Bill_Title: "Special Event Plan 3", Choose_model: "Fixed Model", Duration:"2 days", moreDetails:"special-event-fixed",device_wise:"/special-fixed-device-wise" },
//   { Bill_Title: "Special Event Plan 4", Choose_model: "TOU Model",Duration:"1 days", moreDetails:"TOU-Event-Form",device_wise:"/special-tou-device-wise" },
//   { Bill_Title: "Special Event Plan 5", Choose_model:"Fixed Model", Duration:"2 days", moreDetails:"special-event-fixed",device_wise:"/special-fixed-device-wise" },
//   { Bill_Title: "Special Event Plan 6", Choose_model: "TOU Model", Duration:"1 days", moreDetails:"TOU-Event-Form",device_wise:"/special-tou-device-wise" },
// ];

export default function DeviceWisePlans() {
  const classes = useStyles();
  const [cardDetails, setCardDetails] = useState([]);
  let history = useHistory();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    variant: "",
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  async  function getCalculatedData(){

    var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


    var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;



    const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/get-all-special-event-bill-plans/${ParamsUserId}`,  {
      headers: {
          authorization: `Token ${token}`
      }
  })
   console.log(response.data);
  if (response.data.status){
    if(response.data.data == null){
      setCardDetails([]);
    } else {
      setCardDetails(response.data.data);
    }
  
  }
  
        
  } 

  async  function DeleteBillPlan(bill_id, bill_model){

    var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


    var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;

    console.log("Inside delete function delete plan", bill_id);

    const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/delete-bill-plan-special-event/${ParamsUserId}`, {
      bill_id:bill_id,
      bill_model : bill_model
    }, {
      headers: {
          authorization: `Token ${token}`
      },
    })
  // console.log(response.data);
  // if (response.data.status){
  //    console.log("Delete Device")
  // }else {
  //   console.log(response.data.message);
  //   history.push("/sign-in");
  //   window.location.reload();//reload browser
  //   deleteAllCookies();//delete all cookies
  // }
        
  } 

  const onDeletebill = async (bill_id, bill_model) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    await DeleteBillPlan(bill_id, bill_model);
    await getCalculatedData();
    
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      variant: "danger",
    });
  };



  useEffect( async () => {

    await getCalculatedData();
   
 },[]);


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
                    {card.bill_plan_name}
                  </Typography>
                  <div>
                    <img src={img1} alt="Image1" className="card-img-top" />
                  </div>
                  <div>
                    <label>Selected Model : {card.bill_model}</label>
                    <label>Additional Units :  {card.Total_units.toFixed(3)}</label>
                  </div>
                </CardContent>
                <CardActions>
                  <div className="buttonContainer">
                    <Link className={classes.linkStyle} to={card.device_wise}>
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Device Wise Usage &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} to={card.moreDetails}>
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        className={classes.buttonMoreDetails}
                      >
                        More Details &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are You sure delete this Bill Plan",
                        subTitle: "You can't  undo this operation",
                        onConfirm: () => {
                          onDeletebill(card.bill_id, card.bill_model);
                        },
                      });
                    }}>
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
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
}

// }

// );
