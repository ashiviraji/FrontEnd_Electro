import React from 'react'
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
    { id: "1", appliance: "TV", quantity: 4, power: "100w", priority: "mid", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "2", appliance: "Water Moter", quantity: 2, power: "2200w", priority: "low", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "3", appliance: "Radio", quantity: 3, power: "100w", priority: "high", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "4", appliance: "Bulb", quantity: 10, power: "25w",  hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "5", appliance: "Rice Cooker", quantity: 5, power: "500w", priority: "high", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "6", appliance: "Phone", quantity: 2, power: "10w", priority: "low", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "7", appliance: "Washing machine", quantity: 2, power: "1000w", priority: "high", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "8", appliance: "Table Lamp", quantity: 2, power: "20w", priority: "mid", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "9", appliance: "Iorn", quantity: 4, power: "2200w", priority: "high", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" },
    { id: "10", appliance: "Comuter", quantity: 2, power: "200w", priority: "low", hPeak: "3", mPeak: "30", hOffPeak: "3", mOffPeak: "30", hDay: "3", mDay: "30" }
  ];

export default function BillMoreDetailsTable() {

    const classes = useStyles();

    return (
        <div>
            
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
       
        </div>
    )
}
