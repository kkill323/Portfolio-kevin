import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqstim1', 'template_a7qhov7', form.current, '7iEgyuUreuLEEnlIV')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kevinlamprouch@gmail.com</h5>
            <a href="mailto:kevinlamprouch@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className='contact__option-icon'/>
            <h4>instagram</h4>
            <h5>Kevin-Selby</h5>
            <a href="https://www.instagram.com/kkill32/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+16474515823</h5>
            <a href="https://api.whatsapp.com/send?phone=+16474515823" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* <form action=""> */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact