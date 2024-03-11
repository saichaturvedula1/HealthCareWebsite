import React from 'react';
import './Services.css';
import { Slide } from 'react-awesome-reveal';
import skilledNursing from '../../images/skilled_nursing.png';
import physicalTherapy from '../../images/physical_therapy.png';
import occupationalTherapy from '../../images/occupational_therapy.png';
import speechTherapy from '../../images/speech_therapy.png';
import homeHealthAide from '../../images/home_health_aide.png';
import socialWorker from '../../images/social_worker.png';
//import personalAttendant from '../../images/personal_Attendant.png';

const servicesInfo = [
  {
    id: 1,
    title: 'Skilled Nursing',
    description: 'Our licensed nurses provide medication management, intravenous therapy, injections, wound care, catheter care, and monitoring vital signs.',
    image: skilledNursing
  },
  {
    id: 2,
    title: 'Physical Therapy',
    description: 'We provide treatment to injury and disease to improve physical actions by providing appropriate exercise, pain management, and therapeutic massage.',
    image: physicalTherapy
  },
  {
    id: 3,
    title: 'Occupational Therapy',
    description: 'We help people who has difficulty to perform some daily activities due to injury, illness or disability, by therapeutic use and providing assistive devices.',
    image: occupationalTherapy
  },
  {
    id: 4,
    title: 'Speech Therapy',
    description: 'We treat patients with difficulty in communicating and other related conditions.',
    image: speechTherapy
  },
  {
    id: 5,
    title: 'Home Health Aide',
    description: 'Our Home health Aides provide assistance with activities of daily living. They work under the supervision of a nurse or other healthcare providers.',
    image: homeHealthAide
  },
  {
    id: 6,
    title: 'Social Worker',
    description: 'Social workers assist in counseling, community resources, assessment of living conditions and financial concerns.',
    image: socialWorker
  },
  // {
  //   id: 7,
  //   title: 'Personal Attendant Services',
  //   description: 'Our caregivers take care of you or your family member when you have a busy schedule. We provide you peace of mind by providing compassionate and high quality care you and your loved one deserves. Our caregivers help elders by monitoring them for fall prevention and helping them in daily routine to make the tasks easier. Our caregivers are thoroughly credentialed and background checked. Their schedules are flexible and available either part time or 24/7.',
  //   image: personalAttendant
  // }
];

function ServiceCard({ title, description, image }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch">
      <Slide triggerOnce>
        <div className="card service-card mb-4">
          <img src={image} className="card-img-top img-fluid" alt={title} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text flex-grow-1">{description}</p>
          </div>
        </div>
      </Slide>
    </div>
  );
}

function Services() {
  return (
    <div className="container py-5">
      <div className="row">
        {servicesInfo.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
