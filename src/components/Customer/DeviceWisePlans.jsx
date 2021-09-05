import React, { useEffect, useState } from "react";
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
import  {useHistory}  from 'react-router-dom'
import { useParams } from "react-router-dom";
import Axios from 'axios';
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
  buttonEditPlan: {
    width: "100%",
    margin: "3px",
    backgroundColor: "#F99D3B",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      background: "#F78914",
    },
  },
  linkStyle:{
    textDecoration:"none"
  }
  

});

// const cardDetails = [
//   { Bill_Title: "Bill Plan 1", Model: "TOU", Total_amount: "LKR : 3500" },
//   { Bill_Title: "Bill Plan 2", Model: "Fixed ", Total_amount: "LKR : 2500" },
//   { Bill_Title: "Bill Plan 3", Model: "Fixed ", Total_amount: "LKR : 4500" },
//   { Bill_Title: "Bill Plan 4", Model: "Fixed ", Total_amount: "LKR : 4500" },
//   { Bill_Title: "Bill Plan 5", Model: "Fixed ", Total_amount: "LKR : 4500" },
//   { Bill_Title: "Bill Plan 6", Model: "Fixed ", Total_amount: "LKR : 4500" },
// ];

export default function DeviceWisePlans() {
  const classes = useStyles();
  const [cardDetails, setCardDetails] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    variant: "",
  });

  let history = useHistory();

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



    const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/get-all-monthly-bill-plans/${ParamsUserId}`,  {
      headers: {
          authorization: `Token ${token}`
      }
  })
  // console.log(response.data);
  if (response.data.status){
    if(response.data.data){
      setCardDetails(response.data.data);
      console.log(response.data.data);
    }else{
      setCardDetails([]);
      console.log("No any bill details");
    }
    
    
    
  }else {
    console.log(response.data.message);
    history.push("/sign-in");
    window.location.reload();//reload browser
    deleteAllCookies();//delete all cookies
  }
        
  } 

  async  function DeleteBillPlan(bill_id){

    var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


    var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;



    const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/delete-bill-main-plan/${ParamsUserId}`, {
      bill_id:bill_id
    }, {
      headers: {
          authorization: `Token ${token}`
      },
    })
  console.log(response.data);
  if (response.data.status){
     console.log("Delete Device")
  }else {
    console.log(response.data.message);
    history.push("/sign-in");
    window.location.reload();//reload browser
    deleteAllCookies();//delete all cookies
  }
        
  } 

  // const openInPopup = (item) => {
  //   console.log(item.device_id);
  //   setRecordForEdit(item);
  //   setOpenPopup(true);
  // };

  const onDeletebill = async (bill_id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    await DeleteBillPlan(bill_id);
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


 //delete cookies function
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
                    Bill Plan {card.bill_id}
                  </Typography>
                  <div>
                    <img src={img1} alt="Image1" className="card-img-top" />
                  </div>
                  <div>
                    <label>Suitable Model : {card.Best_model}</label>
                    <label>Total Amount : LKR  {card.total_cost.toFixed(2)}</label>
                  </div>
                </CardContent>
                <CardActions>
                  <div className="buttonContainer">
                    <Link className={classes.linkStyle} to={`/device-wise?bill_id=${card.bill_id}`}>
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Device Wise Usage &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} to={`/bill-comparison?bill_id=${card.bill_id}`}>
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        className={classes.buttonMoreDetails}
                      >
                        More Details &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} to={`/my-bill-plans-moreAndEdit?bill_id=${card.bill_id}`}>
                      <Button
                        className="iconCardsButtons"
                        variant="contained"
                        className={classes.buttonEditPlan}
                      >
                        Edit Bill Plan &nbsp;&nbsp;&nbsp;
                      </Button>
                    </Link>
                    <Link className={classes.linkStyle} onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are You sure delete this Bill Plan",
                        subTitle: "You can't  undo this operation",
                        onConfirm: () => {
                          onDeletebill(card.bill_id);
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
