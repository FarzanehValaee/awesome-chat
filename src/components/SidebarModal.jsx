import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import add from '../assets/img/add.png';
import Sidebar from './Sidebar';


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

export default function SidebarModal(props) {
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
        <img src={add} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-photoURL"
        aria-describedby="modal-modal-displayName"
      >
        <Box 
          sx={{}}
          >

                    <Sidebar />

        </Box>
      </Modal>
    </div>
  );
}
