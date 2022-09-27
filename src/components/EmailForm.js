import React from 'react';

import { send } from 'emailjs-com';

import classes from '../styles/EmailForm.module.css';

const EmailForm = (props) => {
  const toSend = props.data.data[0]
  const setToSend = props.data.data[1]
 
  const onSubmit = (e) => {
    e.preventDefault();
    send('service_ldx3z6r', 'template_o5p916m', toSend, 'B5Ramafr-SGHyuHIa')
      .then((response) => {console.log('SUCCESS!', response.status, response.text)})
      .catch((err) => {console.log('FAILED...', err)});
  };
    
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form className={classes.EmailForm} onSubmit={onSubmit}>
      <input
        className={classes.NameFields}
        type='text'
        name='first_name'
        placeholder='First name'
        value={toSend.first_name}
        onChange={handleChange}
        required={true}
      />
      <input
        className={classes.NameFields}
        type='text'
        name='last_name'
        placeholder='Last name'
        value={toSend.last_name}
        onChange={handleChange}
        required={true}
      />
      <input
        className={classes.NameFields}
        type='text'
        name='reply_to'
        placeholder='Your email'
        value={toSend.reply_to}
        onChange={handleChange}
        required={true}
      />
      <input
        className={classes.MessageField}
        type='text'
        name='message'
        placeholder='Your message'
        value={toSend.message}
        onChange={handleChange}
        required={true}
      />

      <button
        className={classes.SubmitButton}
        type='submit'>Submit</button>
    </form>
  )
};

export default EmailForm;