import React, { useState,useEffect } from "react";
import Axios from 'axios';
import { useHistory } from 'react-router-dom'
import { Paper, makeStyles } from "@material-ui/core";
import SpecialTOUCalculateBillForm from "./SpecialTOUCalculateBillForm";
import * as SpecialDeviceBill from "./SpecialEventTOUDeviceBill";
import SearchBar from "material-ui-search-bar";
import { Table,TableHead } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableRow,TableBody } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import "../../assets/css/Customer/billCalculate.css";
import { Add } from "@material-ui/icons";
import Popup from "../../components/Customer/bill_control/Popup";
import { DeleteOutline } from "@material-ui/icons";
import { EditOutlined } from "@material-ui/icons";
import Notification from "../../components/Customer/bill_control/Notification";
import ConfirmDialog from "../../components/Customer/bill_control/ConfirmDialog";
import { Link } from "react-router-dom";
import "../../assets/css/breadcrumb.css"
import { Col, Form, Row } from "react-bootstrap";
import "../../assets/css/Customer/billCalculate.css";


import "../../assets/css/Customer/specialEvent.css"




const noOfDays = 0;
var touPlanName=" ";
  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    table: {
      marginTop: theme.spacing(3),
      '& thead th': {
          fontWeight: '600',
          color: theme.palette.primary.light,
      },
      '& tbody td' : {
          fontWeight: '300',
      },
      '& tbody tr:hover': {
          backgroundColor: '#fffbf2',
          cursor: 'pointer',
      },
  },
  Rowinform: {
    margin: "10px"
}
  }));

  var token = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

  var ParamsUserId = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;

  console.log("Front End eken yanawada Special Evevnt  TOU id eka :- " + ParamsUserId);

