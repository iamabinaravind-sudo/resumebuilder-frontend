
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ResumeInput from '../components/ResumeInput';
import Preview from '../components/Preview';

function Info() {
  const [resumeDetails, setResumeDetails] = React.useState({
    fullName: '',
    location: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    degree: '',
    college: '',
    year: '',
    skills: [],
    summary: ''
  });

  return (
    <Box sx={{ mt: 10, p: 3 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="flex-start"
      >
        <Box sx={{ flex: 1, width: '100%', minWidth: 0 }}>
          <ResumeInput
            resumeDetails={resumeDetails}
            setResumeDetails={setResumeDetails}
          />
        </Box>

        <Box sx={{ flex: 1, width: '100%', minWidth: 0 }}>
          <Preview resumeDetails={resumeDetails} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Info;
