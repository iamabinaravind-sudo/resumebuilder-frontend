import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Button,
  Box,
} from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import Edit from "../Components/Edit";
import { viewResumeAPI } from "../services/apiServices";

function View() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resume, setResume] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const viewResume = async () => {
      try {
        const response = await viewResumeAPI(id);
        setResume(response.data);
      } catch (error) {
        console.error("Error fetching resume:", error);
      } finally {
        setLoading(false);
      }
    };

    viewResume();
  }, [id]);

  if (loading) {
    return <Typography>Loading resume...</Typography>;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          padding: "10px",
        }}
      >
        <Button variant="text">Download CV</Button>

        <Edit
          resume={resume}
          setResume={setResume}
        />

        <Button variant="text" onClick={() => navigate("/")}>
          Home
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            padding: "30px",
            width: "600px",
            maxWidth: "100%",
            overflowWrap: "anywhere",
          }}
        >
          <Typography variant="h3">
            {resume.fullName || "Name"}
          </Typography>

          <Typography variant="body1">
            {resume.jobTitle || ""}
          </Typography>

          <Typography variant="body1">
            {resume.phone || "Phone"}
          </Typography>

          <Typography variant="body1">
            {resume.email || "Email"}
          </Typography>

          <Typography variant="body1">
            {resume.linkedin || "LinkedIn"}
          </Typography>

          <Typography variant="body1">
            {resume.github || "GitHub"}
          </Typography>

          <Typography variant="body1">
            {resume.location || "Location"}
          </Typography>

          <hr />

          <Typography variant="h4" sx={{ mb: 1 }}>
            Professional Summary
          </Typography>

          <Typography variant="body1">
            {resume.summary || "Professional Summary"}
          </Typography>

          <hr />

          <Typography variant="h4" sx={{ mb: 1 }}>
            Technical Skills
          </Typography>

          <Typography variant="body1">
            {resume.skills || "Skills"}
          </Typography>

          <hr />

          <Typography variant="h4" sx={{ mb: 1 }}>
            Education
          </Typography>

          <Typography variant="body1">
            {resume.degree || "Degree"}
          </Typography>

          <Typography variant="body1">
            {resume.college || "College"}
          </Typography>

          <Typography variant="body1">
            {resume.year || "Graduation Year"}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default View;