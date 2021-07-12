import { Paper } from "@material-ui/core";
import React from "react";
import Fixed_event from "../../components/Customer/Special_Event/Fixed_event";
import { makeStyles } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";


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
        <Fixed_event />
        <Paper className={classes.pageContent}>
          <Form className={classes.formLabelStyle}>
            <Form.Group>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                  Enter The Number Of Days
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="number"
                    placeholder="Number of Days"
                    value={noOfDays}
                  />
                </Col>
              </Row>
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
