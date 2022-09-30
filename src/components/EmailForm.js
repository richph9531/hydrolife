import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormErrors } from './FormErrors';
import { EmailSendStatus } from './EmailSendStatus';

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
      formErrors: {first_name: '', last_name: '', reply_to: '', message: '' },
      firstNameValid: false,
      lastNameValid: false,
      replyToValid: false,
      messageValid: false,
      recaptchaCompleted: false,
      formValid: false,
      alreadySubmitted: false,
      emailSendStatus: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRECAPTCHA = this.handleRECAPTCHA.bind(this);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let replyToValid = this.state.replyToValid;
    let messageValid = this.state.messageValid;
    let recaptchaCompleted = this.state.recaptchaCompleted;
  
    switch(fieldName) {
      case 'first_name':
        firstNameValid = value.replace(/\s/g, '').length >= 1;
        fieldValidationErrors.first_name = firstNameValid ? '' : ' is invalid';
        break;
      case 'last_name':
        lastNameValid = value.replace(/\s/g, '').length >= 1;
        fieldValidationErrors.last_name = lastNameValid ? '' : ' is invalid';
        break;
      case 'reply_to':
        replyToValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.reply_to = replyToValid ? '' : ' is invalid';
        break;
      case 'message':
        messageValid = value.replace(/\s/g, '').length >= 1;
        fieldValidationErrors.message = messageValid ? '' : ' is invalid';
        break;
      case 'recaptchaCompleted':
        recaptchaCompleted = value;
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
      replyToValid: replyToValid,
      messageValid: messageValid,
      recaptchaCompleted: recaptchaCompleted
    }, this.validateForm);
  }

  async handleRECAPTCHA(event){
    let recaptchaCompleted;
    recaptchaCompleted = event.length > 200 ? true : false;
    this.setState({recaptchaCompleted: recaptchaCompleted}, 
      () => { this.validateField('recaptchaCompleted', recaptchaCompleted) })
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value}, 
      () => { this.validateField(name, value) })
  }

  async handleSubmit(event){
    const { first_name, last_name, message, reply_to } = this.state
    this.setState({alreadySubmitted: true})
    event.preventDefault()
    const toSend = { first_name, last_name, message, reply_to}
    const response = await send('service_ldx3z6r', 'template_o5p916m', toSend, 'B5Ramafr-SGHyuHIa')
    let emailSendStatus;
    emailSendStatus = response.status = 200 ? 'Success! Thank you for your message.' : 'Failed to send. Please try again or reach out to us on Whatsapp.';
    this.setState({emailSendStatus: emailSendStatus})
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.replyToValid &&
        this.state.messageValid &&
        this.state.recaptchaCompleted
    });
  }

  render() {
    return (
      <div>
      <form className={classes.EmailForm} onSubmit={this.handleSubmit}>
      <input
        className={classes.NameFields}
        type='text'
        name='first_name'
        placeholder='First name'
        value={this.state.value}
        onChange={this.handleChange}
        autoComplete='off'
      />
      <input
        className={classes.NameFields}
        type='text'
        name='last_name'
        placeholder='Last name'
        value={this.state.value}
        onChange={this.handleChange}
        autoComplete='off'
      />
      <input
        className={classes.NameFields}
        type='text'
        name='reply_to'
        placeholder='Your email'
        value={this.state.value}
        onChange={this.handleChange}
        autoComplete='off'
      />
      <input
        className={classes.MessageField}
        type='text'
        name='message'
        placeholder='Your message'
        value={this.state.value}
        onChange={this.handleChange}
        autoComplete='off'
      />
      <ReCAPTCHA
        sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
        onChange={this.handleRECAPTCHA}
      />
      <button
        className={classes.SubmitButton}
        type='submit'
        disabled={!this.state.formValid || this.state.alreadySubmitted}>Submit</button>
    </form>
    <FormErrors data={this.state.formErrors} />
    <EmailSendStatus data={this.state.emailSendStatus} />
    </div>
    );
  }
}

export default EmailForm;