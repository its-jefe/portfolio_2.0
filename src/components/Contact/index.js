import "./style.css"
import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section id="Contact">
      <form id="contact-form" onSubmit={handleSubmit}>
          <input id="name-input" type="text" name="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
    
          <input id="email-input" type="email" name="email" placeholder="Email Address"defaultValue={email} onBlur={handleChange} />
     
          <textarea id="message-input" name="message" rows="5" placeholder="Message" defaultValue={message} onBlur={handleChange} />
        {errorMessage && (
            <p id="error-text">{errorMessage}</p>     
        )}
        <button id="submit-btn" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;