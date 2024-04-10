import React, { useState, useEffect } from 'react';
import './Home.css';
import { Fade, Slide} from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import image1 from '../../images/image-1.png';
import image2 from '../../images/image-2.png';
import aarpLogo from '../../images/insurance-images/aarp.png';
import aetnaLogo from '../../images/insurance-images/aetna.png';
import Amerigroup from '../../images/insurance-images/Amerigroup.png';
import baylor from '../../images/insurance-images/baylor.png';
import BCBS from '../../images/insurance-images/BCBS.png';
import carecentrix from '../../images/insurance-images/carecentrix.png';
import careimprove from '../../images/insurance-images/careimprove.png';
import carencare from '../../images/insurance-images/carencare.png';
import cigna from '../../images/insurance-images/cigna.png';
import cignahealth from '../../images/insurance-images/cignahealth.png';
import healthspring from '../../images/insurance-images/healthspring.png';
import homelink from '../../images/insurance-images/homelink.png';
import humana from '../../images/insurance-images/humana.png';
import jps from '../../images/insurance-images/jps.png';
import medicaid from '../../images/insurance-images/medicaid.png';
import medicare from '../../images/insurance-images/medicare.png';
import molina from '../../images/insurance-images/molina.png';
import multiplan from '../../images/insurance-images/multiplan.png';
import ntsp from '../../images/insurance-images/ntsp.png';
import secured from '../../images/insurance-images/secured.png';
import superior from '../../images/insurance-images/superior.png';
import texans from '../../images/insurance-images/texans.png';
import tricare from '../../images/insurance-images/tricare.png';
import wellcare from '../../images/insurance-images/wellcare.png';
import wellmed from '../../images/insurance-images/wellmed.png';
import workerscomp from '../../images/insurance-images/workerscomp.png';
import vains from '../../images/insurance-images/va.png';

const insuranceLogos = [image1, image2];
const HomePage = () => {
    const insurancesAccepted = [
        { id: 1, logo: aarpLogo },
        { id: 2, logo: aetnaLogo },
        { id: 3, logo: Amerigroup},
        { id: 4, logo: baylor},
        { id: 5, logo: BCBS},
        { id: 6, logo: carecentrix},
        { id: 7, logo: careimprove},
        { id: 8, logo: carencare},
        { id: 9, logo: cigna},
        { id: 10, logo: cignahealth},
        { id: 11, logo: healthspring},
        { id: 12, logo: homelink},
        { id: 13, logo: humana},
        { id: 14, logo: jps},
        { id: 15, logo: medicaid},
        { id: 16, logo: medicare},
        { id: 17, logo: molina},
        { id: 18, logo: multiplan},
        { id: 19, logo: ntsp},
        { id: 20, logo: secured},
        { id: 21, logo: superior},
        { id: 22, logo: texans},
        { id: 23, logo: tricare},
        { id: 24, logo: wellcare},
        { id: 25, logo: wellmed},
        { id: 26, logo: workerscomp},
        { id: 27, logo: vains}
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % insuranceLogos.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="Home">
      <div className="image-container">
        <div className="background-image" style={{ backgroundImage: `url(${insuranceLogos[currentIndex]})` }}></div>
        <div className="content-box">
        <Fade duration={1500} cascade={true}>
          <h1>Welcome to JCare Home Health.</h1>
          <p>We are a licensed provider offering a wide range of home health care services in the Dallas/Fort Worth area since 2004.</p>
          <p>Our team of experienced healthcare professionals provides personalized care plans to homebound patients.</p>
        </Fade>
        <button onClick={handleButtonClick}>Talk With a Nurse</button>
      </div>
      </div>
      
      <div className="container mt-5">
        <Slide direction="center" triggerOnce>
          <h2>Insurance Types We Accept</h2>
        </Slide>
        
       <div className="wrapper">
        
       <ul className="insurance-list">
            
            {insurancesAccepted.map((insurance, index) => (
              <li key={index}>
                <figure>
                  <img src={insurance.logo} alt="Insurance Logo" />
                </figure>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
