import React from 'react';

import classes from '../styles/Home.module.css';

const Home = () => (
  <div className={classes.Home}>
  <img 
    src={`${process.env.PUBLIC_URL}/media/logo.png`}
    alt='Hydrolife Logo'/>
  <p>Coming soon...</p>
  <a href="tel:0878203953" style={{ color: '#FFF' }}>087 820 3953</a>
</div>
);

export default Home;
