import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 3, md: 10 }
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '40px', md: '65px' },
              mb: 3
            }}
          >
            Designed To Get Hired.
            <br />
            Your Skills, Your Story,
            <br />
            Your Next Job - All In One.
          </Typography>
<Link to="/resume-details">
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              px: 3,
              py: 1.5
            }}
          >
            Make Your Resume With AI
          </Button>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: 'white',
          color: 'black',
          py: 8,
          px: { xs: 3, md: 10 }
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 5
          }}
        >
          What's AI rBuilder
        </Typography>

        <Grid container spacing={5} alignItems="center">

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography paragraph>
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence.
            </Typography>

            <Typography paragraph>
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS friendly.
            </Typography>

            <Typography paragraph>
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes.
            </Typography>

            <Typography paragraph>
              Users can edit their content, preview their resume and download
              it in formats such as PDF.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9SGaJb6xC5pDURXmHN_cRCe3eZzmwdzeTlK2onCpAsaT35heB-nGvOs&s=10"
              sx={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover'
              }}
            />
          </Grid>

        </Grid>
      </Box>

      <Box
        component="img"
        src="https://media.istockphoto.com/id/2220840528/photo/businesswoman-speaking-at-a-conference-using-a-microphone.jpg?s=612x612&w=0&k=20&c=jNKxl9XhOJNFEyfspdv8714DnL1ws5t2g3LUB4usmpk="
        sx={{
          width: '100%',
          height: { xs: '250px', md: '400px' },
          objectFit: 'cover',
          display: 'block'
        }}
      />

      <Box
        sx={{
          backgroundColor: 'white',
          color: 'black',
          py: 8,
          px: { xs: 3, md: 10 }
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 'bold',
            mb: 5
          }}
        >
          Testimony
        </Typography>

        <Grid container spacing={5} alignItems="center">

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2
              }}
            >
              Trusted by professionals worldwide.
            </Typography>

            <Typography paragraph>
              At rBuilder, we don't just help you create resumes — we help you
              land the job.
            </Typography>

            <Typography paragraph>
              Whether you're a seasoned professional or just starting out,
              our tools are designed to get results.
            </Typography>

            <Typography paragraph>
              Join thousands of job seekers who've fast-tracked their careers
              with a resume that truly stands out.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>

            </Grid>
          </Grid>

        </Grid>
      </Box>

    </div>
  )
}

export default Home