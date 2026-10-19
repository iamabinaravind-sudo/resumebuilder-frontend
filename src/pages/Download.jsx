import React from 'react'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Download() {


 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
  

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "55px",
            fontWeight: "bold",
            mt: 8,
            mb: 8
          }}
        >
         All Downloaded Resume Details
        </Typography>



        <Typography
          sx={{
            fontSize: "30px",
            lineHeight: 1.6,
            mt:10,
            mb: 8
          }}
        >
         Total downloaded resume from our site is 10
        </Typography>

        
<Button variant="contained" onClick={handleOpen}>Viewchart</Button>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
        Resume Download count by job role
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Graph
          </Typography>
        </Box>
      </Modal>


<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 4,
          width: 400,
          height: 400,
        },
      }}
    >
    <Paper elevation={3} />
     <Paper elevation={3} />
      <Paper elevation={3} />
    </Box>

    </div>
  )
}

export default Download
