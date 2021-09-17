import { useState, useEffect } from "react";
import * as React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { BsFillBarChartFill } from "react-icons/bs";
import "../../assets/css/Customer/deviceWiseFixed.css";
import { Link } from "react-router-dom";
import Axios from 'axios';


const columns = [
  // { id: "device_id", label: "Device Id", minWidth: 40 },
  { id: "appliance", label: "Appliance", minWidth: 120 },

  {
    id: "quantity",
    label: "Quantity",
    minWidth: 30,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  
  {
    id: "cost_peak_time",
    label: "Peak Amount   (LKR)",
    minWidth: 160,
    align: "center",
    format: (value) => value.toFixed(2),
  },

  {
    id: "cost_day_time",
    label: "Day amount  (LKR)",
    minWidth: 150,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "cost_off_peak_time",
    label: "off peak  (LKR)",
    minWidth: 150,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "total_units",
    label: "Total units",
    minWidth: 100,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "total_cost_TOU",
    label: "Total amount  (LKR)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "3%",
    paddingTop: "20px",
  },
  // container: {
  //   maxHeight: 350,
  // },
  linkchartButton: {
    textDecoration:"none",
  }
});

export default function StickyHeadTable() {

  const params = new URLSearchParams(window.location.search)
  const calculatedBillId  = params.get('bill_id');

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState("");
  const [rows, setDeviceData] = useState([]);

  let area = null;
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    console.log(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let history = useHistory();

  async function getDeviceDetails(newBillId) {

  var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;


  var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


    // let History = useHistory();
    console.log("call device detail function")

    const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-device-wise-usage-tou-main/${ParamsUserId}`, {
        newBillId: newBillId
    }, {
        headers: {
            authorization: `Token ${token}`
        }
    })

    console.log(response.data.data);
    return response.data.data;

}


  useEffect( async () => {

    var devices_data = await getDeviceDetails(calculatedBillId);
    setDeviceData(devices_data);
  },[]);


  return (
    <Paper className={classes.root}>
      <div className="button-device-wise">
        <Link to={`/devicewise-chart-TOU?bill_id=${calculatedBillId}`} className={classes.linkchartButton}>
          <Button
            variant="contained"
            id="device-wise-btn"
            color="primary"
            disableElevation
          >
            <BsFillBarChartFill
              style={{ width: "20px", height: "20px" }}
            ></BsFillBarChartFill>
            &nbsp;&nbsp;&nbsp;View Chart Of Usage
          </Button>
        </Link>
      </div>

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
                  {column.label}
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
