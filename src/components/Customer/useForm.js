import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function useForm(initialFvalues, validateOnChange=false , validate) {

    const [values, setValues] = useState(initialFvalues);
    const [errors, setErrors] = useState ({});

    const handleInputChange = e =>{
        const { name, value} = e.target
        console.log(name);
        console.log(value);
      
        setValues({
            ...values,
            [name] : value
        })
        if(validateOnChange)
         validate({[name] : value})
    }

    const resetForm = () => {
      setValues(initialFvalues);
      setErrors({ })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm


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
  const {childern, ...other} = props;
    return (
           <form className = {classes.root} noValidate autoComplete="off">
            {props.children}
           </form>
        
    )
}

