// src/components/JobListing.js
import React, { useState } from 'react';
import {Container, Typography, Card, CardContent, TextField, Button, Checkbox, FormControlLabel, FormGroup, Box, Alert,Grid} from '@mui/material';
import './Careers.css';



const jobs = [
  {
    "id": "1",
    "title": "Registered Nurse",
    "location": "New York, NY",
    "category": "Nursing",
    "description": "Providing patient care and support."
  },
  {
    "id": "2",
    "title": "Medical Assistant",
    "location": "Los Angeles, CA",
    "category": "Clinical",
    "description": "Assist in patient assessment and treatment."
  },
  {
    "id": "3",
    "title": "Healthcare Administrator",
    "location": "Chicago, IL",
    "category": "Administration",
    "description": "Manage healthcare facility operations."
  },
  {
    "id": "4",
    "title": "Pharmacist",
    "location": "Houston, TX",
    "category": "Pharmacy",
    "description": "Provide and manage patient medication."
  },
  {
    "id": "5",
    "title": "Physical Therapist",
    "location": "Philadelphia, PA",
    "category": "Rehabilitation",
    "description": "Assist patients in physical recovery."
  },
  {
    "id": "6",
    "title": "Dental Hygienist",
    "location": "Phoenix, AZ",
    "category": "Dental",
    "description": "Perform dental cleanings."
  },
  {
    "id": "7",
    "title": "Clinical Laboratory Technician",
    "location": "San Antonio, TX",
    "category": "Laboratory",
    "description": "Conduct tests and provide lab results."
  },
  {
    "id": "8",
    "title": "Radiologic Technologist",
    "location": "San Diego, CA",
    "category": "Radiology",
    "description": "Perform diagnostic imaging examinations."
  },
  {
    "id": "9",
    "title": "Health Information Technician",
    "location": "Dallas, TX",
    "category": "Informatics",
    "description": "Manage patient health information."
  }
]

const Careers = () => {
 
  const [selectedJobId, setSelectedJobId] = useState(null);

  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });

  const [validationMessage, setValidationMessage] = useState('');


  // Update applicant state
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "resume") {
      setApplicant(prevState => ({
        ...prevState,
        resume: files[0], // Only single file upload is considered here
      }));
    } else {
      setApplicant(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };


  // If the current job is already selected, deselect it. Otherwise, select it.
const handleApplyClick = (jobId) => {
  setSelectedJobId(prevSelectedJobId => (
    prevSelectedJobId === jobId ? null : jobId
  ));
};



  // Simple validation and submission logic
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!applicant.name || !applicant.email || !applicant.phone || !applicant.resume) {
      setValidationMessage('All fields are required.');
      return;
    }
    // Add more validations as required, e.g., for phone and resume

    console.log('Application submitted:', applicant);
    // Reset the form
    setApplicant({
      name: '',
      email: '',
      phone: '',
      resume: null,
    });
    setValidationMessage('Application submitted successfully!');
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
            onClick={() => handleApplyClick(job.id)}
          >
            Apply
          </Button>
          {selectedJobId === job.id && (
            <Box component="form" onSubmit={handleSubmit} noValidate>
              {validationMessage && (
                <Alert severity="info">{validationMessage}</Alert>
              )}
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                value={applicant.name}
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
              />
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ mt: 2 }}
              >
                Upload Resume
                <input
                  type="file"
                  hidden
                  name="resume"
                  onChange={handleInputChange}
                />
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
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
