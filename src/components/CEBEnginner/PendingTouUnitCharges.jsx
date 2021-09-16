import React from "react";
import { useState, useEffect } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { useHistory } from "react-router";
import Paper from "@material-ui/core/Paper";
import "../../assets/css/Customer/deviceWiseFixed.css";
import { DeleteOutline } from "@material-ui/icons";
import { EditOutlined } from "@material-ui/icons";
import UseTable from "./UseTable";
import ConfirmationBox from "../common/ConfirmationBox";
import ConfirmDialog from "../Customer/bill_control/ConfirmDialog";
import { Modal, Button } from "react-bootstrap";
import "../../assets/css/CEBEngineer/engineerpopup.css";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

const headCells = [
  { id: "Unit_charges_requested_date", label: "Requested Date" },
  { id: "Time_category", label: "Unit Category" },
  { id: "Unit_charge", label: "Current Unit Price (LKR)" },
  { id: "Update_unit_charges", label: "Requested Unit Price (LKR)" },
  { id: "action", label: "Actions" },

];


const useStyles = makeStyles({
  root: {
    width: "100%",
    marginLeft: "5%",
    marginTop: "1%",
    paddingTop: "0px",
  },

  linkchartButton: {
    textDecoration: "none",
  },
});

const PendingTouUnitCharges = ({ setVisibleState3 }) => {

  const [modalShow, setModalShow] = React.useState(false);

  const [touUCharge, setTouUCharge] = useState("");
  const [touReqUCharge, setTouReqUCharge] = useState("");

  const [touTimePeriod, setTouTimePeriod] = useState("");
  const [Category, setCategory] = useState("");

  const classes = useStyles();
  const [records, setDeviceData] = useState([]);
  let history = useHistory();

  const [confirmationBox, setConfirmationBox] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const { TblContainer, TblHead } = UseTable(records, headCells);



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

  const getDashboardData = async () => {
    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });

    // console.log("inside getDashboardData");
    var ParamsUserId = "unit";

    const response = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/dashboard-pending-tou-unit-charges/${ParamsUserId}`,
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
    if (response.data.status) {
      // console.log("inside if unit", response.data.data);
      return response.data.data;

    } else {

      confirmation();
      return [];
    }
  };

  function confirmation() {
    setConfirmationBox({
      isOpen: true,
      title: "Can Not Perform This Action!",
      subTitle: "Your session has timed out. Please log in again.",
      btnStatus: "warning",
      onConfirm: () => {
        history.push("/sign-in");
        window.location.reload();//reload browser
        deleteAllCookies();
      },
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

  async function getPendingUnit() {
    var pendingTOUunit = await getDashboardData();
    setDeviceData(pendingTOUunit);

    if (pendingTOUunit.length > 0) {
      setVisibleState3("block");
    } else {
      setVisibleState3("none");
    }
  }

  useEffect(() => {
    getPendingUnit();
  }, []);


  function setDataToPopup(value, timePeriod, requestValue, categ) {
    setModalShow(true);
    setTouUCharge(value);
    setTouReqUCharge(requestValue);
    setTouTimePeriod(timePeriod);
    setCategory(categ)

  }

  const onDeletedevice = async (timePeriod, categoryName) => {

    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });



    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });

    var categoryId = "tou";

    Axios.post(`${process.env.REACT_APP_BASE_URL}/reject-unit-charges-update/${categoryId}`, {
      categoryName: categoryName,
      timePeriod: timePeriod
    }, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {


        if (response.data.status) {
          getPendingUnit();
          // props.getFunc();
          toast.success('Deleted Successfuly', {
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {

          confirmation()
        }
      }).catch((error) => {
        console.log("this is error  response", error);
      });




  };
  return (

    <Paper className={classes.root}>

      <TblContainer>
        <TblHead />
        <TableBody>

          {records.map((item) => (
            <TableRow>
              <TableCell>{item.Unit_charges_requested_date}</TableCell>
              <TableCell>{item.Time_category}</TableCell>
              <TableCell>{item.Unit_charge}</TableCell>
              <TableCell>{item.Update_unit_charges}</TableCell>

              <TableCell>
                <button
                  className="btn editActionButtonIcon" style={{ cursor: "pointer" }}
                  onClick={() => setDataToPopup(item.Unit_charge, item.Time_category, item.Update_unit_charges, "Unit")}

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
                      btnStatus: "danger",
                      onConfirm: () => {
                        onDeletedevice(item.Time_category, "Unit");
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
              <MyVerticallyCenteredModal
                unitPrice={touUCharge}
                reqUnitPrice={touReqUCharge}
                timePeriod={touTimePeriod}
                categoryName={Category}
                show={modalShow}
                getFunc={getPendingUnit}
                onHide={() => setModalShow(false)}
              />
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>


      <ConfirmationBox
        confirmationBox={confirmationBox}
        setConfirmationBox={setConfirmationBox}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />

    </Paper>
  );
};

function MyVerticallyCenteredModal(props) {

  const [NewAmount, setNewAmount] = useState("");

  let history = useHistory();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [confirmationBox, setConfirmationBox] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  function updateData(e) {
    e.preventDefault();

    getUpdatedata(e);
    props.onHide();
  }


  function getUpdatedata(e) {
    // console.log(NewAmount, props.categoryName, props.timePeriod);
    // e.preventDefault();
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;

    var categoryId = "tou";



    Axios.post(`${process.env.REACT_APP_BASE_URL}/unit-charges-update/${categoryId}`, {
      newPrice: NewAmount,
      categoryName: props.categoryName,
      timePeriod: props.timePeriod
    }, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {
        // console.log(response.data.data[1]);

        if (response.data.status) {
          window.location.reload();//reload browser
          // props.getFunc();
          toast.success('Edited Successfuly', {
            autoClose: 7000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {

          confirmation()
        }
      }).catch((error) => {
        console.log("this is error  response", error);
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



  function confirmation() {
    setConfirmationBox({
      isOpen: true,
      title: "Can Not Perform This Action!",
      subTitle: "Your session has timed out. Please log in again.",
      btnStatus: "warning",
      onConfirm: () => {
        history.push("/sign-in");
        window.location.reload();//reload browser
        deleteAllCookies();
      },
    });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update {props.categoryName} Charges - {props.timePeriod}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="engineer-popup-price-changes"
            style={{ display: "flex" }}
          >
            <h4>Current {props.categoryName} Price </h4>

            <label className="engineer-current-label">LKR : {props.unitPrice}</label>

          </div>
          <div
            className="engineer-popup-price-changes"
            style={{ display: "flex" }}
          >
            <h4>Pending {props.categoryName} Price </h4>

            <label className="engineer-current-label">LKR : {props.reqUnitPrice}</label>

          </div>
          {/* <div
          className="engineer-popup-price-changes"
          style={{ display: "flex" }}
        >
          <h4>Increasing Amount </h4>
          <input className="engineer-increase-amount"></input>
        </div> */}

          <div
            className="engineer-popup-price-changes"
            style={{ display: "flex" }}
          >
            <h4>New {props.categoryName} Price </h4>

            <input className="engineer-new-unit-price" onChange={(e) => { setNewAmount(e.target.value); }} placeholder="LKR" required></input>
          </div>
        </Modal.Body>

        <Modal.Footer id="engineer-accept-reject-button">
          <Button type="button" className="engineer-UpdateButton" onClick={(e) => {
            setConfirmDialog({
              isOpen: true,
              title: "Are You Sure Make Changes",
              subTitle: `Current Price: ${props.unitPrice} New Price: ${NewAmount}`,
              btnStatus: "success",
              onConfirm: (e) => {
                updateData(e);
              },
            })

          }}>
            UPDATE
          </Button>
          <Button onClick={props.onHide} className="engineer-CancelButton">
            CANCEL
          </Button>
        </Modal.Footer>
      </form>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ConfirmationBox
        confirmationBox={confirmationBox}
        setConfirmationBox={setConfirmationBox}
      />
    </Modal>
  );
}


export default PendingTouUnitCharges;
