import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#a7bcff',
  border: '2px solid #5d5b8d',
  boxShadow: 24,
  p: 4,
  color:'#5d5b8d',
};

export default function ProfileModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
          setOpen(true)
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
       onClick={handleOpen}
       sx={{color:"#ddddf7"}}
      >
        {props.displayName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-photoURL"
        aria-describedby="modal-modal-displayName"
      >
        <Box sx={style}>
          <Typography id="modal-modal-photoURL" variant="h6" component="h2">
             <img 
              src={props.data.photoURL} 
              width={300}
              height={400}
              align-items="center"

              />
          </Typography>
          <Typography 
            id="modal-modal-displayName" 
            sx={{ mt: 2 , fontSize:"large" }}>
                    <span>username: </span>
                    <span>
                        {props.displayName}
                    </span>
          </Typography>
          <Typography 
            id="modal-modal-email" 
            sx={{ mt: 2 , fontSize:"large" }}>
                    <span>
                      {props.data.email ? "email:  ": ""}
                   </span>
                   <span>
                       {props.data.email ? props.data.email: ""}
                   </span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
