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

    const handleInputChange = e =>{
        const { name, value} = e.target
        setValues({
            [name] : value
        })
    }

    return (
        <div>
            <h1> Bill Calculation </h1>
            <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                
                    <TextField
                        TextField id="standard-basic" 
                        label="Full Name"
                        name = "fullName"
                        value={values.fullName}
                        onChange = {handleInputChange}
                    />
                    <TextField
                        TextField id="standard-basic" 
                        label="Email"
                        name = "email"
                        value={values.email}
                        onChange = {handleInputChange}
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
