import * as React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";

const columns = [
  { id: "appliance", label: "Appliance", minWidth: 100 },

  {
    id: "quantity",
    label: "Quantity",
    minWidth: 40,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "total_units_fixed",
    label: "Total units",
    minWidth: 160,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
 
];

// function createData(
//   device_id,
//   appliaance,
//   quantity,
//   total_units,
//   total_amount
// ) {
//   //   const density = population / size;
//   return { device_id, appliaance, quantity, total_units };
// }

// const rows = [
//   createData(1, "Freezer", 1, 20),
//   createData(2, "Flash Light", 2, 15),
//   createData(3, "Guitar", 1, 10),
//   createData(4, "Sound Speakers", 2, 20),
//   createData(5, "Mics", 1, 25),
//   createData(6, "Drums", 2,30),
//   createData(7, "Coffer Maker", 1,30),
//   createData(8, "Juicer", 1,30),
//   createData(9, "Water Pumps", 1,30),
  
// ];

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
  const BillId  = params.get('bill_id');
  console.log(BillId);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState("");
  const [rows, setDeviceData] = useState([]);
  const [billName, setBillName] = useState("");

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

  async function getSpecialEventDeviceDetailsFixed(newBillId) {

    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
  
      // let History = useHistory();
      console.log("call device detail fixed function")
  
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-specialEvent-details-devicewise-fixed/${ParamsUserId}`, {
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
  
    var special_event_data_fixed = await getSpecialEventDeviceDetailsFixed(BillId);
    
    if(special_event_data_fixed != null){
      setDeviceData(special_event_data_fixed );
      setBillName(special_event_data_fixed[0].model_name);
      
    }
    else{
      setDeviceData([]);
      setBillName("");
    }
  },[]);

  return (
    <Paper className={classes.root}>
      <h3 style={{marginLeft:"3%"}}>Fixed Model</h3>
      <h5 style={{marginLeft:"3%",marginTop:"5%"}}>Bill Name :- {billName} </h5>

      <div className="button-device-wise">
      <Link to= {`/devicewise-chart-spfixed?bill_id=${BillId}`} className={classes.linkchartButton}> 
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
