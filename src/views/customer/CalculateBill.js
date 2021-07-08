import React, { useState } from 'react';
import CalculateBillForm from './CalculateBillForm';
import { Paper, makeStyles } from '@material-ui/core';
import useTable  from '../../components/Customer/useTable';
import * as DeviceBill from './DeviceBill';
import { TableBody } from '@material-ui/core'
import { TableCell } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import Controls from '../../components/Customer/bill_control/Controls';
import { TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import '../../assets/css/Customer/billCalculate.css'

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
    const [filterFn, setFilterFn] = useState({fn:items => {return items;} })
    
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records,headCells,filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => { 
                        if (target.value == "")
                            return items;
                        else
                            return items.filter(x => x.appliance.includes(target.value))
                            
                    
                    }
        })
    }

    return (
        <div>
            

            <Paper className = {classes.pageContent}>
            <h2>Add Device</h2>
                <CalculateBillForm/>
                
            </Paper>

            <Paper className = {classes.pageContent}>
            <h2>Your Device Data</h2>
            <Toolbar>
            <TextField
  label="With normal TextField"
  onChange = {handleSearch}
  InputProps={{
    endAdornment: (
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
      
     )
    }}
/>           
            </Toolbar>
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
