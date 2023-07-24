import {React, useState} from 'react'
import styles from './Forme.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faL } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Forme() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pack, setPack] = useState('');
    const [message, setMessage] = useState('');
    const [send , setSend] = useState(false);
    const [spin , setSpin] = useState(true);
    const [notSend , setNotSend] = useState(false);
    const [fullName , setFullName] = useState('');
    const [device , setDevice] = useState('');
    const [deviceMac , setDeviceMac] = useState('');
    const [vodLangue , setVodLangue] = useState('');
    const [payment , setPayment] = useState('');
  

  const handlSubmitFrom = async (e)=>{
    setSpin(false);
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/contact/contact`,{
            method : 'POST',
            headers : {'Content-Type' : "application/json"},
            body : JSON.stringify(
              { Full_name : fullName,
                Email : email,
                Phone_number : phoneNumber,
                Device_app : device,
                Pack : pack,
                Device_mac : deviceMac,
                Vod_langue : vodLangue,
                Payment : payment,
                Message : message
              }
              )
        });
        
    const response = await res.json();

    
    if(response.error){
      console.log("erreur de connexion !!");
      setNotSend(true);
      setSpin(true);
      
    }

    if(response.success){
      setNotSend(false);
      setSpin(true);
      setSend(true);
      setEmail('');
      setMessage('');
      //setPack('');
      setPhoneNumber('');
      setFullName('');
      //setDevice('');
      setDeviceMac('');
      //setVodLangue('');
      //setPayment('');
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
                          <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Full Name *</label>
                            <input required value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
                            {fullName}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                            <input required  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We ll never share your email with anyone else. {email}</div>
                          </div>

                          <div className="mb-3">
                              <label for="formGroupExampleInput" class="form-label">Phone Number </label>
                              <PhoneInput
                                country={'us'}
                                value={phoneNumber}
                                onChange={handlChangePhone}
                                inputClass={{
                                  require : true
                                }}
                              />
                              {phoneNumber}
                          </div>
                          
                          <div className='mt-3'>
                            <label htmlFor="inputState" className="form-label">SELECT DEVICE/APP *</label>
                              <select required id="inputState" className="form-select" defaultValue={'DEFAULT'}
                               onChange={(e)=>setDevice(e.target.value)}>
                                <option value="">SELECT DEVICE/APP</option>
                                <option value="TVIP BOX"> TVIP BOX</option> 
                                <option value="MAG BOX">MAG BOX</option>
                                <option value="SMART STB">SMART STB</option>
                                <option value="SMART IPTV">SMART IPTV</option>  
                                <option value="DUPLEX IPTV">DUPLEX IPTV</option> 
                                <option value="NET IPTV">NET IPTV</option>  
                                <option value="SET IPT">SET IPT</option> 
                                <option value="IPTV EXTEREME">IPTV EXTEREME</option> 
                                <option value="IPTV SMARTERS">IPTV SMARTERS</option> 
                                <option value="GSE SMART">GSE SMART</option>
                                <option value="FORMULATE BOX">FORMULATE BOX</option> 
                                <option value="OTHER DEVICE (m3u Link)">OTHER DEVICE (m3u Link)</option> 
                              </select>
                              {device}
                          </div>
                          
                          <div className='mt-3'>
                            <label htmlFor="inputState" className="form-label">PACK *</label>
                              <select required id="inputState" className="form-select" defaultValue={'DEFAULT'}
                              onChange={(e)=>(setPack(e.target.value))}>
                                <option value="">Choose your sub</option>
                                <option value="Test">Test</option>
                                <option value="3 Month">3 Month</option>
                                <option value="6 Month">6 Month</option>
                                <option value="12 Month">12 Month</option>  
                              </select>
                              {pack}
                          </div>

                          <div class="mt-3">
                            <label for="formGroupExampleInput" class="form-label">Device MAC/ID</label>
                            <input type="text" value={deviceMac} onChange={(e)=>setDeviceMac(e.target.value)} class="form-control" id="formGroupExampleInput" placeholder=""/>
                            <div className="form-text">REQUIRED FOR FORMULATE BOX, MAG BOX,SMART STB, TVIP BOX</div>
                            {deviceMac}
                          </div>

                          <div className='mt-3'>
                            <label htmlFor="inputState" className="form-label">VOD LANGUAGE *</label>
                              <select required id="inputState" className="form-select" defaultValue={'DEFAULT'}
                              onChange={(e)=>(setVodLangue(e.target.value))}>
                                <option value="">VOD LANGUAGE</option>
                                <option value="ENGLISH">ENGLISH</option> 
                                <option value="IRAN">IRAN</option>
                                <option value="ARABIC">ARABIC</option>
                                <option value="BOLLYWOOD">BOLLYWOOD</option>  
                                <option value="BULGARY">BULGARY</option> 
                                <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>  
                                <option value="RUSSIA">RUSSIA</option> 
                                <option value="EXYU">EXYU</option> 
                                <option value="FRANCE">FRANCE</option> 
                                <option value="GERMANY">GERMANY</option>
                                <option value="ITALY">ITALY</option> 
                                <option value="MALTA">MALTA</option>
                                <option value="NEDERLAND">NEDERLAND</option> 
                                <option value="POLAND">POLAND</option> 
                                <option value="PORTUGAL-BRAZIL">PORTUGAL-BRAZIL</option> 
                                <option value="SCANDINAVIA">SCANDINAVIA</option> 
                                <option value="SOMALIA">SOMALIA</option> 
                                <option value="SPAIN">SPAIN</option> 
                                <option value="TURKISH">TURKISH</option>
                                <option value="ALBANIA">ALBANIA</option>
                              </select>
                              {vodLangue}
                          </div>

                          <div className='mt-3'>
                            <label htmlFor="inputState" className="form-label">Payment Method *</label>
                              <select required id="inputState" className="form-select" defaultValue={'DEFAULT'}
                              onChange={(e)=>(setPayment(e.target.value))}>
                                <option value="">Payment Method</option>
                                <option value="Paypal">Paypal</option>
                                <option value="IBAN">IBAN</option>  
                              </select>
                              {payment}
                          </div>

                          <div className="mt-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            maxLength="150"
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}></textarea>
                            {message}
                          </div>

                          <button type="submit" className={`btn w-100 btn-lg mt-3 ${styles.btnSub} `}>{spin && <span className='fs-5 fw-blod'>Submit</span>}
                          
                              {!spin && <div className={`spinner-border  ${styles.spiner}`} role="status">
                                <span className="visually-hidden"></span>
                              </div> }
                          </button>
                              

                          {  send && <span className={`align-items-center ${styles.messageSend}`}>
                            &nbsp;&nbsp;&nbsp;<FontAwesomeIcon className={styles.iconSend} icon={faCheck} />
                            &nbsp; <span className='align-middle'>Your details has been successfully submitted. thanks!</span>
                            </span> }


                            {  notSend && <span className={`align-items-center ${styles.messageSendError}`}>
                            &nbsp;&nbsp;&nbsp;<FontAwesomeIcon className={styles.iconSendError} icon={faXmark} />
                            &nbsp; <span className='align-middle'>Internal Server Error. please try again!</span>
                            </span> }

                      </form>
                </div>
            </div>
          </div> 
      
    </>
  )
}

export default Forme
