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
  const [message, setMessage] = useState('');
  

  
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
                            <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We ll never share your email with anyone else. {email}</div>
                          </div>
                          <PhoneInput
                            country={'us'}
                            value={phoneNumber}
                            onChange={handlChangePhone}
                            inputClass={{
                              require : true
                            }}
                          />
                          {phoneNumber}
                          
                          <div className='mt-3'>
                            <label htmlFor="inputState" className="form-label">State</label>
                              <select id="inputState" className="form-select" defaultValue={'DEFAULT'}
                              onChange={(e)=>(setPack(e.target.value))}>
                                <option value="DEFAULT" disabled>Choose your sub</option>
                                <option value="Test">Test</option>
                                <option value="3 Month">3 Month</option>
                                <option value="6 Month">6 Month</option>
                                <option value="12 Month">12 Month</option>
                                
                              </select>
                              {pack}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            maxLength="150"
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}></textarea>
                            {message}
                          </div>
                          <button type="submit" className={`btn ${styles.btnSub} `}>Submit</button>
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
