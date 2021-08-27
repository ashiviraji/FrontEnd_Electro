import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useForm from "../../components/Customer/useForm";
import { Form } from "../../components/Customer/useForm";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Controls from "../../components/Customer/bill_control/Controls";



var ParamsUserId = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;

    console.log("User id is" +ParamsUserId);


    console.log("customer id :"+ParamsUserId);
const initialFvalues = {
  device_id: 0,
  bill_id: 0,
  appliance: "",
  quantity: 0,
  hours: 0,
  minutes: 0,
  power: "",
  using_total_minutes: 0,
  total_units_fixed: 0,
  // Cust_id: ParamsUserId
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  label: {
    textTransform: "none",
  },
}));

export default function SpecialFixedCalculateBillForm(props) {
  const { addOrEdit, recordForEdit } = props;

  initialFvalues.bill_id = props.billId;
  console.log(initialFvalues.bill_id);

  const classes = useStyles();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // || ("quantity" in fieldValues) || ("power" in fieldValues) || ("priority" in fieldValues)
    if ("appliance" in fieldValues)
      temp.appliance = fieldValues.appliance ? "" : "This field is required";
    if ("quantity" in fieldValues)
      temp.quantity =
        fieldValues.quantity > 0 ? "" : "Quantity is required and > 0";
    if ("power" in fieldValues)
      temp.power =
        fieldValues.power > 0 ? "" : "power should be a number and > 0";
    if ("hours" in fieldValues)
      temp.hours =
        (fieldValues.hours >= 0 && fieldValues.hours <= 24) ||
          fieldValues.hours === ""
          ? ""
          : "24 > Hours in day >= 0";
    if ("minutes" in fieldValues)
      temp.minutes =
        (fieldValues.minutes >= 0 && fieldValues.minutes < 60) ||
          fieldValues.minutes === ""
          ? ""
          : "60 > minutes >= 0";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) {
      return Object.values(temp).every((x) => x == "");
    }
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFvalues, true, validate);

  const handleSubmitBill = (e) => {
    e.preventDefault();
    console.log("testing...");
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };



  useEffect(() => {
    if (recordForEdit != null) {
      setValues({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);

  return (
    <Form>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Controls.InputTxt
            id="standard-basic"
            label="Appliance"
            name="appliance"
            value={values.appliance}
            onChange={handleInputChange}
            error={errors.appliance}
          />
          <Controls.InputTxt
            id="standard-number"
            label="Quantity"
            name="quantity"
            type="number"
            value={values.quantity}
            onChange={handleInputChange}
            error={errors.quantity}
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="Power of Appliance"
            name="power"
            // type="number"
            value={values.power}
            onChange={handleInputChange}
            unit="W"
            error={errors.power}
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <Controls.InputTxt
            id="standard-start-adornment"
            label="Hours"
            name="hours"
            type="number"
            value={values.hours}
            onChange={handleInputChange}
            error={errors.hours}
            unit="hrs"
          />

         
        </Grid>
        <Grid item xs={6} sm={3}>
          <Controls.InputTxt
            id="standard-start-adornment"
            label="Minutes"
            name="minutes"
            type="number"
            value={values.minutes}
            onChange={handleInputChange}
            error={errors.minutes}
            unit="min"
          />

         
        </Grid>
        
        <Grid item xs={6}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSubmitBill}
            classes={{ root: classes.root, label: classes.label }}
          >
            {" "}
            Submit{" "}
          </Button>
          <Button
            variant="contained"
            size="large"
            color="default"
            onClick={resetForm}
            classes={{ root: classes.root, label: classes.label }}
          >
            {" "}
            Reset{" "}
          </Button>
        </Grid>
      </Grid>
      <br/>
    </Form>
  );
}
