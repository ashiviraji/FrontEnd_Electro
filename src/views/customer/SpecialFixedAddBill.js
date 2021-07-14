import React from 'react'
import {
    InputAdornment,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Toolbar,
  } from "@material-ui/core";
  import { Add, DeleteOutline, EditOutlined, Search } from "@material-ui/icons";
import { Col, Form, Row } from 'react-bootstrap';

const noOfDays = 0;
const addtionalUnits =0;

  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    table: {
      marginTop: theme.spacing(3),
      '& thead th': {
          fontWeight: '600',
          color: theme.palette.primary.light,
      },
      '& tbody td' : {
          fontWeight: '300',
      },
      '& tbody tr:hover': {
          backgroundColor: '#fffbf2',
          cursor: 'pointer',
      },
  },
  Rowinform: {
    margin: "10px"
}
  }));

export default function SpecialFixedAddBill() {

    const classes = useStyles();
    return (
        <div>
            
        <Paper className={classes.pageContent}>
        <h1>Your Device Data</h1>

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

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Appliance</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Power</TableCell>
              <TableCell>Time Duration</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
            {/* <TableBody>
            {record.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.appliance}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.power}</TableCell>
                <TableCell>{item.hour}hrs : {item.min}mins </TableCell>
                <TableCell>
                  <button
                    className="btn editActionButtonIcon"
                  >
                    <EditOutlined
                      fontSize="small"
                      ClassName={classes.actionButtonIcon}
                    />
                  </button>
                  <button
                    className="btn deleteActionButtonIcon"
                  >
                    <DeleteOutline
                      fontSize="small"
                      ClassName={classes.actionButtonIcon}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>

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
                    // defaultValue={noOfDays}
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
    )
}
