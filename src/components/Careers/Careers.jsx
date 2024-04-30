// src/components/JobListing.js
import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, TextField, Button, Checkbox, FormControlLabel, FormGroup, Box, Alert, Grid } from '@mui/material';
import axios from 'axios';
import './Careers.css';

  

const jobs = [
  {
    "id": "1",
    "title": "Home Health Aide",
    "location": "Carrollton, TX",
    "category": "Nursing",
    "description": "Providing patient care and support."
  },
  {
    "id": "2",
    "title": "RN",
    "location": "Carrollton, TX",
    "category": "Clinical",
    "description": "Assist in patient assessment and treatment."
  },
  {
    "id": "3",
    "title": "Lvn Physical Therapist",
    "location": "Carrollton, TX",
    "category": "Administration",
    "description": "Manage healthcare facility operations."
  },
  {
    "id": "4",
    "title": "Physical Therapist Assistant",
    "location": "Carrollton, TX",
    "category": "Pharmacy",
    "description": "Provide and manage patient medication."
  },
  {
    "id": "5",
    "title": "Occupational Therapist",
    "location": "Carrollton, TX",
    "category": "Rehabilitation",
    "description": "Assist patients in physical recovery."
  },
  {
    "id": "6",
    "title": "Speech Therapist",
    "location": "Carrollton, TX",
    "category": "Dental",
    "description": "Perform dental cleanings."
  },
  {
    "id": "7",
    "title": "Medical Social Worker",
    "location": "Carrollton, TX",
    "category": "Laboratory",
    "description": "Conduct tests and provide lab results."
  }
]

const Careers = () => {

  const [selectedJobId, setSelectedJobId] = useState(null);

  const [applicant, setApplicant] = useState({
    firstName: '', // Added field for first name
    lastName: '', // Added field for last name
    email: '',
    phone: '',
    address: '', // Added field for address
    desiredPay: '', // Added field for desired pay
  });

  const [validationMessage, setValidationMessage] = useState('');

  // New state to disable the submit button
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  // Using an object to manage the disabled state of each job's apply button
  const [isApplyDisabled, setIsApplyDisabled] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setApplicant(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleApplyClick = (jobId) => {
  
    // Check if the user is selecting or deselecting the job
  if (selectedJobId === jobId) {
    // Deselecting the job. Enable its Apply button and clear the selection
    setIsApplyDisabled(prevState => ({ ...prevState, [jobId]: false }));
    setSelectedJobId(null);
  } else {
    // Selecting a new job. First, ensure all other buttons are enabled, then disable the current job's button
    const newIsApplyDisabled = Object.keys(isApplyDisabled).reduce((acc, curr) => {
      acc[curr] = false; // Enable all buttons
      return acc;
    }, {});

    // Now, disable the button for the newly selected job
    newIsApplyDisabled[jobId] = true;

    // Update state
    setIsApplyDisabled(newIsApplyDisabled);
    setSelectedJobId(jobId);

     }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitDisabled(true); // Disable the submit button
    // Basic Validation
    if (!applicant.firstName || !applicant.lastName || !applicant.email || !applicant.phone || !applicant.address || !applicant.desiredPay) {
      setValidationMessage('All fields are required.');
      setIsSubmitDisabled(false); // Re-enable the submit button if submission failed
      return;
    }
  
    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(applicant.email)) {
      setValidationMessage('Invalid email format.');
      setIsSubmitDisabled(false); // Re-enable the submit button if submission failed
      return;
    }
  
    // Prepare FormData object for Netlify
    const formData = new FormData();
    formData.append('form-name', 'application');
    Object.keys(applicant).forEach(key => {
      formData.append(key, applicant[key]);
    });
  
    try {
      const response = await axios({
        method: 'post',
        url: '/', // Assuming you're submitting to the same URL; adjust if needed
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
  
      // Success
      console.log('Form submitted successfully:', response);
      setApplicant({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        desiredPay: '',
      });
      setValidationMessage('Application submitted successfully!');

      // After 3 seconds, close the form and re-enable buttons
      setTimeout(() => {
      setSelectedJobId(null); // Close the form
      setIsSubmitDisabled(false); // Re-enable the submit button
      setIsApplyDisabled(prevState => ({...prevState, [selectedJobId]: false})); // Re-enable the apply button for this job
      setValidationMessage(''); // Optional: Clear the validation message
    }, 2000);
  
    } catch (error) {
      console.error('Form submission error:', error);
      setValidationMessage('An error occurred during submission.');
    }
  };
  



  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  // Update the handleInputChange for search and category selection
  // ... existing handleInputChange code
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    // Reset the category filters whenever the search input is changed
    setSelectedCategories(new Set());
  };

  const handleCategoryChange = event => {
    const category = event.target.value;
    setSelectedCategories(prev => {
      const newCategories = new Set(prev);
      if (newCategories.has(category)) {
        newCategories.delete(category);
      } else {
        newCategories.add(category);
      }
      return newCategories;
    });
    // Reset the search term whenever a category filter changes
    setSearchTerm('');
  };

  const getCategories = (jobs) => {
    const categories = new Set();
    jobs.forEach(job => {
      categories.add(job.category);
    });
    return Array.from(categories);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.size === 0 || selectedCategories.has(job.category);
    return matchesSearchTerm && matchesCategory;
  });


  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Open Positions
      </Typography>
      <TextField
        fullWidth
        label="Search job titles..."
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        margin="normal"
      />
      <FormGroup row>
        {getCategories(jobs).map(category => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.has(category)}
                onChange={handleCategoryChange}
                value={category}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
      <Grid container spacing={2}>
        {filteredJobs.map(job => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5">{job.title}</Typography>
                <Typography color="textSecondary">{job.location}</Typography>
                <Typography>{job.description}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isApplyDisabled[job.id]} // Apply the disabled state
                  onClick={() => handleApplyClick(job.id)}
                >
                  Apply
                </Button>
                {selectedJobId === job.id && (
                  <Box component="form" 
                  onSubmit={handleSubmit} 
                  noValidate 
                  data-netlify="true" 
                  name="application"  // This name attribute is essential for Netlify to identify the form
                  id={`job-application-${job.id}`} >
                     {/* Netlify's hidden input for form name */}
                    <input type="hidden" name="form-name" value="application" />
                    {/* Netlify's honeypot field for spam filtering (optional but recommended) */}
                    <input name="bot-field" hidden />
                    {validationMessage && (
                      <Alert severity="info">{validationMessage}</Alert>
                    )}
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      value={applicant.firstName}
                      onChange={handleInputChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      value={applicant.lastName}
                      onChange={handleInputChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      name="email"
                      value={applicant.email}
                      onChange={handleInputChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Phone"
                      variant="outlined"
                      name="phone"
                      value={applicant.phone}
                      onChange={handleInputChange}
                      margin="normal"
                      type="number"
                    />
                    <TextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      name="address"
                      value={applicant.address}
                      onChange={handleInputChange}
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Desired Pay"
                      variant="outlined"
                      name="desiredPay"
                      value={applicant.desiredPay}
                      onChange={handleInputChange}
                      margin="normal"
                      type="number"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      disabled={isSubmitDisabled} // Apply the disabled state
                      sx={{ mt: 2 }}
                    >
                      Submit Application
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Careers;
