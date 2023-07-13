import React, { useState } from 'react'
import Lottie from "lottie-react"
import messages from '@/public/message.json'
import styles from './Contact.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



function Contact() {


  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pack, setPack] = useState('');
  const [message, setmessage] = useState('');
  


  const handlChangePhone = (value)=>{
    setPhoneNumber(value);
  }

  const validatePhoneNumbre = (phoneNumber)=>{
    
  }
  
  return (
    <>

          <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                      <h1>Contact Us</h1>
                      <form >
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We ll never share your email with anyone else.</div>
                          </div>
                          <PhoneInput
                            country={'us'}
                            value={phoneNumber}
                            onChange={handlChangePhone}
                            inputClass={{
                              require : true
                            }}
                          />
                          
                          <div className='mt-3'>
                            <label htmlFor="inputState" className="form-label">State</label>
                              <select id="inputState" className="form-select" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Choose your sub</option>
                                <option value="0">Test</option>
                                <option value="1">3 Month</option>
                                <option value="2">6 Month</option>
                                <option value="3">12 Month</option>
                                
                              </select>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                </div>
                <div className="col-12 col-lg-6">
                          <Lottie className={`mx-auto`} loop={true} animationData={messages} />
                </div>
            </div>
          </div> 
      
    </>
  )
}

export default Contact
