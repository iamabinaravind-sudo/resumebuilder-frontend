import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Preview({ resumeDetails }) {
  return (
    <Paper sx={{ p: 3, width: '100%', maxWidth: 600 }}>

      <Typography variant="h4">
        {resumeDetails.fullName || 'Full Name'}
      </Typography>

      <Typography variant="h6">
        {resumeDetails.job || 'Job Title'}
      </Typography>

      <hr />

      <Typography>
        Phone: {resumeDetails.phone || 'Phone Number'}
      </Typography>

      <Typography>
        Email: {resumeDetails.email || 'Email Address'}
      </Typography>

      <Typography>
        Location: {resumeDetails.location || 'Location'}
      </Typography>

      <Typography>
        LinkedIn: {resumeDetails.linkedin || 'LinkedIn Link'}
      </Typography>

      <Typography>
        GitHub: {resumeDetails.github || 'GitHub Link'}
      </Typography>

      <hr />

      <Typography variant="h6">
        Professional Summary
      </Typography>

      <Typography>
        {resumeDetails.summary || 'Your summary'}
      </Typography>

      <hr />

      <Typography variant="h6">
        Technical Skills
      </Typography>

      <Typography>
        {Array.isArray(resumeDetails.skills)
          ? resumeDetails.skills.join(', ') || 'Your skills'
          : resumeDetails.skills || 'Your skills'}
      </Typography>

      <hr />

      <Typography variant="h6">
        Education
      </Typography>

      <Typography>
        Degree: {resumeDetails.degree || 'Your Degree'}
      </Typography>

      <Typography>
        College: {resumeDetails.college || 'College Name'}
      </Typography>

      <Typography>
        Graduation Year: {resumeDetails.year || 'Graduation Year'}
      </Typography>

    </Paper>
  );
}

export default Preview;
