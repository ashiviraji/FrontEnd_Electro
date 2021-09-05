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

const headCells = [
  { id: "Unit_charges_requested_date", label: "Requested Date" },
  { id: "Unit_category", label: "Unit Category" },
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

const PendingNormalUnitCharges = ({ setVisibleState1 }) => {


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

    console.log("inside getDashboardData");
    var ParamsUserId = "unit";

    const response = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/dashboard-pending-normal-unit-charges/${ParamsUserId}`,
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
    if (response.data.status) {
      console.log("inside if unit", response.data.data);
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
    var pendingnormalunit = await getDashboardData();
    setDeviceData(pendingnormalunit);

    if (pendingnormalunit.length > 0) {
      setVisibleState1("block");
    } else {
      setVisibleState1("none");
    }
  }

  useEffect(() => {
    getPendingUnit();
  }, []);

  const onDeletedevice = async (unitPeriod, categoryName) => {

    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });



    setConfirmationBox({
      ...confirmationBox,
      isOpen: false,
    });

    var categoryId = "normal";

    Axios.post(`${process.env.REACT_APP_BASE_URL}/reject-unit-charges-update/${categoryId}`, {
      categoryName: categoryName,
      unitPeriod: unitPeriod
    }, {
      headers: {
        authorization: `Token ${token}`
      }
    })
      .then((response) => {


        if (response.data.status) {
          getPendingUnit();
          // props.getFunc();
          // toast.success('rejected successfuly', {
          //   autoClose: 7000,
          //   hideProgressBar: true,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
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
              <TableCell>{item.Unit_category}</TableCell>
              <TableCell>{item.Unit_charge}</TableCell>
              <TableCell>{item.Update_unit_charges}</TableCell>

              <TableCell>
                <button
                  className="btn editActionButtonIcon" style={{ cursor: "pointer" }}
                // onClick={() => {
                //   openInPopup(item);
                // }}
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
                        onDeletedevice(item.Unit_category, "Unit");
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

export default PendingNormalUnitCharges;
