import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

 

  return (
    <footer className="text-center text-lg-start bgtxtcolor">
      <div className="container p-4 bgtxtcolor">
       
    
        {/* Newsletter Subscription */}
        <div className="row mt-4">
          <div className="col-md-12">
            <h5 className="bgtxtcolor">Stay Updated</h5>
            <form className="form-inline d-flex justify-content-center">
              <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Enter email address" />
              <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

     {/* Corrected Social Media Links */}
     <div className="d-flex justify-content-center mb-3">
        <a href="https://facebook.com" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com" className="me-4 text-reset" target="_blank" rel="noreferrer"> 
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

     
      
      {/* Footer Bottom */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgb(0, 161, 224)', color: 'white' }}>
        © 2024 | Jcare home health agency, Carrollton Texas
      </div>
    </footer>
  );
};

export default Footer;



