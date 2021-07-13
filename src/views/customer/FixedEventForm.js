import React from "react";
import Fixed_event from "../../components/Customer/Special_Event/Fixed_event";
import { makeStyles } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Add, Search } from "@material-ui/icons";
import { InputAdornment, Paper, TextField, Toolbar } from "@material-ui/core";
import "../../assets/css/Customer/specialEvent.css"


const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  Rowinform: {
    margin: "10px"
}
}));

const noOfDays = 2;
const addtionalUnits =43;

export default function FixedEentForm() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.pageContent}>
        <h1>Fixed Model</h1>
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
        <Fixed_event />
        <Paper className={classes.pageContent}>
        <Form className="main-calculate-form">
            <Form.Group>
              <Row className="RowInForm-noOfDays">
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
                  Number Of Days
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="number"
                    placeholder="Number of Days"
                    defaultValue={noOfDays}
                  />
                </Col>
                <Col sm="4">
                <button type="button" className="btn btn-success calculate-button-special-event">
                    Calculate
                </button>
                </Col>
              </Row>
              </Form.Group>
          </Form>
          <Form className={classes.formLabelStyle}>
            <Form.Group>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
                Additional Units for the Event
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={addtionalUnits}
                    disabled
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Paper>
        </Paper>
      
    </div>
  );
}
