import React from 'react';
import './Home.css';
import { Fade, Slide} from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
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
import introvideo from '../../video/intro_video.mp4';

import skilledNursing from '../../images/skilled_nursing.png';
import physicalTherapy from '../../images/physical_therapy.png';
import occupationalTherapy from '../../images/occupational_therapy.png';
import speechTherapy from '../../images/speech_therapy.png';
import homeHealthAide from '../../images/home_health_aide.png';
import socialWorker from '../../images/social_worker.png';

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

      const services = [
        { id: 1, name: 'Skilled Nursing', icon: skilledNursing, backgroundColor: '#00ccff' },
        { id: 2, name: 'Physical Therapy', icon: physicalTherapy, backgroundColor: '#00ccff' },
        { id: 3, name: 'Occupational Therapy', icon: occupationalTherapy, backgroundColor: '#00ccff' },
        { id: 4, name: 'Speech Therapy', icon: speechTherapy, backgroundColor: '#00ccff' },
        { id: 5, name: 'Home Health Aide', icon: homeHealthAide, backgroundColor: '#00ccff' },
        { id: 6, name: 'Social Worker', icon: socialWorker, backgroundColor: '#00ccff' }
      ];
  
  const navigate = useNavigate(); // Initialize useNavigate hook
 
  const handleButtonClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="Home">
      <div className="video-container">
      <video className="background-video" autoPlay muted loop>
      <source src={introvideo} type="video/mp4" />
     </video>
     <div className="content-box-transparent">
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
      
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>Services</h2>
      
      <div className="service-icons">
      
      <Slide direction="center" triggerOnce>
          {services.map((service) => (
            <div key={service.id} className="service-icon" style={{ backgroundColor: service.backgroundColor }}>
              <img src={service.icon} alt="Service Icon" />
              <span style={{color:"white"}}>{service.name}</span>
            </div>
          ))}
          </Slide>
        </div>

    </div>
  );
};

export default HomePage;
