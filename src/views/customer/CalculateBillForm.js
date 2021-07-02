import React, {useState, useEffect} from 'react'
import { Grid, TextField } from '@material-ui/core';

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

    return (
        <div>
            <h1> Hi babala </h1>
            <form>
            
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        TextField id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        value={values.fullName}
                    />
                    <TextField
                        TextField id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        value={values.email}
                    />
                </Grid>
            </Grid>
                           
            </form>
        </div>
        
    )
}
