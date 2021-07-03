import React, {useState, useEffect} from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialFvalues = {
    id : 0,
    fullName : "Seena",
    email : "email.com",
    mobile : ' ',
    city : ' ',
    gender : ' ',
    departmentId : ' ',
    hireDate: ' ',
    isPermenent : false,
}


export default function CalculateBillForm() {

    const [values, setValues] = useState(initialFvalues);
    const classes = useStyles();

    return (
        <div>
            <h1> Hi babala </h1>
            <form className={classes.root}>
            
            <Grid container>
                <Grid item xs={6}>
                
                    <TextField
                        TextField id="standard-basic" 
                        label="Full Name"
                        value={values.fullName}
                    />
                    <TextField
                        TextField id="standard-basic" 
                        label="Email"
                        value={values.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="standard-basic" label="Standard"  />

                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{shrink: true,}}
                    />
                </Grid>
                
            </Grid>
                           
            </form>
        </div>
        
    )
}
