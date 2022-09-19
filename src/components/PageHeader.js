import React from 'react';

import classes from '../styles/PageHeader.module.css';

const PageHeader = () => (
  <div className={classes.PageHeader}>
    <div className={classes.LogoContainer}>
      <img
        src={`${process.env.PUBLIC_URL}/media/Logo.png`}
        alt='Hydrolife Logo'/>
      </div>
    <div className={classes.MenuContainer}>
      <img
        src={`${process.env.PUBLIC_URL}/media/menu.png`}
        alt='Menu'/>
    </div>
  </div>
);

export default PageHeader;
