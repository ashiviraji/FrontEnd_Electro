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
  id:"",
  appliance: "",
  quantity: 0,
  hPeak: 0,
  mPeak: 0,
  hOffPeak: 0,
  mOffPeak: 0,
  hDay: 0,
  mDay: 0,
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

export default function CalculateBillForm(props) {

  const {addOrEdit, recordForEdit} = props

  const classes = useStyles();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // || ("quantity" in fieldValues) || ("power" in fieldValues) || ("priority" in fieldValues)
   if ("appliance" in fieldValues)
      temp.appliance = fieldValues.appliance? "": "This field is required";
    if ("quantity" in fieldValues)
      temp.quantity = fieldValues.quantity > 0 ? "" : "Quantity is required and > 0";
    if ("power" in fieldValues)
      temp.power = fieldValues.power > 0 ? "" : "power should be a number and > 0";
    if ("priority" in fieldValues)
      temp.priority = fieldValues.priority? "" : "Please select priority of device";
    if ("hPeak" in fieldValues)
      temp.hPeak = ( (fieldValues.hPeak >= 0 && fieldValues.hPeak <= 4) ||  fieldValues.hPeak === "") ? "" : "4 >Peak Hours in day >= 0";
    if ("hOffPeak" in fieldValues)
      temp.hOffPeak = ( (fieldValues.hOffPeak >= 0 && fieldValues.hOffPeak <= 7) ||  fieldValues.hOffPeak === "") ? "" : "7 >Off Peak Hours in day >= 0";
    if ("hDay" in fieldValues)
      temp.hDay = ( (fieldValues.hDay >= 0 && fieldValues.hDay <= 13) ||  fieldValues.hDay === "") ? "" : "13 >Day Hours in day >= 0";
    if ("mPeak" in fieldValues)
      temp.mPeak = ( (fieldValues.mPeak >= 0 && fieldValues.mPeak < 60) ||  fieldValues.mPeak === "") ? "" : "60 > minutes >= 0";
    if ("mOffPeak" in fieldValues)
      temp.mOffPeak = ( (fieldValues.mOffPeak >= 0 && fieldValues.mOffPeak < 60) ||  fieldValues.mOffPeak === "")  ? "" : "60 > minutes >= 0";
    if ("mDay" in fieldValues)
      temp.mDay = ( (fieldValues.mDay >= 0 && fieldValues.mDay < 60) ||  fieldValues.mDay === "")  ? "" : "60 > minutes >= 0";
    setErrors({
      ...temp
    })

    if (fieldValues == values) {
      return Object.values(temp).every(x => x == "");
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
  }

  useEffect(() => {
    if(recordForEdit != null){
      setValues({
        ...recordForEdit
      })
    }
  }, [recordForEdit])

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
            label="Peak"
            name="hPeak"
            type="number"
            value={values.hPeak}
            onChange={handleInputChange}
            error={errors.hPeak}
            unit="hrs"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="Off Peak"
            name="hOffPeak"
            type="number"
            value={values.hOffPeak}
            onChange={handleInputChange}
            error={errors.hOffPeak}
            unit="hrs"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="Day"
            name="hDay"
            type="number"
            value={values.hDay}
            onChange={handleInputChange}
            error={errors.hDay}
            unit="hrs"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Controls.InputTxt
            id="standard-start-adornment"
            label="(6.30pm - 10.30pm)"
            name="mPeak"
            type="number"
            value={values.mPeak}
            onChange={handleInputChange}
            error={errors.mPeak}
            unit="min"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="(10.30pm - 5.30am)"
            name="mOffPeak"
            type="number"
            value={values.mOffPeak}
            onChange={handleInputChange}
            error={errors.mOffPeak}
            unit="min"
          />

          <Controls.InputTxt
            id="standard-start-adornment"
            label="(5.30am - 6.30pm)"
            name="mDay"
            type="number"
            value={values.mDay}
            onChange={handleInputChange}
            error={errors.mDay}
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
      High : Can not change the device usage time <br/>
      Mid : Can use moderately in specified time slot <br/>
      Low : Usage is not mandatory in specified time slot<br/>
    </Form>
  );
}
