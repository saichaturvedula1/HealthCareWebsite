import React, {useEffect} from 'react';
import './Home.css';
import welcomevideo from '../../video/Welcome_video.mp4';
// Importing components from react-awesome-reveal
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

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
        <Fade duration={1500}>
          <h1>Welcome to JCare Home Health. A Homecare solution in DFW area</h1>
          <p>We are a licensed provider offering wide range of home health care services in Dallas/Fort Worth area since 2004. 
            Our team of experienced healthcare professionals provide personalized care plan to homebound patients with chronic illness or injury by providing skilled care services at their own home based on their medical necessity. 
            Our licensed medical professionals provide services by coordinating with your physician. 
            We are committed to help you design the perfect medical care plan for your unique needs and get faster recovery to get back to your healthier life.
          </p>
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
          <h2>Insurance Types We Offer</h2>
        </Slide>
        <div className="row">
          {insurancesAccepted.map((insurance) => (
            <div key={insurance.id} className="col-md-4 mb-4">
              <Fade direction="left" duration={1000} delay={100 * insurance.id}>
                <div className="card insurance-card">
                  <div className="card-body">
                    <h5 className="card-title">{insurance.type}</h5>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
