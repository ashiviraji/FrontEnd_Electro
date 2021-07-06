import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useForm from "../../components/Customer/useForm";
import { Form } from "../../components/Customer/useForm";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Controls from "../../components/Customer/bill_control/Controls";

const priorityList = [
  { id: "high", title: "High" },
  { id: "mid", title: "Mid" },
  { id: "low", title: "Low" },
];

const initialFvalues = {
  appliance: "",
  quantity: "",
  hPeak: "",
  mPeak: "",
  hOffPeak: "",
  mOffPeak: "",
  hDay: "",
  mDay: "",
  power: "",
  priority: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  label: {
    textTransform: "none",
  },
}));

export default function CalculateBillForm() {
  const classes = useStyles();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("appliance" in fieldValues)
      temp.appliance = fieldValues.appliance ? "" : "This field is required";
    if ("quantity" in fieldValues)
      temp.quantity = fieldValues.quantity > 0 ? "" : "Enter The quantity";
    if ("power" in fieldValues)
      temp.power =
        fieldValues.power > 0 ? "" : "power should be a number and > 0";
    if ("priority" in fieldValues)
      temp.priority = fieldValues.priority
        ? ""
        : "Please select priority of device";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFvalues, true, validate);

  const handleSubmitBill = (e) => {
    e.preventDefault();
    if (validate()) window.alert("testing...");
  };

  return (
    <Form onSubmit={handleSubmitBill}>
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
            value={values.power}
            onChange={handleInputChange}
            unit="W"
            error={errors.power}
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <Controls.InputTxt
            id="standard-start-adornment"
            label="Peak"
            name="hPeak"
            value={values.hPeak}
            onChange={handleInputChange}
            unit="h"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="Off Peak"
            name="hOffPeak"
            value={values.hOffPeak}
            onChange={handleInputChange}
            unit="h"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="Day"
            name="hDay"
            value={values.hDay}
            onChange={handleInputChange}
            unit="h"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Controls.InputTxt
            id="standard-start-adornment"
            label="Peak"
            name="mPeak"
            value={values.mPeak}
            onChange={handleInputChange}
            unit="min"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="Off Peak"
            name="mOffPeak"
            value={values.mOffPeak}
            onChange={handleInputChange}
            unit="min"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="Day"
            name="mDay"
            value={values.mDay}
            onChange={handleInputChange}
            unit="min"
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="priority"
            label="Select Priority"
            value={values.priority}
            onChange={handleInputChange}
            items={priorityList}
            error={errors.priority}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            onClick=""
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
    </Form>
  );
}
