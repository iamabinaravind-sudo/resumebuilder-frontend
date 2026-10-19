
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Modal,
} from "@mui/material";
import { editResumeAPI } from "../services/apiServices";

function Edit({ resume, setResume }) {
  const [open, setOpen] = useState(false);
  const [resume, setResume] = useState({});

  useEffect(() => {
    if (resume) {
      setResume({ ...resume });
    }
  }, [resume]);

  const handleOpen = () => {
    setResume({ ...resume });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateResume = async() => 
    {

      const response= await editResumeAPI(resume.id,resume)
      console.log(response);
      
    
    };



  return (
    <>
      <Button onClick={handleOpen}>Edit</Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "550px",
            maxWidth: "90%",
            maxHeight: "90vh",
            overflowY: "auto",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "4px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#684f56",
              color: "white",
              padding: "14px",
              marginBottom: "25px",
            }}
          >
            <Typography variant="h6">
              Edit Resume Details
            </Typography>
          </Box>

          {/* Personal Details */}

          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Personal Details
          </Typography>

          <TextField
            label="Full Name"
            name="fullName"
            value={resume.fullName || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                fullName: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Location"
            name="location"
            value={resume.location || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                location: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            select
            label="Choose Job Title"
            name="jobTitle"
            value={resume.jobTitle || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                jobTitle: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
          >
            <MenuItem value="Frontend Developer">
              Frontend Developer
            </MenuItem>

            <MenuItem value="UI/UX Designer">
              UI/UX Designer
            </MenuItem>

            <MenuItem value="Data Analyst">
              Data Analyst
            </MenuItem>

            <MenuItem value="Backend Developer">
              Backend Developer
            </MenuItem>
          </TextField>

          {/* Contact Details */}

          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Contact Details
          </Typography>

          <TextField
            label="Email"
            name="email"
            value={resume.email || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                email: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Contact Number"
            name="phone"
            value={resume.phone || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                phone: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="LinkedIn Link"
            name="linkedin"
            value={resume.linkedin || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                linkedin: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="GitHub Link"
            name="github"
            value={resume.github || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                github: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
          />

          {/* Educational Details */}

          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Educational Details
          </Typography>

          <TextField
            label="Degree"
            name="degree"
            value={resume.degree || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                degree: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="College / University"
            name="college"
            value={resume.college || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                college: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Year of Graduation"
            name="year"
            value={resume.year || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                year: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
          />

          {/* Technical Skills */}

          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Technical Skills
          </Typography>

          <TextField
            label="Skills"
            name="skills"
            value={
            resume.skills || ""
            }
            onChange={(e) =>
              setResume({
                ...resume,
                skills: e.target.value,
              })
            }
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
          />

          {/* Summary */}

          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Summary
          </Typography>

          <TextField
            label="Professional Summary"
            name="summary"
            value={resume.summary || ""}
            onChange={(e) =>
              setResume({
                ...resume,
                summary: e.target.value,
              })
            }
            multiline
            rows={4}
            variant="standard"
            fullWidth
            sx={{ mb: 3 }}
          />

          {/* Buttons */}

          <Button
            variant="contained"
            onClick={handleUpdate}
            sx={{
              backgroundColor: "#684f56",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#563f46",
              },
            }}
          >
            UPDATE CV
          </Button>

          <Button onClick={handleUpdateResume} sx={{ ml: 2 }}>
            CANCEL
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;
