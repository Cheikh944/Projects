import React from 'react';
import './contact.css';
import { useFormik } from 'formik';

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });
  
  console.log(formik)

  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <div className="contact-form">
        <div className="location">
          <h2>Office Location :</h2>
          <p>3rd Floor, Green Park, Bengaluru</p>
          <h2>Contact No</h2>
          <p>+91 9876543210</p>
          <h2>Email</h2>
          <p>contact@gamingcompany.com</p>
        </div>
        <div className="form">
          <form>
            <div className="norm name">
              <ul>
                <label htmlFor="fname">First Name</label>
                <input
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  placeholder='First Name'
                  id='firstName'
                  type="text"
                />
              </ul>
              <ul>
                <label htmlFor="lname">Last Name</label>
                <input
                value={formik.values.lastName}
                onChange={formik.handleChange} 
                placeholder='Last Name' 
                id='lastName' 
                type="text" />
              </ul>
            </div>
            <div className="norm mail">
              <ul>
                <label htmlFor="mail">Email</label>
                <input 
                value={formik.values.email}
                onChange={formik.handleChange} 
                placeholder='Email' 
                id='email' 
                type="email" />
              </ul>
              <ul>
                <label htmlFor="option">How did you hear about us?</label>
                <select name="option" id="option">
                  <option value="1">Select option</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 2</option>
                  <option value="1">Option 3</option>
                </select>
              </ul>
            </div>
            <div className="norm message">
              <label htmlFor="message">Message</label>
              <textarea
              value={formik.values.message}
              onChange={formik.handleChange}  
              name="message" 
              id="message">
              </textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;