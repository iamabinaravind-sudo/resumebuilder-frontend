import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

import jobRoles from "../assets/jobRoles.json";
import jobSkills from "../assets/jobSkills.json";
import summaries from "../assets/summaries.json";
import { addResumeAPI } from "../services/apiServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Contact Details",
  "Educational Details",
  "Review and Submit",
];

function ResumeInput({ resumeDetails, setResumeDetails }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const navigate = useNavigate();

  const details = resumeDetails || {};

  const handleChange = (field, value) => {
    setResumeDetails((prev) => ({
      ...(prev || {}),
      [field]: value,
    }));

    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const renderFormContent = (stepCount) => {
    switch (stepCount) {
      case 0:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Personal Details
            </Typography>

            <TextField
              label="Name"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.fullName ?? ""}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />

            <TextField
              label="Place"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.location ?? ""}
              onChange={(e) => handleChange("location", e.target.value)}
            />

            <FormControl variant="standard" fullWidth margin="normal">
              <InputLabel id="job-label">Job Role</InputLabel>

              <Select
                labelId="job-label"
                id="job"
                value={details.job ?? ""}
                onChange={(e) => handleChange("job", e.target.value)}
                label="Job Role"
              >
                {jobRoles.jobRoles.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Contact Details
            </Typography>

            <TextField
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.email ?? ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <TextField
              label="Contact Number"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.phone ?? ""}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <TextField
              label="LinkedIn Link"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.linkedin ?? ""}
              onChange={(e) => handleChange("linkedin", e.target.value)}
            />

            <TextField
              label="GitHub Link"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.github ?? ""}
              onChange={(e) => handleChange("github", e.target.value)}
            />
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Educational Details
            </Typography>

            <TextField
              label="Bachelor's Degree"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.degree ?? ""}
              onChange={(e) => handleChange("degree", e.target.value)}
            />

            <TextField
              label="College/University Name"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.college ?? ""}
              onChange={(e) => handleChange("college", e.target.value)}
            />

            <TextField
              label="Year of Graduation"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.year ?? ""}
              onChange={(e) => handleChange("year", e.target.value)}
            />
          </Box>
        );

      case 3:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Review and Submit
            </Typography>

            <Typography sx={{ mb: 2 }}>
              Review your details before submitting your resume.
            </Typography>

            <Typography variant="h6">Personal Details</Typography>
            <Typography>Name: {details.fullName ?? ""}</Typography>
            <Typography>Place: {details.location ?? ""}</Typography>
            <Typography>Job Role: {details.job ?? ""}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Contact Details
            </Typography>
            <Typography>Email: {details.email ?? ""}</Typography>
            <Typography>Phone: {details.phone ?? ""}</Typography>
            <Typography>LinkedIn: {details.linkedin ?? ""}</Typography>
            <Typography>GitHub: {details.github ?? ""}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Educational Details
            </Typography>
            <Typography>Degree: {details.degree ?? ""}</Typography>
            <Typography>College: {details.college ?? ""}</Typography>
            <Typography>Graduation Year: {details.year ?? ""}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Skills
            </Typography>
            <Typography>
              {Array.isArray(details.skills) ? details.skills.join(", ") : ""}
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Summary
            </Typography>
            <Typography>{details.summary ?? ""}</Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  const handleGenerateSummary = () => {
    const selectedJob = details.job;

    const skills = jobSkills[selectedJob] ?? [];
    const summary = summaries[selectedJob] ?? "";

    setResumeDetails((prev) => ({
      ...(prev || {}),
      skills,
      summary,
    }));

    setErrorMessage("");
    setActiveStep(3);
  };

  const handleSubmitResume = async () => {
   
    const response= await addResumeAPI(resumeDetails)
console.log(response);

    const id= response.data.id

    if (loading) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await addResumeAPI({
        ...details,
        skills: details.skills ?? jobSkills[details.job] ?? [],
        summary: details.summary ?? summaries[details.job] ?? "",
      });

      Swal.fire({
        title: "Good job!",
        text: "resume submitted successfully",
        icon: "success",
      });

      setTimeout(() => {
        navigate(`/resumes/${id}`);
      }, 3000);
    } catch (error) {
      console.error("Error submitting resume:", error);

      if (error.response) {
        setErrorMessage(
          `Submission failed (${error.response.status}): ${
            error.response.data?.message || "Please check your API endpoint."
          }`,
        );
      } else if (error.request) {
        setErrorMessage(
          "Cannot connect to the server. Please start JSON Server and try again.",
        );
      } else {
        setErrorMessage(error.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ width: "100%", p: 3, boxSizing: "border-box" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {errorMessage && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {errorMessage}
        </Alert>
      )}

      {successMessage && (
        <Alert severity="success" sx={{ mt: 3 }}>
          {successMessage}
        </Alert>
      )}

      {activeStep === steps.length ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            All Steps Completed
          </Typography>

          <Typography>
            Review your information and submit your resume.
          </Typography>

          <Button
            variant="contained"
            onClick={handleSubmitResume}
            disabled={loading || Boolean(successMessage)}
            sx={{ mt: 2, mr: 2 }}
          >
            {loading ? "Submitting..." : "Submit Resume"}
          </Button>

          <Button variant="outlined" onClick={handleReset} sx={{ mt: 2 }}>
            Start Again
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Step {activeStep + 1} of {steps.length}
          </Typography>

          {renderFormContent(activeStep)}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === 2 ? (
              <Button variant="contained" onClick={handleGenerateSummary}>
                Generate AI Skills and Summary
              </Button>
            ) : activeStep === steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Finish
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Paper>
  );
}

export default ResumeInput;
