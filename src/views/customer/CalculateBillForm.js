import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useForm from "../../components/Customer/useForm";
import { Form } from "../../components/Customer/useForm";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from '@material-ui/core/FormControl';
import { FormLabel } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { Button } from "@material-ui/core";


const initialFvalues = {
  appliance: "",
  quantity: "",
  hPeak: "",
  hOffPeak: "",
  hDay: "",
  power: "",
  priority: "",
};

const useStyles = makeStyles(theme =>({
  root : {
    margin:theme.spacing(1)
  },
  label: {
    textTransform: 'none'
  }
}))

export default function CalculateBillForm() {
  const { values, setValues, handleInputChange } = useForm(initialFvalues);
  const classes = useStyles();

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
            name="power"
            value={values.power}
            onChange={handleInputChange}
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">W</InputAdornment>,
            }}
          />
          <FormControl>
            <FormLabel>Select Priority</FormLabel>
            <RadioGroup row
              name = "priority"
              value = {values.priority}
              onChange = {handleInputChange}
            >
              <FormControlLabel value="high" control={<Radio/>} label="High"  />
              <FormControlLabel value="mid" control={<Radio/>} label="Mid"  />
              <FormControlLabel value="low" control={<Radio/>} label="Low"  />

            </RadioGroup>

          </FormControl>
          
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-start-adornment"
            label="Hours in Peak Time"
            name = "hPeak"
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
            name = "hOffPeak"
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
            name = "hDay"
            value={values.hDay}
            onChange={handleInputChange}
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">h</InputAdornment>,
            }}
          />
          <Button variant = "contained" size = "large" color = "primary" classes={{ root: classes.root, label: classes.label}} > Submit </Button>
          <Button variant = "contained"  size = "large"  color = "default" classes={{ root: classes.root, label: classes.label}}> Reset </Button>
        </Grid>
      </Grid>
    </Form>
  );
}
