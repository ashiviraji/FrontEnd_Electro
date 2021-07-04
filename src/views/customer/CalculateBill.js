import React from 'react';
import CalculateBillForm from './CalculateBillForm';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    pageContent : {
        margin : theme.spacing(5),
        padding : theme.spacing(3)
    }
  }));

export default function CalculateBill() {

    const classes = useStyles();

    return (
        <div>

            <Paper className = {classes.pageContent}>
                <CalculateBillForm/>
            </Paper>
            
        </div>
    )
}
