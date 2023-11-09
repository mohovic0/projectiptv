import React from 'react'
import Head from 'next/head'
import aboutLottie from '@/public/aboutLottie.png'
import styles from './About.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import Sportmovie from '@/components/sportmovie'
import Barre from '@/components/barre'
import Image from 'next/image'

function About() {
  return (
    <> 
    

      <Head>
        <title>IPTV Streaming - USA - About Us</title>
        <meta name="description" content="Learn about IPTV Streaming in the USA. Our 'About Us' section provides insights into our services, mission, and commitment to 
        delivering top-quality entertainment experiences for our customers" />
        <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/logo1.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js" />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="IPTV Streaming - USA - About Us"/>
        <meta property="og:description" content="Learn about IPTV Streaming in the USA. Our 'About Us' section provides insights into our services, mission, and commitment to 
        delivering top-quality entertainment experiences for our customers"/>
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
              " />
        <meta property="og:url" content="https://www.iptv-streaming-4k.com"/>
        <meta property="og:site_name" content="IPTV-Streaming"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/ogimage.PNG"/>
      </Head>



      <div className={`${styles.menbackgound}`}></div> 

      <section className={`container-fluid text-white pt-5  ${styles.section1}`}>
        
      <div className='row pt-5'>

        <div className='col-12 col-lg-6 text-center'>
              <Image src={aboutLottie} alt='IPTV Streaming in Canada' width={300} height={300}/>
        </div>
        <div className='col-12 col-lg-6'>
          <div className={`mb-5 pt-5 ${styles.title}`}>
            We Provide Best IPTV Server In The World Wide
            <h6 className='pt-3'>Today, we are revolutionizing the way you access the television. With +13000 channels and unique apps, you’ll be watching IPTV in a radically new, intelligent, and intuitive way.</h6>
          </div>
          
        
          <div className='ms-1 me-1 row mt-5 '>
            <ul className='col list-group list-group-flush'>
              <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start  border-0 mb-4  list-group-item text-black '><FontAwesomeIcon className={styles.icon} icon={faCheck} /> 150+ Countries Live Channles</li>
              <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start  border-0 list-group-item mb-4 text-black '><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Expert technical team</li>
              <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start  border-0 list-group-item mb-2 text-black  '><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Reasonable price packages</li>
            </ul>
            <ul className='col list-group list-group-flush'>
              <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start border-0 list-group-item mb-4 text-black'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Trusted & recommended  </li>
              <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start border-0 list-group-item mb-4 text-black'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> 24/7 quick support</li>
              <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start border-0 list-group-item mb-2 text-black'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Best Network Server</li>
            </ul>
          </div>
        
        <Link href='/pricing' className='mb-5'>
          <button  type="button" className={`btn btn-warning mt-3 ms-0 p-2 ${styles.btn1}`}>
            <span className={`${styles.btnlink}`} >
              Subscription Now <FontAwesomeIcon className={styles.fonticone} icon={faArrowRightLong} />
              </span>
          </button>
        </Link>    
        
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

export default About
