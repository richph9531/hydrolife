import React from 'react';

import classes from '../styles/ContactUs.module.css';

const _ = require('lodash');

const ContactIconsForContactUs = props => {
  const newArray = _.cloneDeep(props.data.data);
  delete newArray[0]
  const IconMap = newArray.map((item, pos) => (
    <div className={classes.Icons} key={pos} >
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

export default ContactIconsForContactUs;
