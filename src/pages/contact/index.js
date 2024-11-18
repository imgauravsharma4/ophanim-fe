import React, { useState } from "react";
import { ContactInfoDetails } from "../../utlis/variables";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, number, subject, message } = formData;

    try {
      const response = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        { name, email, number, subject, message },
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      );

      if (response.status === 200) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", number: "", subject: "", message: "" });
      } else {
        setSuccessMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className='container'>
        <form className='section-wrapper' onSubmit={handleSubmit}>
          <div className='row contact-wrapper'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='name'>Your Name</label>
                <input     
                  type='text'
                  id='name'
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required />
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='email'>Email Address</label>
                <input
                 type='email'
                 id='email'
                 placeholder='Enter email address'
                 value={formData.email}
                 onChange={handleInputChange}
                 required
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
                    value={formData.number}
                    onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='subject'>Subject</label>
                <input    type='text'
                  id='subject'
                  placeholder='Enter Subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  required />
              </div>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='input-field'>
                <label htmlFor='message'>Message</label>
                <textarea
                 id='message'
                 placeholder='Enter Message'
                 rows={8}
                 value={formData.message}
                 onChange={handleInputChange}
                 required
                ></textarea>
              </div>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 text-end'>
              <button className='primary-button' type='submit'
                disabled={loading}> {loading ? "Sending..." : "Send Message"}
              </button>
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
