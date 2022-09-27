import React from 'react';

import ContactIconsForHeader from './ContactIconsForHeader';

import classes from '../styles/PageHeader.module.css';

const PageHeader = (props) => (
  <div className={classes.PageHeader}>
    <div className={classes.LogoContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/media/logo.png`}
        alt='Hydrolife Logo'/>
    </div>
    <div className={classes.ContactUsContainer}>
      <ContactIconsForHeader data={props}/>
    </div>
  </div>
);

export default PageHeader;
