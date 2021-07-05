import React from 'react'
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';

export default function InputTxt(props) {

    const { id, name, label, type, value, error=null, onChange, unit } = props;
    return (
        <TextField
            id={id}
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true, helperText:error})}
            InputProps={{
              endAdornment: <InputAdornment position="end">{ unit }</InputAdornment>,
            }}
            
          />
    )
}
