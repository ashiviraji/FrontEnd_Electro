import React from 'react'
import { Alert } from 'react-bootstrap';
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root:{
        top: theme.spacing(9)
    }
}))

export default function Notification(props) {

    const {notify, setNotify} = props;
    const classes = useStyles()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }
        setNotify({
            ...notify,
            isOpen:false
        })
    }
    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{vertical:'top', horizontal:'center'}}
            onClose={handleClose}
        >
        <Alert variant={notify.variant} onClose={handleClose}>
            {notify.message}
        </Alert>
        </Snackbar>
    )
}
