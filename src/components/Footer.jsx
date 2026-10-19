import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 5
      }}
    >
      <Container>

        <Grid container spacing={5}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              AI rBuilder
            </Typography>

            <Typography>
              An AI rBuilder suggests job-specific keywords,
              professional summaries, and skill recommendations
              to make the resume more effective and ATS friendly.
              The main goal is to simplify the resume creation
              process and help job seekers build professional resumes.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              Contact Us
            </Typography>

            <Typography sx={{ mb: 1 }}>
              Email: resumebuilder@gmail.com
            </Typography>

            <Typography sx={{ mb: 2 }}>
               9087654321
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 1 }}
            >
              Connect With Us
            </Typography>

            <Typography>
              Instagram | Facebook | GitHub
            </Typography>
          </Grid>

        </Grid>

        <Box
          sx={{
            borderTop: '1px solid gray',
            mt: 4,
            pt: 2,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2">
            Designed & built with  using React
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}

export default Footer