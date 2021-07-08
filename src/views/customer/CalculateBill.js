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
    {id:'priority', label:'Priority'},
    {id:'hPeak', label:'Peak Hour'},
    {id:'hOffPeak', label:'Off Peak Hour'},
    {id:'hDay', label:'Day Hour'}
]

export default function CalculateBill() {

    const classes = useStyles();
    const [records, setRecords] = useState(DeviceBill.getAllDevices())
    
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records,headCells);

    return (
        <div>
            

            <Paper className = {classes.pageContent}>
            <h2>Add Device</h2>
                <CalculateBillForm/>
                
            </Paper>

            <Paper className = {classes.pageContent}>
            <h2>Your Device Data</h2>
            <TblContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.appliance}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.power}</TableCell>
                                    <TableCell>{item.priority}</TableCell>
                                    <TableCell>{item.hPeak}h & {item.mPeak} min</TableCell>
                                    <TableCell>{item.hOffPeak}h & {item.mOffPeak} min</TableCell>
                                    <TableCell>{item.hDay}h & {item.mDay} min</TableCell>
                                </TableRow>))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination/>
                
            </Paper>

            
            
        </div>
    )
}
