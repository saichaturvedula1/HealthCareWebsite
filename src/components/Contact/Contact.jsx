// Contact.jsx
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import Axios
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import phoneIcon from '../../images/phone.png';
import emailIcon from '../../images/email.png';
import locationIcon from '../../images/address.png';

  // Animation Variants
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

const Contact = () => {

  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate Form Fields
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formFields.name ? "" : "This field is required.";
    tempErrors.email = formFields.email ? "" : "This field is required.";
    tempErrors.subject = formFields.subject ? "" : "This field is required.";
    tempErrors.message = formFields.message ? "" : "This field is required.";

    // Email validation
    if(formFields.email) {
      const emailRegex = /\S+@\S+\.\S+/;
      tempErrors.email = emailRegex.test(formFields.email) ? "" : "Email is not valid.";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(validate()){

  //     setIsSubmitted(true);
  //     // Here you can also integrate any API call to submit the form data
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     axios({
  //       method: 'post',
  //       url: '/.netlify/functions/handleSubmit',
  //       data: formFields,
  //     })
  //     .then(response => {
  //       console.log('Form submitted successfully:', response);
  //       setIsSubmitted(true);
  //     })
  //     .catch(error => {
  //       console.error('Form submission error:', error);
  //     });
  //   }
  // };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      // Prepare form data for submission
      const formData = new FormData();
      formData.append('form-name', 'contact');
      Object.keys(formFields).forEach(key => {
        formData.append(key, formFields[key]);
      });

      // Use Axios to submit the form data
      axios({
        method: 'post',
        url: '/', // Your form's Netlify action URL; adjust if necessary
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(response => {
        console.log('Form submitted successfully:', response);
        setIsSubmitted(true);
      })
      .catch(error => {
        console.error('Form submission error:', error);
      });
    }
  };

  
  return (
    <motion.div
      className="contact-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {/* Contact Info Section */}
      <div className="contact-info d-flex flex-wrap justify-content-around">
        {/* Phone Info */}
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone" />
          <h3>Call Us</h3>
          <a href="tel:+19722642737" className="contact-link">972-264-2737</a>
          <p>Mon to Fri 9 am - 5 pm</p>
        </div>
        {/* Email Info */}
        <div className="contact-item">
          <img src={emailIcon} alt="Email" />
          <h3>Email</h3>
          <a href="mailto:saichaturvedula@gmail.com" className="contact-link">admin@jcarehomehealth.net</a>
        </div>
        {/* Address Info */}
        <div className="contact-item">
          <img src={locationIcon} alt="Location" />
          <h3>Location</h3>
          <p>2840 Keller Springs Rd, Suite1001,</p>
          <p>Carrollton, TX 75006, USA.</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section container-fluid">
      <iframe 
      title="our location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.2931164359884!2d-96.8560944!3d32.969667699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c26a2accef329%3A0x54d7885598e12c0a!2s2840%20Keller%20Springs%20Rd%20Suite%201001%2C%20Carrollton%2C%20TX%2075006!5e0!3m2!1sen!2sus!4v1709844311889!5m2!1sen!2sus" 
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      
      </div>

      {/* Success Message */}
      {isSubmitted && <div className="alert alert-success" role="alert">
        Contact Details submitted successfully!
      </div>}
      
      {/* Message Form Section */}
      <div className="message-form p-3 p-md-5">
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          {/* Honeypot field for spam filtering - should be hidden and left empty by humans */}
          <input type="hidden" name="bot-field" />
          {/* Hidden input to link the form with Netlify configuration */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" value={formFields.name} onChange={handleInputChange} required />
            {errors.name && <p className="text-danger">{errors.name}</p>}
            <input type="email" name="email" placeholder="Email Address" value={formFields.email} onChange={handleInputChange} required />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" value={formFields.subject} onChange={handleInputChange} required />
            {errors.subject && <p className="text-danger">{errors.subject}</p>}
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" value={formFields.message} onChange={handleInputChange} required></textarea>
            {errors.message && <p className="text-danger">{errors.message}</p>}
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

