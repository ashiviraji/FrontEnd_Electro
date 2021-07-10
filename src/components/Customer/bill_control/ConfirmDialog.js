import { DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core'
import { Dialog } from '@material-ui/core'
import React from 'react'
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core'
import { NotListedLocation } from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    dialog:{
        padding:theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    },
    DialogContent: {
        textAlign:'center'
    },
    DialogActions:{
        justifyContent:'center'
    },
    Dialogtitle:{
        textAlign:'center'
    },
    titleIcon: {
        backgroundColor: "#ff7dad",
        color: theme.palette.secondary.main,
        '& .MuiSvgIcon-root' : {
            fontSize: '6rem',
        }
    }
}))


export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog} = props;
    const classes = useStyle()

    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.Dialogtitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocation/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.DialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.DialogActions}>
            <Button variant="secondary" onClick={()=> setConfirmDialog({ ...confirmDialog, isOpen:false})}>No</Button>
            <Button variant="danger" onClick = {confirmDialog.onConfirm}>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}
