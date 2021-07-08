import { DialogTitle } from '@material-ui/core';
import React from 'react'
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from 'bootstrap';


const useStyles = makeStyles(theme => ({
    dialogWrapper : {
        padding : theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle:{
        paddingRight : '0px'
    }
}))

export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
    <Dialog open={openPopup} maxWidth="md" classes={{paper : classes.dialogWrapper}}>
            <DialogTitle classname={classes.dialogTite}>
                <div style ={{display:'flex'}}>
                    <Typography variant ="h6" compnent="div" style ={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <button type="button" class="btn btn-danger" onClick={() => setOpenPopup(false)} >X</button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
