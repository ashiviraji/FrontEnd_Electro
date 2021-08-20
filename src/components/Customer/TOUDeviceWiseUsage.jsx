import * as React from "react";
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

const columns = [
  { id: "device_id", label: "#", minWidth: 40 },
  { id: "applicance", label: "Appliance", minWidth: 120 },

  {
    id: "quantity",
    label: "Quantity",
    minWidth: 30,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  
  {
    id: "peak_amount",
    label: "Peak Amount   (LKR)",
    minWidth: 160,
    align: "center",
    format: (value) => value.toFixed(2),
  },

  {
    id: "day_amount",
    label: "Day amount  (LKR)",
    minWidth: 150,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "off_peak_amount",
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
    id: "total_amount",
    label: "Total amount  (LKR)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  device_id,
  applicance,
  quantity,
  peak_amount,
  day_amount,
  off_peak_amount,
  total_units,
  total_amount
) {
  //   const density = population / size;
  return {
    device_id,
    applicance,
    quantity,
    peak_amount,
    day_amount,
    off_peak_amount,
    total_units,
    total_amount,
  };
}

const rows = [
  createData(1, "Television", 1, 600, 400, 300, 100, 1300),
  createData(2, "Rice Cooker", 1, 800, 300, 200, 200, 1300),
  createData(3, "Radio", 1, 100, 500, 800, 220, 1440),
  createData(4, "Blender", 1, 100, 890, 780, 210, 1340),
  createData(5, "Washing Machine", 1, 100, 890, 780, 210, 1340),
  createData(6, "Multi Cooker", 1, 100, 890, 780, 210, 1340),
  createData(7, "Computer", 1, 100, 890, 780, 210, 1340),
  createData(8, "Laptop", 1, 100, 890, 780, 210, 210, 1340),
  createData(9, "Table Fan", 1, 100, 890, 780, 210, 1340),
  createData(10, "Iron", 1, 100, 890, 780, 210, 1340),
  createData(11, "Oven", 1, 100, 890, 780, 210, 1340),
  createData(12, "", 1, 100, 890, 780, 210, 1340),
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
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState("");

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

  return (
    <Paper className={classes.root}>
      <div className="button-device-wise">
        <Link to="/devicewise-chart-TOU" className={classes.linkchartButton}>
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
