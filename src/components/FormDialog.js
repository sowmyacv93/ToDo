import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab:{
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(10),
  }
}));
export default function FormDialog({onSubmit}) {
  const [open, setOpen] = React.useState(false);
  const[note,setNote] = React.useState({
    title:'',
    details:''
  });
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    onSubmit(note.title,note.details);
    setOpen(false);
  };

  return (
    <div className={classes.fab}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon/>
      </Fab>
      <Dialog maxWidth ="sm" fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add note start here...
          </DialogContentText>
          <TextField
          onChange={(e)=>setNote({...note,title:e.target.value})}
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
          />
          <TextField
          onChange={(e)=>setNote({...note,details:e.target.value})}
           
            multiline
            rows={4}
            margin="dense"
            id="details"
            label="Details"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}