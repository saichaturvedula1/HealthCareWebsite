// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Here you can also add any front-end validation or actions before submitting the form

    // Normally, you would handle the form submission to an API here,
    // but Netlify Forms takes care of the submission for you.
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
          <a href="mailto:admin@jcarehomehealth.net" className="contact-link">admin@jcarehomehealth.net</a>
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

      
      
      {/* Message Form Section */}
      <div className="message-form p-3 p-md-5">
        <form method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;