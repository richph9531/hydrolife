import React from 'react';

import classes from '../styles/EmailForm.module.css';

export const EmailSendStatus = ({data}) =>
  <div className={classes.EmailSendStatus}>
    {data}
  </div>