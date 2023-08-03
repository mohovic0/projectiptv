import React from 'react'
import Head from 'next/head'
import aboutLottie from '@/public/aboutLottie'
import Lottie from 'lottie-react'
import styles from './About.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'



function About() {
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

      <section className='container pt-5'>
        
        <div className='row pt-5'>

          <div className='col-12 col-lg-6'>
                  <Lottie className={`mx-auto `} loop={true} animationData={aboutLottie} />
          </div>
          <div className='col-12 col-lg-6'>
                  <h2 className='fw-blod fs-2 mb-5'>We Provide Best IPTV Server In The World Wide</h2>
                  Today, we are revolutionizing the way you access the television. With +13000 channels and unique apps, you’ll be watching IPTV in a radically new, intelligent, and intuitive way.
                  
                  <div className='row mt-5'>
                    <ul className='col list-group list-group-flush'>
                      <li className='mb-4 list-group-item'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> 150+ Countries Live Channles</li>
                      <li className='list-group-item mb-4'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Expert technical team</li>
                      <li className=' list-group-item mb-2'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Reasonable price packages</li>
                    </ul>
                    <ul className='col list-group list-group-flush'>
                      <li className='list-group-item mb-4'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Trusted & recommended  </li>
                      <li className=' list-group-item mb-4'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> 24/7 quick support</li>
                      <li className=' list-group-item mb-2'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Best Network Server</li>
                    </ul>
                  </div>
                  
                  <div className='mb-5'>
                    <button type="button" className={`btn btn-warning mt-3 ms-0 p-2 ${styles.btn1}`}>
                      <Link className={`${styles.btnlink}`} href="/contact">
                        Subscription Now <FontAwesomeIcon className={styles.fonticone} icon={faArrowRightLong} />
                        </Link>
                    </button>
                  </div>
                  
                  
                 
                  
                  
          </div>

        </div>
      </section>

      
    </>
  )
}

export default About
