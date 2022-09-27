import React from 'react';

import ContactIcons from './ContactIcons';

import classes from '../styles/PageHeader.module.css';

const PageHeader = (props) => (
  <div className={classes.PageHeader}>
    <div className={classes.LogoContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/media/logo.png`}
        alt='Hydrolife Logo'/>
    </div>
    <div className={classes.ContactUsContainer}>
      <ContactIcons data={props}/>
    </div>
  </div>
);

export default PageHeader;
