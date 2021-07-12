import React from 'react'
import TOU_Event from "../../components/Customer/Special_Event/TOU_Event";
import { Paper } from "@material-ui/core";
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

const noOfDays = 1;
const noOfUnitPeak = 20;
const noOfUnitOffPeak = 13;
const noOfUnitDay = 17;
const addtionalChargeBill = 1231;

export default function TOUEventForm() {
    const classes = useStyles();

    return (
        <div>
              <Paper className={classes.pageContent}>
        <h1>TOU Model</h1>
        <TOU_Event/>
        <Paper className={classes.pageContent}>
          <Form className={classes.formLabelStyle}>
            <Form.Group>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                  Number Of Days
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
                <Form.Label column sm="4">
                  No of Units In Peak Time
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={noOfUnitPeak}
                    disabled
                  />
                </Col>
              </Row>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                No of Units In Off Peak Time
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={noOfUnitOffPeak}
                    disabled
                  />
                </Col>
              </Row>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                No of Units In Day Time
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={noOfUnitDay}
                    disabled
                  />
                </Col>
              </Row>
              <Row className={classes.Rowinform}>
                <Col sm="4"></Col>
                <Form.Label column sm="4" style={{fontWeight:"550"}}>
                Additional Amount for the Event
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="text"
                    value={"LKR : "+addtionalChargeBill}
                    disabled
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Paper>

      </Paper>
        </div>
    )
}
