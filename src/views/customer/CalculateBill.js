import React, { useState } from 'react';
import CalculateBillForm from './CalculateBillForm';
import { Paper, makeStyles } from '@material-ui/core';
import useTable  from '../../components/Customer/useTable';
import * as DeviceBill from './DeviceBill';
import { TableBody } from '@material-ui/core'
import { TableCell } from '@material-ui/core';
import { TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    pageContent : {
        margin : theme.spacing(5),
        padding : theme.spacing(3)
    }
  }));

const headCells = [
    {id:'appliance', label:'Appliance'},
    {id:'quantity', label:'Quantity'},
    {id:'power', label:'Power'},
    {id:'priority', label:'Priority'}
]

export default function CalculateBill() {

    const classes = useStyles();
    const [records, setRecords] = useState(DeviceBill.getAllDevices())
    
    const {
        TblContainer,
        TblHead
    } = useTable(records,headCells);

    return (
        <div>

            <Paper className = {classes.pageContent}>
                <CalculateBillForm/>
                
            </Paper>

            <Paper className = {classes.pageContent}>
            <TblContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            records.map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.appliance}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.power}</TableCell>
                                    <TableCell>{item.priority}</TableCell>
                                </TableRow>))
                        }
                    </TableBody>
                </TblContainer>
                
            </Paper>

            
            
        </div>
    )
}
