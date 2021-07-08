import React, { useState } from "react";
import CalculateBillForm from "./CalculateBillForm";
import { Paper, makeStyles } from "@material-ui/core";
import useTable from "../../components/Customer/useTable";
import * as DeviceBill from "./DeviceBill";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import Controls from "../../components/Customer/bill_control/Controls";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "../../assets/css/Customer/billCalculate.css";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Popup from "../../components/Customer/bill_control/Popup";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  newButton : {
      position: 'absolute',
      right:'10px'
  }
}));

const headCells = [
  { id: "appliance", label: "Appliance" },
  { id: "quantity", label: "Quantity" },
  { id: "power", label: "Power" },
  { id: "priority", label: "Priority" },
  { id: "hPeak", label: "Peak Hour" },
  { id: "hOffPeak", label: "Off Peak Hour" },
  { id: "hDay", label: "Day Hour" },
];

export default function CalculateBill() {
  const classes = useStyles();
  const [records, setRecords] = useState(DeviceBill.getAllDevices());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [openPopup, setOpenPopup ] = useState(false)

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.appliance.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <div>
      
      <Paper className={classes.pageContent}>
        <h2>Your Device Data</h2>
        <Toolbar>
          <TextField
            label="With normal TextField"
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            size="large"
            color="default"
            startIcon = {<Add/>}
            className = {classes.newButton}
            onClick={() => setOpenPopup(true)} 
          >
            Add New
          </Button>
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.appliance}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.power}</TableCell>
                <TableCell>{item.priority}</TableCell>
                <TableCell>
                  {item.hPeak}h & {item.mPeak} min
                </TableCell>
                <TableCell>
                  {item.hOffPeak}h & {item.mOffPeak} min
                </TableCell>
                <TableCell>
                  {item.hDay}h & {item.mDay} min
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title = "Add New Device Details"
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
      >
          <CalculateBillForm />
      </Popup>
    </div>
  );
}
