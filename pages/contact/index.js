import React, { useState } from 'react'
import Lottie from "lottie-react"
import Barre from '@/components/barre'
import styles from './Contact.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import whatsa from '@/public/whatsappp'
import Link from 'next/link'
import Sportmovie from '@/components/sportmovie'
import Chatwhatsap from '@/components/chatwhatsap'
import Forme from '@/components/forme'


function Contact() {
  
  return (
    <>  
      <section>
          <div className="container mt-4">
              <div className="row align-items-center">
                    <div className={`col-12 col-lg-6`}>
                        <Forme/>
                    </div>
                    <div className="col-12 col-lg-6 align-items-center">
                            <Chatwhatsap/>       
                    </div>
              </div>
          </div> 
      </section>
          
      
      <section>
        <Sportmovie/>
      </section>

      <section>
        <Barre/>
      </section>
    </>
  )
}

export default Contact
