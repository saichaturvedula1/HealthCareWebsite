// HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import welcomevideo from '../../video/Welcome.mp4';

const HomePage = () => {
  
  const insurancesAccepted = [
    { id: 1, type: "Aetna better health"},
    { id: 2, type: "Aetna"},
    { id: 3, type: "Amerigroup"},
    { id: 4, type: "Humana"},
    { id: 5, type: "Medicaid"},
    { id: 6, type: "Medicare"},
    { id: 7, type: "Molina Healthcare"},
    { id: 8, type: "Superior Healthplan"},
    { id: 9, type: "VA"},
    { id: 10, type: "Welmed"},
    { id: 11, type: "Wellcare"},
    { id: 12, type: "Private Pay"}
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  return (
    <motion.div className="Home"
      initial="hidden"
      animate="visible"
    >
      <motion.header 
        className="Home-header mb-4"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>Welcome to JCare Home Health. A Homecare solution in DFW area</motion.h1>
        <motion.p variants={itemVariants}>We are a licensed provider offering wide range of home health care services in Dallas/Fort Worth area since 2004. 
          Our team of experienced healthcare professionals provide personalized care plan to homebound patients with chronic illness or injury by providing skilled care services at their own home based on their medical necessity. 
          Our licensed medical professionals provide services by coordinating with your physician. 
          We are committed to help you design the perfect medical care plan for your unique needs and get faster recovery to get back to your healthier life.
        </motion.p>
      </motion.header>
      <div className="video-container">
        <video autoPlay loop muted className="w-100">
        <source src={welcomevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div className="container mt-5" variants={containerVariants}>
        <motion.h2 variants={itemVariants}>
          Insurance Types We Offer
        </motion.h2>
        <div className="row">
          {insurancesAccepted.map((insurance) => (
            <motion.div
              key={insurance.id}
              className="col-md-4 mb-4"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="card insurance-card">
                <div className="card-body">
                  <h5 className="card-title">{insurance.type}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;

