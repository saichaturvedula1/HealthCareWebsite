import React from 'react';
import './About.css';
import doctorImage from '../../images/doctor-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMedal, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Fade, Slide } from 'react-awesome-reveal'; // Import the animations you plan to use

const About = () => {
  let timer = 500;
  return (
    <div className="container">
      {/* Use Slide animation for the about-us section */}
      <Slide triggerOnce>
        <div className="about-us-section row">
          <div className="col-md-12 content-wrapper">
           <Fade direction="up" triggerOnce delay={timer}>
            <h2>Providing You High Quality Home Care Solutions</h2>
            </Fade>
            <Fade direction="up" triggerOnce delay={timer}>
            <p>At Jcare home health agency, we provide a wide range of home health care services to patients throughout Dallas / Fort Worth area. Our staff goes above and beyond to make sure you get the best quality care possible. We are committed to provide you with all the resources you need in order to get back on your feet.</p>
            <p>We are passionate about our professional and personalized care, and work hard to meet and exceed your expectations. Contact us to start your journey back to healthy living.</p>
            </Fade>
          </div>
          <div className="col-md-6 image-wrapper">
          <Fade direction="up" triggerOnce delay={timer}>
            <img src={doctorImage} alt="Doctor with patient" className="img-fluid rounded" />
          </Fade>
          </div>
        </div>
      </Slide>

      {/* Use Fade animation for Our Mission Section */}
      <Fade direction="up" triggerOnce delay={timer + timer}>
        <div className="mission-section text-center p-5">
          <h2>Our Mission</h2>
          <p className="mb-4">We feel great joy by providing our clients the high quality care. 
          We take a pride to treat each of our clients with dignity and respect they deserve and fulfil their health goals to live their lives to the fullest. 
          We are dedicated to help our patients the best way we can. For our entire team, care is much more than just a job.</p>
          <p className="mb-4">Our success is depended on the happiness of our patients. 
          We are not satisfied until our patients are. Our priority is to serve our patients with excellence and build healthier communities.</p>
        </div>
      </Fade>

      {/* Use Slide animation for Our Values Section */}
      <Slide direction="left" triggerOnce delay={timer}>
        <div className="values-section">
          {/* <div className="values-image">
            <img src={valuesImg} alt="Doctor" />
          </div> */}
          <Fade direction="left" triggerOnce delay={timer}>
          <div className="values-content">
            <h2>Our Values</h2>
            <div className="value-card">
              <FontAwesomeIcon icon={faEye} size="2x"/>
              <h3>Honesty</h3>
              <p>At Jcare, we uphold the utmost honesty in all our dealings. We believe in transparent communication with our patients, ensuring they fully understand their medical conditions, treatment options, and associated costs.</p>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faMedal} size="2x"/>
              <h3>Highest Quality</h3>
              <p>Quality is the cornerstone of Jcare. We are dedicated to delivering the highest standard of care to every patient we serve. From our medical professionals to our support staff, we are committed to excellence in everything we do.</p>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faHandshake} size="2x"/>
              <h3>Responsibility</h3>
              <p>We understand the immense responsibility entrusted to us by our patients and the community. We prioritize patient safety, confidentiality, and well-being above all else. Our team of healthcare professionals adheres to strict ethical standards and follows best practices to provide comprehensive and compassionate care. </p>
            </div>
          </div>
          </Fade>
        </div>
      </Slide>
    </div>
  );
};

export default About;
