import { InputAdornment, makeStyles, Paper, TextField, Toolbar } from '@material-ui/core';
import { Add, Search } from '@material-ui/icons';
import React from 'react'
import BillMoreDetailsTable from '../../components/Customer/bill_control/BillMoreDetailsTable'
import "../../assets/css/Customer/billCalculate.css";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    newButton: {
      position: "absolute",
      right: "10px",
    },
  }));

export default function BillMoreDetails() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.pageContent}>
                <h1>More Details</h1>
            <Toolbar>
          <TextField
            label="Search Device"
            className="Search-bar-in-form"
            // onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <button
            type="button"
            className="btn btn-info add-new-button"
            // onClick={() => {
            //   setOpenPopup(true);
            //   setRecordForEdit(null);
            // }}
          >
            <Add />
            Add New
          </button>
        </Toolbar>
            <BillMoreDetailsTable/>
            <Link to="/bill-comparison">
          <button type="button" className="btn btn-success calculate-button">
            Calculate
          </button>
        </Link>

            </Paper>
        </div>
    )
}
