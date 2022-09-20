import React from 'react';

import classes from '../styles/PageHeader.module.css';

const PageHeader = () => (
  <div className={classes.PageHeader}>
    <div className={classes.LogoContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/media/logo2.png`}
        alt='Hydrolife Logo'/>
      </div>
    <div className={classes.MenuContainer}>
      <img
        src={`${process.env.PUBLIC_URL}/media/menu2.png`}
        alt='Menu'/>
    </div>
  </div>
);

export default PageHeader;
