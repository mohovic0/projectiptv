import React from 'react'
import Head from 'next/head'
import styles from '@/pages/pricing/Pricing.module.css'
import Card from '@/components/card'
import Sportmovie from '@/components/sportmovie'
import Barre from '@/components/barre'

function Pricing() {
  return (
    <>
        <Head>
            <title>Pricing-USA-UK-Canada-France...-#1 Best IPTV Subscription Service Provider</title>
            <meta name="description" content="Infinity IPTV redefined with our top IPTV subscription. Non-stop sports, extensive channels, all under the Best IPTV UK service. Satisfaction guaranteed. Experience the difference today." />
            <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="generator" content="Next.js" />
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content="Infinity IPTV - Best IPTV Subscription Service Provider"/>
            <meta property="og:description" content="Infinity IPTV redefined with our top IPTV subscription. Non-stop sports, extensive channels, all under the Best IPTV UK service. Satisfaction guaranteed. Experience the difference today."/>
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

        <div>
          <div className={`${styles.menbackgound}`}></div>

          <section className={`container-fluid pt-5 pb-2 ${styles.section1}`}>
                <h1 className="fs-1 fw-bolder text-black pt-5 text-white mt-3 text-center mb-4">Pricing Plans</h1>

                <h3 className='container' style={{color : "#FAF5E9"}}>Irresistible Prices</h3>
                <p className='container' style={{color : "#FAF5E9"}} >
                    Whether you’re a dedicated sports enthusiast, a drama aficionado, or a family seeking quality entertainment, our pricing plans ensure there’s something for everyone.  Join us on a journey of seamless streaming, exceptional picture quality, and uninterrupted enjoyment, all at prices designed to make your entertainment experience truly extraordinary.
                </p>
                <h1 className='fs-2 fw-bold text-center pt-4 mt-0 mb-4 text-white'>Choose Your Plan</h1>
                <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

                    <div className={` mb-5 ${styles.divcard}`}><Card sub='Subscription'  mois = '3' price='19.99' id='64e4013f2de52' /></div>
                    <div className={` mb-5 ${styles.divcard}`}><Card sub='Subscription'  mois = '6' price='29.99' id='64e40104f2f95' /></div>
                    <div className={` mb-5 ${styles.divcard}`}><Card sub='Subscription'  mois = '12' price='49.99' id='64e3e7d83a767'/></div>
                    <div className={` mb-5 ${styles.divcard}`}><Card sub='Premium'  mois = '12' price='59.99' id='64e3e7d83a767'/></div>
                </div>
          </section>


          <section className={`${styles.section2}`}>
            <Sportmovie/>
          </section>

          <section className={`${styles.section3}`}>
            <Barre/>
          </section>
        
          

        </div>

    </>
  )
}

export default Pricing
