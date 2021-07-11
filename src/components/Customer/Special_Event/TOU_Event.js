import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@material-ui/core";
  import { DeleteOutline, EditOutlined } from "@material-ui/icons";
  import React from "react";
  
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
  }));
  
  const record = [
      { id: "1", appliance: "Flash Light", quantity: 4, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "2", appliance: "Water Moter", quantity: 2, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "3", appliance: "Vacuum Cleaner", quantity: 3, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "4", appliance: "Bulb", quantity: 10, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "5", appliance: "Freezer", quantity: 5, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "6", appliance: "Coffee Maker", quantity: 2, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "7", appliance: "Washing machine", quantity: 2, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "8", appliance: "Microphones", quantity: 2, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "9", appliance: "speakers", quantity: 4, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
      { id: "10", appliance: "Electric Guitar", quantity: 2, power: "1000w", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" }
    ];
  
  export default function Fixed_event() {
    const classes = useStyles();
  
  
    return (
      <div>
        <Paper className={classes.pageContent}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Appliance</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Peak Duration</TableCell>
                <TableCell>Off Peak Duration</TableCell>
                <TableCell>Day Duration</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
              <TableBody>
              {record.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.appliance}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.power}</TableCell>
                  <TableCell>{item.hPeak}hrs : {item.mPeak}mins </TableCell>
                  <TableCell>{item.hOffPeak}hrs : {item.mOffPeak}mins </TableCell>
                  <TableCell>{item.hDay}hrs : {item.mDay}mins </TableCell>
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
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
  