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

const useStyles = makeStyles({
  root: {
    width: "40%",
    marginLeft: "5%",
    marginTop: "6%",
    paddingTop: "20px",
  },
  // container: {
  //   maxHeight: 350,
  // },
  linkchartButton: {
    textDecoration: "none",
  },
});

function PendingNormalUnitCharges() {
  const [pendingNormalUnitCharges, setPendingNormalUnitCharges] = useState("");
  const columns = [
    // { id: "device_id", label: "Device Id", minWidth: 40 },
    { id: "date", label: "Date", minWidth: 50 },

    {
      id: "unit_category",
      label: "Unit Category",
      minWidth: 50,
      align: "center",
      format: (value) => value.toFixed(2),
    },

    {
      id: "current_value",
      label: "Current Value (LKR)",
      minWidth: 30,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "new_value",
      label: "New Value (LKR)",
      minWidth: 30,
      align: "center",
      format: (value) => value.toFixed(2),
    },
  ];

  let history = useHistory();
  var ParamsUserId = "unit";

  // console.log(ParamsUserId);

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

  useEffect(async () => {
    var pendingnormalunit = await getDashboardData();
    setPendingNormalUnitCharges(pendingnormalunit);
    console.log("Get Unit", pendingnormalunit);
  }, []);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState("");
  const [rows, setDeviceData] = useState([]);

  return (
    <div>
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
    </div>
  );
}

export default PendingNormalUnitCharges;
