import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useForm from "../../components/Customer/useForm";
import { Form } from "../../components/Customer/useForm";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import { InputLabel } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const initialFvalues = {
  appliance: "",
  quantity: "",
  hPeak: "",
  hOffPeak: "",
  hDay: "",
  power: "",
  priority: "",
};

export default function CalculateBillForm() {
  const { values, setValues, handleInputChange } = useForm(initialFvalues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            TextField
            id="standard-basic"
            label="Appliance"
            name="appliance"
            value={values.appliance}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-number"
            label="Quantity"
            type="number"
            name="quantity"
            InputLabelProps={{
              shrink: true,
            }}
            value={values.quantity}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-start-adornment"
            label="Power of Appliance"
            value={values.power}
            onChange={handleInputChange}
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">W</InputAdornment>,
            }}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.priority}
              onChange={handleInputChange}
            >
              <MenuItem value={'highPrority'}>high priority</MenuItem>
              <MenuItem value={'midPrority'}>mid priority</MenuItem>
              <MenuItem value={'lowPrority'}>low priority</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-start-adornment"
            label="Hours in Peak Time"
            value={values.hPeak}
            onChange={handleInputChange}
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">h</InputAdornment>,
            }}
          />
          <TextField
            id="standard-start-adornment"
            label="Hours in off Peak Time"
            value={values.hOffPeak}
            onChange={handleInputChange}
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">h</InputAdornment>,
            }}
          />
          <TextField
            id="standard-start-adornment"
            label="Hours in Day Time"
            value={values.hDay}
            onChange={handleInputChange}
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">h</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
