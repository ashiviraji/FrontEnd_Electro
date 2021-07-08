import { DialogTitle } from '@material-ui/core';
import React from 'react'
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    dialogWrapper : {
        padding : theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}))

export default function Popup(props) {
    const { title, children, openPopup, setPopup } = props;
    const classes = useStyles();
    return (
    <Dialog open={openPopup} maxWidth="md" classes={{paper : classes.dialogWrapper}}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
