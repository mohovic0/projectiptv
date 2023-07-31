import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Barre from '@/components/barre'
import 'react-phone-input-2/lib/style.css'
import Head from 'next/head'
import Sportmovie from '@/components/sportmovie'
import Chatwhatsap from '@/components/chatwhatsap'
import Forme from '@/components/forme'
import styles from '@/pages/contact/Contact.module.css'


function Pack3() {
    const router = useRouter()
    const routerCurrent = router.pathname;
    //console.log(routerCurrent)
        
    return (
      <>  
        <Head>
          <title>ipTv Infinity - Best IPTV Subscription Service Provider</title>
          <meta name="description" content="ipTv Infinity is the best on the planet, 
                we always strive hard for perfection and your satisfaction. We give you
                 the stability and reliability of the service. Get the next GEN+ IPTV." />
          <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:locale" content="en_US"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="ipTv Infinity - Best IPTV Subscription Service Provider"/>
          <meta property="og:description" content="ipTv Infinity is the best on the planet, 
                we always strive hard for perfection and your satisfaction. We give you
                 the stability and reliability of the service. Get the next GEN+ IPTV."/>
          <meta property="og:url" content="https://"/>
          <meta property="og:site_name" content="IPTV-Infinity"/>
          <meta property="og:image" content="https://"/>
        </Head>
  
        <div className={`${styles.menbackgound}`}></div> 
        <section>
            <div className="container pt-5">
                <div className="row pt-5">
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

export default Pack3
