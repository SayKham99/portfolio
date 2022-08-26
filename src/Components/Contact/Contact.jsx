import React from 'react'
import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import './Contact.scss'

function Contact() {
    return (
          <section className='Contact'>
              <div className='wrapper'>
                  <span>Contact</span>
                  <h1 className='title'>Get in Touch</h1>
                  <div className='infos'>
                      <div className='contacts'>
                          <div className='contacts__wrap'>
                              <img src={Phone} alt=""/>
                              <div className='contact'>
                                  <p className='link'>Phone Number</p>
                                  <a className='link hover' href='tel:998-90-763-66-69'>+998 90 763 66 69</a>
                              </div>
                          </div>
                          <div className='contacts__wrap'>
                              <img src={Email} alt=""/>
                              <div className='contact'>
                                  <p className='link'>Email Address</p>
                                  <a className='link hover' href='mailto:x5292623@icloud.com'>x5292623@icloud.com</a> <br/>
                                  <a className='link hover' href='mailto:x5292621@gmail.com'>x5292621@gmail.com</a>
                              </div>
                          </div>
                      </div>
                      <form className='form'>
                          <p className='form__title'>Send Message</p>
                          <div className='nameNum'>
                              <input type="text" placeholder='Your Name'/>
                              <input type="tel" placeholder='Your Phone Number'/>
                          </div>
                          <input type="email" placeholder='Your Email'/>
                          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                          <button className='btn' type='submit'>Submit Message</button>
                      </form>
                  </div>
              </div>
          </section>
    )
}

export default Contact