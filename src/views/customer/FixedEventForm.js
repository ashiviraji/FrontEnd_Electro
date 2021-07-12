import { Paper } from "@material-ui/core";
import React from "react";
import Fixed_event from "../../components/Customer/Special_Event/Fixed_event";
import { makeStyles } from "@material-ui/core";
import Controls from "../../components/Customer/bill_control/Controls";
import { right } from "@popperjs/core";
import { Label } from "@material-ui/icons";
import { Col, Form, Row } from "react-bootstrap";
import TOU_Event from "../../components/Customer/Special_Event/TOU_Event";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

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
              <Row>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                  Enter The Number Of Days
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="number"
                    placeholder="Number of Days"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Paper>
        
        <h1>----------------------------------------------------------</h1>
        
        <h1>TOU Model</h1>
        <TOU_Event/>
        <Paper className={classes.pageContent}>
          <Form className={classes.formLabelStyle}>
            <Form.Group>
              <Row>
                <Col sm="4"></Col>
                <Form.Label column sm="4">
                  Enter The Number Of Days
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    type="number"
                    placeholder="Number of Days"
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
