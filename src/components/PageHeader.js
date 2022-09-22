import React from 'react';

import classes from '../styles/PageHeader.module.css';

const PageHeader = () => (
  <div className={classes.PageHeader}>
    <div className={classes.LogoContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/media/logo.png`}
        alt='Hydrolife Logo'/>
      </div>
    <div className={classes.PhoneContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/media/phone-call.svg`}
        alt=''/>
      <a href="tel:0878203953">087-820-3953</a>
    </div>
    <div className={classes.MenuContainer}>
      <img
        src={`${process.env.PUBLIC_URL}/media/menu.png`}
        alt='Menu'
        onClick={() => {console.log('clicked')}}/>
    </div>
  </div>
);

export default PageHeader;