export default function SpecialTOUAddBill() {

    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false);
    let history = useHistory();
    const [buttonState, setButtonState] = useState(true);
    const [buttonStatesave, setbuttonStatesave] = useState(true);
    const [inputValue, setInputValue] = useState ('');
    const[searchRecords,setSearchRecords] = useState([]);
    const [searched,setSearched] = useState("");


    const [notify, setNotify] = useState({
      isOpen: false,
      message: "",
      variant: "",
    });
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState([]);
    const [newBillId, setNewBillId] = useState(0);
    //const[additionalCostUnit,setAddtionalCostUnit]=useState([]);
    const [addtionalUnits,setAddtionalUnit] =useState(0);
    
    const [addtionalCost,setAdditionalCost]=useState(0);

    const requestSearch =  (searchVal) =>{
      console.log("The searsearchVal",searchVal);
      
      const filteredRows =  searchRecords.filter((row) =>{
        console.log(records);
        return row.appliance.toLowerCase().includes(searchVal.toLowerCase());
      });
      console.log("The filter Row",filteredRows);
      if(searchVal == " "){
        console.log("val");
        setRecords(records);
      }else{
        setRecords(filteredRows);
      }
      
    }

    const cancelSearch = () =>{
      setSearched("");
      requestSearch(searched);
    };

    async function getBillId() {


      const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/get-special-event-tou-bill-id/${ParamsUserId}`, {
        headers: {
          authorization: `Token ${token}`
        }
  
    })
    console.log("TOU get Bill Id:",newBillId);
    if (response.data.status){
      var oldBillId = response.data.data;
      oldBillId++;
      var new_bill_id = oldBillId;
      console.log("The id is :",new_bill_id);
      return new_bill_id;
    }else {
      console.log(response.data.message);
      history.push("/sign-in");
      window.location.reload();//reload browser
      deleteAllCookies();//delete all cookies
    }
  }

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });


    useEffect( async () => {
     const new_bill_id = await getBillId();
    setNewBillId(new_bill_id);
      console.log("inside of useEffect");
    console.log(new_bill_id);
   const recordDetails = await SpecialDeviceBill.getAllDevices(new_bill_id);
   if(recordDetails==null){
       setRecords([]);
       setButtonState(true);
       setbuttonStatesave(true);
       setSearchRecords([]);
     }else{
       setRecords(recordDetails);
       setButtonState(false);
       setbuttonStatesave(false);
       setSearchRecords(recordDetails);
    }

    console.log("inside of useEffect" , recordDetails);
  
    },[]);
  

    const addOrEdit = async (device, resetForm) => {
      if (device.device_id == 0) {
        await SpecialDeviceBill.insertDevice(device);
      } else {
        console.log(device.device_id);
        await SpecialDeviceBill.updateDevice(device,newBillId);
      }
  
      resetForm();
      setRecordForEdit(null);
      setOpenPopup(false);
      const recordDetails = await SpecialDeviceBill.getAllDevices(newBillId);
      if (recordDetails == null) {
        setRecords([]);
        setButtonState(true);
        setbuttonStatesave(true);
        setSearchRecords([]);
        
      } else {
        setRecords(recordDetails);
        setButtonState(false);
        setbuttonStatesave(false);
        setSearchRecords(recordDetails);
      }
      setNotify({
        isOpen: true,
        message: "Submitted Successfully",
        variant: "success",
      });
    };

    const openInPopup = (item) => {
      console.log(item.device_id);
      setRecordForEdit(item);
      setOpenPopup(true);
    };

    const onDeletedevice = async (device_id) => {
     
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false,
      });
      await SpecialDeviceBill.Deletedevice(device_id,newBillId);
      const recordDetails = await SpecialDeviceBill.getAllDevices(newBillId);
      if (recordDetails == null) {
        setRecords([]);
        setButtonState(true);
        setbuttonStatesave(true);
        setSearchRecords([]);
      } else {
        setRecords(recordDetails);
        setButtonState(false);
        setbuttonStatesave(false);
        setSearchRecords(recordDetails);
      }
      setNotify({
        isOpen: true,
        message: "Deleted Successfully",
        variant: "danger",
      });
    }

    


    function deleteAllCookies() {
      var cookies = document.cookie.split(";");
  
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }

    
    async function calculateSpecialEventTOUDevice() {

      var token = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
  
      var ParamsUserId = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
  
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/calculate-special-event-TOUbill/${ParamsUserId}`, {
  
        bill_id: newBillId
      }, {
        headers: {
          authorization: `Token ${token}`
        }
      })
       console.log("Calculate Special Event:",response.data);
      if (response.data.status) {
        
       
        setAddtionalUnit(response.data.data[0].Total_units.toFixed(2));
        setAdditionalCost(response.data.data[0].TOU_bill_sum.toFixed(2));
        console.log(response.data.data);
        
      
  
  
      } else {
        // console.log(response.data.message);
        // history.push("/sign-in");
        // window.location.reload();//reload browser
        // deleteAllCookies();//delete all cookies
      }
  
    }


    async function saveSpecialEventTOUDevice() {

      var token = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
  
      var ParamsUserId = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
  
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/save-special-event-TOUbill/${ParamsUserId}`, {
  
        bill_id: newBillId,
        tou_plan_name:inputValue
      }, {
        headers: {
          authorization: `Token ${token}`
        }
      })
       console.log("Calculate Special Event:",response.data);
      if (response.data.status) {
        
       
       
        console.log(response.data.data);
        
      
  
  
      } else {
        // console.log(response.data.message);
        // history.push("/sign-in");
        // window.location.reload();//reload browser
        // deleteAllCookies();//delete all cookies
      }
  
    }

    return (
        <div>
            
        <Paper className={classes.pageContent}>
        <h3>Your Device Data</h3>

        <Toolbar>
        <SearchBar
           value={searched}
           onChange={(searchVal) => requestSearch(searchVal)}
           onCancelSearch={() => cancelSearch()}
            />
          <button
            type="button"
            className="btn btn-primary new-appl-btn add-new-button"
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          >
            <Add style={{float: 'left', marginRight: '2%'}}/>
            New Appliance
          </button>
        </Toolbar>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{textAlign:"center"}}>Appliance</TableCell>
              <TableCell style={{textAlign:"center"}}>Quantity</TableCell>
              <TableCell style={{textAlign:"center"}}>Power</TableCell>
              <TableCell style={{textAlign:"center"}}>Peak Hour</TableCell>
              <TableCell style={{textAlign:"center"}}>Off Peak Hour</TableCell>
              <TableCell style={{textAlign:"center"}}>Day Hour</TableCell>
              <TableCell style={{textAlign:"center"}}>No Of Days</TableCell>
              <TableCell style={{textAlign:"center"}}>Actions</TableCell>
            </TableRow>
          </TableHead>
             <TableBody>
             {records.map((item) => (
              <TableRow key={item.device_id}>
                <TableCell style={{textAlign:"center"}}>{item.appliance}</TableCell>
                <TableCell style={{textAlign:"center"}}>{item.quantity}</TableCell>
                <TableCell style={{textAlign:"center"}}>{item.power}</TableCell>
                <TableCell style={{textAlign:"center"}}>{item.hPeak}hrs : {item.mPeak}mins </TableCell>
                <TableCell style={{textAlign:"center"}}>{item.hOffPeak}hrs : {item.mOffPeak}mins </TableCell>
                <TableCell style={{textAlign:"center"}}>{item.hDay}hrs : {item.mDay}mins </TableCell>
                <TableCell style={{textAlign:"center"}}>{item.numberOfDays}</TableCell>
                <TableCell style={{textAlign:"center"}}>
                <button
                    className="btn editActionButtonIcon"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlined
                      fontSize="small"
                      ClassName={classes.actionButtonIcon}
                    />
                  </button>
                  <button
                    className="btn deleteActionButtonIcon"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are You sure delete this record",
                        subTitle: "You can't  undo this operation",
                        onConfirm: () => {
                          onDeletedevice(item.device_id);
                        },
                      });
                    }}
                  >
                    <DeleteOutline
                      fontSize="small"
                      ClassName={classes.actionButtonIcon}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> 
        </Table>

        <Paper className={classes.pageContent}>
        <Form className="main-calculate-form">
            <Form.Group>
              <Row className="RowInForm-noOfDays">
                {/* <Form.Label column sm="4" style={{fontWeight:"550"}}>
                 Name Of Plan
                </Form.Label> */}
                {/* <Col sm="4">
                  <Form.Control
                    type="text"
                    placeholder="Number of Days"
                    value="Plan 1"
                    // defaultValue={noOfDays}
                  />
                </Col> */}
                <Col sm="4" style={{marginLeft:"624px"}}>
                <button type="button" className="btn btn-success calculate-button-special-event" onClick={calculateSpecialEventTOUDevice} disabled={buttonState}>
                    Calculate
                </button>
                </Col>
              </Row>
              </Form.Group>
          </Form>
          <Form className={classes.formLabelStyle}>
            <Form.Group>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
                Additional Units for the Event
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={addtionalUnits}
                    disabled
                  />
                </Col>
              </Row>

              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
                Additional Cost for the Event
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={addtionalCost} 
                    disabled
                  />
                </Col>
              </Row>

              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
               Name Of Your Plan
                </Form.Label>
                <Col sm="4">
                  

      <input
         type="text"
         value={inputValue}
         placeholder="Enter a plan"
         onChange={e => setInputValue(e.target.value)}
       />

                     
                     
                    
               
                </Col>
              </Row>

              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
               
                <Col sm="4" style={{marginLeft:"624px"}}>
                <Link to="/special-event">
                <button type="button" className="btn btn-success calculate-button-special-event" onClick={saveSpecialEventTOUDevice} disabled={buttonStatesave}>
                    Save Plan
                </button>
                </Link>
                </Col>
              </Row>
               

            </Form.Group>
          </Form>
        </Paper>
      </Paper>
      <Popup
        title="Add New Device Details"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <SpecialTOUCalculateBillForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          billId={newBillId}
        />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
        </div>
    )
}

