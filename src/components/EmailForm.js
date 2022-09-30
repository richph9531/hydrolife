import React from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

import { send } from 'emailjs-com';

import classes from '../styles/EmailForm.module.css';


class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      message: '',
      reply_to: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit(event){
    const { first_name, last_name, message, reply_to } = this.state
    event.preventDefault()
    const toSend = { first_name, last_name, message, reply_to}
    send('service_ldx3z6r', 'template_o5p916m', toSend, 'B5Ramafr-SGHyuHIa')
    .then((response) => {console.log('SUCCESS!', response.status, response.text)})
    .catch((err) => {console.log('FAILED...', err)});
  }

  render() {
    return (
      <form className={classes.EmailForm} onSubmit={this.handleSubmit}>
      <input
        className={classes.NameFields}
        type='text'
        name='first_name'
        placeholder='First name'
        value1={this.state.value}
        onChange={this.handleChange}
        required={true}
      />
      <input
        className={classes.NameFields}
        type='text'
        name='last_name'
        placeholder='Last name'
        value={this.state.value}
        onChange={this.handleChange}
        required={true}
      />
      <input
        className={classes.NameFields}
        type='text'
        name='reply_to'
        placeholder='Your email'
        value={this.state.value}
        onChange={this.handleChange}
        required={true}
      />
      <input
        className={classes.MessageField}
        type='text'
        name='message'
        placeholder='Your message'
        value={this.state.value}
        onChange={this.handleChange}
        required={true}
      />
      {/* <ReCAPTCHA
        sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
        onChange={console.log('123')}
      /> */}
      <button
        className={classes.SubmitButton}
        type='submit'>Submit</button>
    </form>
    );
  }
}

export default EmailForm;