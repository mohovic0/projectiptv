import {React, useState} from 'react'
import styles from './Forme.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Forme() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pack, setPack] = useState('');
    const [message, setMessage] = useState('');
    const [send , setSend] = useState(false);
    const [spin , setSpin] = useState(true)
  

  const handlSubmitFrom = async (e)=>{
    setSpin(false);
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/contact/contact`,{
            method : 'POST',
            headers : {'Content-Type' : "application/json"},
            body : JSON.stringify(
              { Email : email,
                Phone_number : phoneNumber,
                Pack : pack,
                Message : message
              }
              )
        });
        
    const response = await res.json();

    // if(response.response.rep === 'succes' )
    // {
    //   setSend(true);
    //   setEmail('');
    //   setMessage('');
    //   setPack('');
    //   setPhoneNumber('');
    // }
    
    //console.log(response.response.Emai);
    //console.log(response.response.phone);
    //console.log(response.response.pakk);
    //console.log(response.response.mess);
    if(response.error){console.log("erreur de connexion !!");}
    if(response.success){
      setSpin(true);
      setSend(true);
      setEmail('');
      setMessage('');
      setPack('');
      setPhoneNumber('');
    }
    


  }
  
  const handlChangePhone = (value)=>{
    setPhoneNumber(value);
  }


  return (
    <>
        <div className="container">
            <div className="row align-items-center">
                <div className={`p-4 ${styles.formStyling}`}>
                      <h1 className='fs-2 fw-bold'>Contact Us</h1>
                      <form onSubmit={handlSubmitFrom}>
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address (*)</label>
                            <input required  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

                          <button type="submit" className={`btn w-100 btn-lg ${styles.btnSub} `}>{spin && <span>Submit</span>}
                          
                              {!spin && <div class={`spinner-border  ${styles.spiner}`} role="status">
                                <span class="visually-hidden"></span>
                              </div> }
                          </button>
                              

                          {  send && <span className={`align-items-center ${styles.messageSend}`}>
                            &nbsp;&nbsp;&nbsp;<FontAwesomeIcon className={styles.iconSend} icon={faCheck} />
                            &nbsp; <span className='align-middle'>Your details has been successfully submitted. thanks!</span>
                            </span> }
                      </form>
                </div>
            </div>
          </div> 
      
    </>
  )
}

export default Forme
