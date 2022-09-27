import React from 'react';

import classes from '../styles/PageHeader.module.css';

const ContactIcons = props => {
  const IconMap = props.data.data.map((item, pos) => (
    <div className={classes.ContactIcons} key={pos} >
      <a
        
        href={item.value}
        target="noopener noreferrer"
        rel="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/media/${item.image}`}
          alt={item.value}/>
      </a>
    </div>
  ));

  return (
    <div>
      { IconMap }
    </div>
  );
};

export default ContactIcons;
