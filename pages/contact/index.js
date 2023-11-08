import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Barre from '@/components/barre'
import 'react-phone-input-2/lib/style.css'
import Head from 'next/head'
import Sportmovie from '@/components/sportmovie'
import Chatwhatsap from '@/components/chatwhatsap'
import ContactForm from '@/components/contactForm'
import styles from '@/pages/contact/Contact.module.css'

function Contact() {

  const router = useRouter()
  const routerCurrent = router.pathname;
  console.log(routerCurrent)
      
  return (
    <>  
      <Head>
        <title>IPTV Streaming - Contact Us - USA Support</title>
        <meta name="description" content="Experience exceptional IPTV streaming with the convenience of USA support. Contact us 
          for expert assistance and elevate your entertainment experience." />
        <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/logo1.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js" />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="IPTV Streaming - Contact Us - USA Support"/>
        <meta property="og:description" content="Experience exceptional IPTV streaming with the convenience of USA support. Contact us 
          for expert assistance and elevate your entertainment experience."/>
        <meta name="keywords" content="IPTV Streaming, IPTV Streaming 4k, iptv streaming service,  Buy IPTV, Buy IPTV in USA,iptv on smart tv,
              IPTV Streaming in USA, iptv for firestick, 
              iptv premium 2024, iptv service provider, best iptv for firestick 2024, iptv for sale, 
              iptv firestick 2024, iptv gold, iptv subscription legal, mag iptv, iptv subscription in usa, 
              iptv subscription android, iptv subscription best, best iptv subscription for firestick, 
              best iptv on firestick, iptv subscription 12 months, best iptv provider, iptv for android, 
              iptv for firestick, iptv service, iptv with vod, movies on iptv, reliable iptv service, 
              iptv channel list, iptv for amazon fire tv, iptv packages, best iptv service, firestick iptv,
              iptv price in usa, top iptv providers, iptv subscription uk, iptv subscription usa, iptv subscription in canada,
              iptv subscription in Germany, iptv subscription in france, best iptv french
              "/>
        <meta property="og:url" content="https://www.iptv-streaming-4k.com"/>
        <meta property="og:site_name" content="IPTV-Streaming"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/oguk.png"/>
      </Head>



      <div className={`${styles.menbackgound}`}></div> 

      <section className={`${styles.section1}`}>
          <div className="container pt-5 mt-0">
              <div className="row py-5">
                    <div className={`col-12 col-lg-6`}>
                        <ContactForm pack ={routerCurrent} />
                    </div>
                    <div className="col-12 col-lg-6 mt-5">
                        <Chatwhatsap/>       
                    </div>
              </div>
          </div> 
      </section>
          
      
      <section className={`${styles.section2}`}>
        <Sportmovie/>
      </section>

      <section className={`${styles.section3}`}>
        <Barre/>
      </section>
    </>
  )
}

export default Contact
