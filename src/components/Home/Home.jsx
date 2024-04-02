import React, { useEffect } from 'react';
import './Home.css';
import welcomevideo from '../../video/Welcome_video.mp4';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

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

  useEffect(() => {
    const adjustVideoForIOS = () => {
      // Apply changes specifically for iOS devices
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.setAttribute('playsinline', '');
        video.muted = true; // Mute the video
        video.play().catch(error => console.error("Autoplay was prevented:", error));
      });
    };

    const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS()) {
      adjustVideoForIOS();
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="Home">
      <header className="Home-header mb-4">
        <Fade duration={1500} cascade={true}>
          <h1>Welcome to JCare Home Health. A Homecare solution in DFW area</h1>
          <p>We are a licensed provider offering a wide range of home health care services in the Dallas/Fort Worth area since 2004.</p>
          <p>Our team of experienced healthcare professionals provides personalized care plans to homebound patients.</p>
          <p>Our licensed medical professionals provide services by coordinating with your physician.</p>
          <p>We are committed to helping you design the perfect medical care plan for your unique needs and achieve faster recovery to get back to your healthier life.</p>
        </Fade>
      </header>
      <div className="video-container">
        <Zoom duration={2000}>
          <video autoPlay loop muted playsInline className="w-100">
            <source src={welcomevideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Zoom>
      </div>
      <div className="container mt-5">
        <Slide direction="up" triggerOnce>
          <h2>Insurance Types We Accept</h2>
        </Slide>
        <div className="wrapper">
          <ul>
            {insurancesAccepted.map((insurance) => (
              <li key={insurance.id}>
                <Fade direction="left" duration={1000} delay={100 * insurance.id}>
                  <figure>
                    <img src={insurance.logo} alt="Insurance Logo" />
                  </figure>
                </Fade>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
