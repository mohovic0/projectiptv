import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Barre from '@/components/barre'
import 'react-phone-input-2/lib/style.css'
import Head from 'next/head'
import Sportmovie from '@/components/sportmovie'
import Chatwhatsap from '@/components/chatwhatsap'
import Forme from '@/components/forme'
import styles from '@/pages/contact/Contact.module.css'

function Contact() {

  const router = useRouter()
  const routerCurrent = router.pathname;
  console.log(routerCurrent)
      
  return (
    <>  
      <Head>
        <title>ipTv Infinity - Best IPTV Subscription Service Provider</title>
        <meta name="description" content="ipTv Infinity is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service. Get the next GEN+ IPTV." />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js" />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="ipTv Infinity - Best IPTV Subscription Service Provider"/>
        <meta property="og:description" content="ipTv Infinity is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service. Get the next GEN+ IPTV."/>
        <meta name="keywords" content="iptv subscription, iptv subscription legal, best iptv subscription, iptv subscription reddit, 
              ipTv Infinity subscription, iptv smarters pro subscription, iptv smarters subscription, iptv subscription ebay,
              ip tv subscription, iptv subscribe, iptv sub, iptv smarters subscription reddit, iptvsubscription tv, iptv subscription service,
              iptv 12 months, iptv lifetime subscription, iptv subscription provider, iptv subscription so player, best iptv subscription for firestick,
              buy iptv subscription, mag subscription, best iptv subscription 2023 reddit, best iptv subscription for firestick reddit,
              iptv subscription dubai, iptv subscription canada reddit, iptv smarters subscription aliexpress, iptv subscription saudi arabia,
              iptv subscription for apple tv 4k, iptv box and subscription, iptv box monthly, iptv box price, iptv subscription uk reddit,
              iptv subscription uk ebay, reddit best iptv subscription, smart iptv subscription ebay,smart iptv subscription reddit,
              mag 322 w1 iptv box subscription, best arabic iptv 2023 subscription services, 
              " />
        <meta property="og:url" content="https://www.iptvinfinity.tech"/>
        <meta property="og:site_name" content="IPTV-Infinity"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/ogimage.PNG"/>
      </Head>



      <div className={`${styles.menbackgound}`}></div> 
      <section>
          <div className="container pt-5 mt-0">
              <div className="row py-5">
                    <div className={`col-12 col-lg-6`}>
                        <Forme pack ={routerCurrent} />
                    </div>
                    <div className="col-12 col-lg-6 mt-5">
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
