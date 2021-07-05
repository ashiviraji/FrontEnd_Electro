import React from 'react'
import FormControl from "@material-ui/core/FormControl";
import { FormLabel } from "@material-ui/core";
import { RadioGroup as MuiRadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";


export default function RadioGroup(props) {

    const {name, label, value, error, onChange, items} = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup 
              row
              name= {name}
              value={value}
              onChange={onChange}
              {...(error && {error:true, helperText:error})}
            >
              {
                items.map(
                  items => (
                    <FormControlLabel key={items.id} value={items.id} control={<Radio />} label={items.title} />
                  )
                )
              }
              
            </MuiRadioGroup>
          </FormControl>
    )
}
