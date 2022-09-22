import React from 'react';

import classes from '../styles/Home.module.css';

const Home = () => (
  <div className={classes.Home}>
    <div className={classes.HomeContent}>
      <img 
        src={`${process.env.PUBLIC_URL}/media/logo.png`}
        alt='Hydrolife Logo'/>
      <p>We have over 20 years of experience in the rental of water coolers and the delivery of refill bottled water in the greater Cape Town area. Hydrolife has the solution to your home, office or factory/plant water needs.</p>
      <p>Our expertise in off-grid solutions and bespoke water filtration systems is what sets Hydrolife apart from other excellent quality water solutions.</p>
    </div>
    <div className={classes.HomeCoolerImageContainer} >
      <img className={classes.HomeCoolerImage} 
        src={`${process.env.PUBLIC_URL}/media/cooler-tall.png`}
         alt='Rent one of these'/>
    </div>
  </div>


);

export default Home;
