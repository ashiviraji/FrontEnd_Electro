import React, {useState, setValues} from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function useForm(initialFvalues) {

    const [values, setValues] = useState(initialFvalues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e =>{
        const { name, value} = e.target

        console.log(name);
        console.log(value);

        setValues({
            ...values,
            [name] : value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange

    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root": {
        width: "80%",
        margin: theme.spacing(1),
      },
    },
  }));

export function Form(props) {
    const classes = useStyles();
    const {children, ...other} = props;
    return (
           <form className = {classes.root} noValidate autoComplete="off" {...other}>
            {props.children}
           </form>
        
    )
}

