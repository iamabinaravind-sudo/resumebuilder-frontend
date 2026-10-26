import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { getDownloads } from '../services/apiServices';
import { deleteDownloadsAPI } from '../services/apiServices';
import { Pie, PieChart, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

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

function Download({ isAnimationActive = true }) {
  const [open, setOpen] = useState(false);
  const [allDownloads, setAllDownloads] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getDownload = async () => {
    try {
      const response = await getDownloads();

      console.log(response.data);
      setAllDownloads(response.data);
    } catch (error) {
      console.error('Failed to fetch downloads:', error);
    }
  };

  useEffect(() => {
    getDownload();
  }, []);


const deleteDownloads= async (id)=>{
try{
const response= await deleteDownloadsAPI(id)
console.log(response);
getDownload()

}
catch(error){
console.log(error);

}

}

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              backgroundColor: 'gray',
              textAlign: 'center',
              p: 1,
            }}
          >
            Resume download count by job role
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Graph
          </Typography>
           <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'red',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={2} />
      {/* <RechartsDevtools /> */}
    </PieChart>
        </Box>
      </Modal>

      <Typography
        sx={{
          textAlign: 'left',
          fontSize: '30px',
          fontWeight: 'bold',
          mt: 8,
          mb: 8,
          px: 5,
        }}
      >
        All downloaded resumes here
      </Typography>

      <Typography
        sx={{
          textAlign: 'left',
          fontSize: '30px',
          mt: 8,
          mb: 8,
          px: 5,
        }}
      >
        Total number of resumes downloaded from our site: {allDownloads.length}
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#80502f',
          color: 'white',
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          fontSize: '14px',
          px: 2,
          py: 1,
          borderRadius: '6px',
          '&:hover': {
            backgroundColor: '#623b23',
          },
        }}
        onClick={handleOpen}
      >
        View Chart
      </Button>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > div': {
            m: 5,
            width: 400,
            minHeight: 200,
            py: '10px',
          },
        }}
      >
        {allDownloads.length > 0 ? (
          allDownloads.map((item) => (
            <div key={item.id}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <img
                  src={item.imgUrl}
                  width="300"
                  alt="Downloaded resume"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  
                />

<Button
  variant="contained"
  color="error"
  onClick={() => deleteDownloads(item.id)}
>
  Delete
</Button>

              </Paper>


            </div>
          ))
        ) : (
          <Typography sx={{ m: 5 }}>
            No downloaded resumes found.
          </Typography>
        )}
      </Box>
    </div>
  );
}

export default Download;