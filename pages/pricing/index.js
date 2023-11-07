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
  
            <title>Pricing-USA-UK-Canada-France...-#1 Best IPTV Streaming Service Provider</title>
            <meta name="description" content="USA-UK-CANADA-FRANCE-Germany - IPTV Streaming is the best IPTV Subscription Service Provider, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service." />
            <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/logo1.png" sizes="32x32" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="generator" content="Next.js" />
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content="IPTV Streaming - The Best IPTV Subscription Service Provider"/>
            <meta property="og:description" content="IPTV streaming  is the best Subscription Service Provider, 
                  we always strive hard for perfection and your satisfaction. We give you
                  the stability and reliability of the service. Get the next GEN+ IPTV."/>
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

        <div>
          <div className={`${styles.menbackgound}`}></div>

          <section className={`container-fluid pt-5 pb-2 ${styles.section1}`}>
                <div className={`pt-5 mt-3 text-center mb-4 ${styles.title}`}>Pricing Plans</div>

                <h3 className='container' style={{color : "#FAF5E9"}}>Irresistible Prices</h3>
                <p className='container' style={{color : "#FAF5E9"}} >
                    Whether you’re a dedicated sports enthusiast, a drama aficionado, or a family seeking quality entertainment, our pricing plans ensure there’s something for everyone.  Join us on a journey of seamless streaming, exceptional picture quality, and uninterrupted enjoyment, all at prices designed to make your entertainment experience truly extraordinary.
                </p>
                <h1 className='fs-2 fw-bold text-center pt-4 mt-0 mb-4 text-white'>Choose Your Plan</h1>
                <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

                <div className={` mb-5 ${styles.divcard}`}><Card oldprice='69,99'  mois = '12 Months Subscription' price='49.99' id='64e3e7d83a767'/></div>
                <div className={` mb-5 ${styles.divcard}`}><Card oldprice='39.99'  mois = '6 Months Subscription' price='34.99' id='64e40104f2f95' /></div>
                <div className={` mb-5 ${styles.divcard}`}><Card oldprice='29.99'   mois = '3 Months Subscription' price='24.99' id='64e4013f2de52' /></div>
                <div className={` mb-5 ${styles.divcard}`}><Card oldprice='19.99' mois = '1 Month Subscription' price='11.99' id='652878f95473a'/></div>
                   
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
