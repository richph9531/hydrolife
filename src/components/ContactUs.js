import React from 'react';

import ContactIconsForContactUs from './ContactIconsForContactUs';
import EmailForm from './EmailForm';

import classes from '../styles/ContactUs.module.css';


const ContactUs = (props) => {
  const contactUsData = props.data[2]

  return (
  <div className={classes.ContactUs}>
    <h1>Contact Us</h1>
    <div className={classes.PhoneContainer}>
      Phone
      <a href="tel:0878203953">0878203953</a>
    </div>
    <div className={classes.FormContainer}>
      Send us a message
      <EmailForm data={props}/>
    </div>
    <div className={classes.IconsContainer}>
      Social Media
      <ContactIconsForContactUs data={contactUsData}/>
    </div>
</div>
)
  };

export default ContactUs;
