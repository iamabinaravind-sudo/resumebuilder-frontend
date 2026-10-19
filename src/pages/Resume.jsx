import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

function Resume() {
  return (
    <Box sx={{ padding: 5 }}>

      <Typography variant="h4" align="center">
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      <Grid container spacing={5} justifyContent="center" sx={{ marginTop: 3 }}>

        <Grid size={4}>
          <Paper sx={{ width: 390,
            height: 290,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "4px",}} elevation={3}>
           
            <Typography>
              Step 1
            </Typography>
          </Paper>
        </Grid>

        <Grid size={4}>
          <Paper sx={{ width: 390,
            height: 290,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "4px",}} elevation={3}>

            <Typography>
              Step 2
            </Typography>
          </Paper>
        </Grid>

      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button variant="contained">
          LET'S START
        </Button>
      </Box>

    </Box>
  )
}

export default Resume