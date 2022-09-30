import React from 'react';

import classes from '../styles/EmailForm.module.css';


export const FormErrors = ({data}) =>
  <div className={classes.FormErrors}>
    {Object.keys(data).map((fieldName, i) => {
      if(data[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {data[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>