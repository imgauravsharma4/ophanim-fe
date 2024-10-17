import React from "react";
import { ContactInfoDetails } from "../../utlis/variables";

const ContactPage = () => {
  return (
    <div>
      <div className='container'>
        <form className='section-wrapper'>
          <div className='row contact-wrapper'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' placeholder='Enter your name' />
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Enter email address'
                />
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='number'>Phone Number (optional)</label>
                <input
                  type='number'
                  id='number'
                  placeholder='Enter Phone number'
                />
              </div>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='subject'>Subject</label>
                <input type='text' id='subject' placeholder='Enter Subject' />
              </div>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  placeholder='Enter Message'
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 text-end'>
              <button className='primary-button'>Send Message</button>
            </div>
          </div>
        </form>
      </div>
      <div className='contact-info'>
        <div className='container'>
          <div className='row section-wrapper'>
            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12'>
              <h5 className='sub-heading'>Contact info</h5>
              <h3 className='heading'>We are always happy to assist you</h3>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12'>
              <div className='row'>
                {ContactInfoDetails.map((item, index) => (
                  <div
                    className='col-xl-6 col-lg-6 col-md-12 col-sm-12'
                    key={index}
                  >
                    <div className='contact-info-card'>
                      <div className='heading'>
                        <h5>{item.heading}</h5>
                      </div>
                      <div className='small-divider'></div>
                      <p className='heading-item'>{item.content}</p>
                      <p>Assistance hours: </p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
