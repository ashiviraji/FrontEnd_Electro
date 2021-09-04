import React from "react";
import { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { useHistory } from "react-router";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import "../../assets/css/Customer/deviceWiseFixed.css";

const columns = [
  // { id: "device_id", label: "Device Id", minWidth: 40 },
  { id: "Fixed_charges_requested_date", label: "Requested Date", minWidth: 50 },

  {
    id: "Unit_category",
    label: "Unit Category",
    minWidth: 50,
    align: "center",
    format: (value) => value.toFixed(2),
  },

  {
    id: "Fixed_charge",
    label: "Current Fixed Price (LKR)",
    minWidth: 30,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "Update_fixed_charges",
    label: "Requested Fixed Price (LKR)",
    minWidth: 30,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginLeft: "5%",
    marginTop: "1%",
    paddingTop: "0px",
  },
  // container: {
  //   maxHeight: 350,
  // },
  linkchartButton: {
    textDecoration: "none",
  },
});

const PendingNormalFixedCharges = ({ setVisibleState2 }) => {
  // var pendingnormalunit="";
  // const [row, setPendingNormalUnitCharges] = useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selected, setSelected] = React.useState("");
  const [rows, setDeviceData] = useState([]);
  let history = useHistory();
  var ParamsUserId = "fixed";

  // console.log(ParamsUserId);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
    // e.preventDefault();
    console.log("inside getDashboardData");

    const response = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/dashboard-pending-normal-unit-charges/${ParamsUserId}`,
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
    if (response.data.status) {
      console.log("inside if fixed", response.data.data);
      return response.data.data;
    } else {
      history.push("/sign-in");
      window.location.reload(); //reload browser
      deleteAllCookies(); //delete all cookies
    }
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

  async function getPendingUnit() {
    var pendingnormalfixed = await getDashboardData();
    setDeviceData(pendingnormalfixed);

    if (pendingnormalfixed.length > 0) {
      setVisibleState2("block");
    } else {
      setVisibleState2("none");
    }
  }

  useEffect(() => {
    getPendingUnit();
  }, []);

  console.log("roes fixed:", rows);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <p>
                    <b>{column.label}</b>
                  </p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PendingNormalFixedCharges;
