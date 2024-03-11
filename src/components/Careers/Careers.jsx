import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import careers from '../../images/careers.png';
import './Careers.css';
function Careers() {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
  
    // Example validation for the email field
    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Email is not valid.";
    }
  
    // Add similar validation checks for other fields as needed
  
    setErrors(errors);
    return formIsValid;
  };
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    positionApplyingFor: '',
    availableStartDate: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
    alert('Please correct the errors before submitting.');
    return;
    }
    // Proceed with form submission logic here
    console.log(formData);
    alert('Application submitted successfully!');
  };


  // Dummy data for job openings
  const jobOpenings = [
    { title: 'Registered Nurse', description: 'Provide patient care and support.' },
    { title: 'Physical Therapist', description: 'Assist patients in physical recovery.' },
    { title: 'Medical Assistant', description: 'Manage clinical duties and patient care.' },
    { title: 'Healthcare Administrator', description: 'Oversee operations and services.' },
    // ... add more job openings as needed
  ];

  return (
    <Container className="my-5 career-page">

      <Row className="align-items-center my-5">
         <Col>
          <h2 className="text-center">Be a Part of Our Growing Family!</h2>
          <p>We are always looking to hire more professionals to join our team in the healthcare industry.</p>
          <Image src={careers} fluid className="mb-3"/>
          <p>Join us and make a difference in providing quality care to our community.</p>
          {/* Add more images and text as needed */}
        </Col>
        </Row>

        <Row className="job-openings-section my-5">
        <Col>
          <h3 className="text-center mb-4">Current Job Openings</h3>
          <ListGroup>
            {jobOpenings.map((job, index) => (
              <ListGroup.Item key={index} className="job-opening">
                <Card>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>{job.description}</Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
       
      <Row className="application-form-section my-5">
        <Col>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" name="firstName" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" name="lastName" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dateOfBirth" onChange={handleChange} />
            </Form.Group>
            
  
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">
              {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" name="phone" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPositionApplyingFor">
              <Form.Label>Position Applying For</Form.Label>
              <Form.Control type="text" placeholder="Position you are applying for" name="positionApplyingFor" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAvailableStartDate">
              <Form.Label>Available Start Date</Form.Label>
              <Form.Control type="date" name="availableStartDate" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formResumeUpload">
              <Form.Label>Resume Upload</Form.Label>
              <Form.Control type="file" name="resume" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        </Row>
      
    </Container>
  );
}

export default Careers;

