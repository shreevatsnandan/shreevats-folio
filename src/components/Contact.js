import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact-style.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3dyiteh', 'template_fd62cyn', form.current, {
        publicKey: '40wcQuherripFkSn1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const sendMeEmail = () => {
    const email = 'shreevatsnandan@gmail.com';
    const subject = ' ';
    const body = 'I hope this email finds you well.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='contact'>
      <div className="contact-form">
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        <div className='cnt-foot'>Please contact me directly at <b onClick={sendMeEmail}>shreevatsnandan@gmail.com</b> or through this form.</div>
      </div>
    </div>
  );
};
