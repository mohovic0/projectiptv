import img from '@/public/imagebackk.png'
import Head from 'next/head'
import styles from './Home.module.css'
import Barre from '@/components/barre'
import Card from '@/components/card'
import Sportmovie from '@/components/sportmovie'
import Forme from '@/components/forme'
import Chatwhatsap from '@/components/chatwhatsap'
import Carousel  from '@/components/carousel'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'


import Lottie from 'lottie-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import aboutLottie from '@/public/aboutLottie'
import styled from '@/pages/about/About.module.css'

export default function Home() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>  
      <Head>
        <title>The Best IPTV Subscription Service Provider-UK-Canada-France-...</title>
        <meta name="description" content="UK-Canada-France...-Infinity IPTV is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service." />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js" />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="Infinity IPTV  - Best IPTV Subscription Service Provider"/>
        <meta property="og:description" content="Infinity IPTV  is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service. Get the next GEN+ IPTV."/>
        <meta name="keywords" content="iptv providers, best iptv reddit, iptv sub, iptv subscribe, iptv subscription service, iptv deals, iptv service subscription, top iptv, iptv best provider, best iptv server, best iptv, iptv service, iptv subscription, iptv subscription legal, best iptv subscription, iptv subscription reddit, 
              Infinity IPTV subscription, iptv smarters pro subscription, iptv smarters subscription, iptv subscription ebay,
              ip tv subscription, iptv subscribe, iptv sub, iptv smarters subscription reddit, iptvsubscription tv, iptv subscription service,
              iptv 12 months, iptv lifetime subscription, iptv subscription provider, iptv subscription so player, best iptv subscription for firestick,
              buy iptv subscription, mag subscription, best iptv subscription 2023 reddit, best iptv subscription for firestick reddit,
              iptv subscription dubai, iptv subscription canada reddit, iptv smarters subscription aliexpress, iptv subscription saudi arabia,
              iptv subscription for apple tv 4k, iptv box and subscription, iptv box monthly, iptv box price, iptv subscription uk reddit,
              iptv subscription uk ebay, reddit best iptv subscription, smart iptv subscription ebay,smart iptv subscription reddit,
              mag 322 w1 iptv box subscription, best arabic iptv 2023 subscription services,UK, Canada, France
              " />
        <meta property="og:url" content="https://www.iptvinfinity.tech"/>
        <meta property="og:site_name" content="IPTV-Infinity"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/ogimage.PNG"/>
    </Head>

      <section className={`pt-5 ${styles.section1}`}>
                <Image
                    className={styles.imageback}
                    src={img}
                    alt="image background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />

                <div className={`d-block pt-5 text-center mb-5 ${styles.contenu}`}>
                            <h2 className={`pt-5 ${styles.title1}`}>
                            FASTEST <span style={{ color: "#e6d600" }}>IPTV</span> SERVICE
                            </h2>

                            <h1 className={`pt-4 lh-sm px-2  ${styles.title2}`}>
                                <strong>
                                    The Best <span style={{ color: "#e6d600" }}>IPTV</span> <br />{" "}
                                    Subscription For Endless <br /> Entertainment
                                </strong>
                            </h1>

                            <h2 className={`pt-4 px-2 ${styles.title1}`}>
                                  Watch Thousands Of TV Shows, Movies, And Sports Anytime, Anywhere.
                                  Level Up Your TV.
                            </h2>

                            <div className="pt-5">
                                  <button onClick={handleClick} type="button" className={`ms-0  ${styles.btn1}`} >
                                      <span className={`${styles.btnlink}`} >
                                      Get Started
                                      </span>
                                  </button>
                                  <button type="button" className={`ms-4  ${styles.btn1}`} href="/contact">
                                      <Link className={`${styles.btnlink}`} href="https://wa.me/212675800270">
                                      Free Trial
                                      </Link>
                                  </button>
                            </div>
                </div>
      </section>

      <section className={`${styles.section2}`}>
        <Carousel />
      </section>

      <section className={`container-fluid pt-5 ${styles.section7}`}>
        
        <div className='row pt-5'>

          <div className='col-12 col-lg-6'>
                  <Lottie className={`mx-auto `} loop={true} animationData={aboutLottie} />
          </div>
          <div className='col-12 col-lg-6'>
                  <h2 className='fw-blod fs-2 mb-5'>We Provide Best IPTV Server In The World Wide</h2>
                  <h6>Today, we are revolutionizing the way you access the television. With +13000 channels and unique apps, you’ll be watching IPTV in a radically new, intelligent, and intuitive way.</h6>
                  
                  <div className='row mt-5'>
                    <ul className='col list-group list-group-flush'>
                      <li className='mb-4 list-group-item'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> 150+ Countries Live Channles</li>
                      <li className='list-group-item mb-4'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Expert technical team</li>
                      <li className=' list-group-item mb-2'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Reasonable price packages</li>
                    </ul>
                    <ul className='col list-group list-group-flush'>
                      <li className='list-group-item mb-4'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Trusted & recommended  </li>
                      <li className=' list-group-item mb-4'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> 24/7 quick support</li>
                      <li className=' list-group-item mb-2'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Best Network Server</li>
                    </ul>
                  </div>
                  
                  <div className='mb-5'>
                    <button type="button" className={`btn btn-warning mt-3 ms-0 p-2 ${styled.btn1}`}>
                      <Link className={`${styled.btnlink}`} href="/contact">
                        Subscription Now <FontAwesomeIcon className={styled.fonticone} icon={faArrowRightLong} />
                        </Link>
                    </button>
                  </div>    
                  
          </div>

        </div>
      </section>

      <section className={`${styles.section3}`}>
        <Barre/>
      </section>

      <section ref={ref} className={`${styles.section4}`}>

          <h1 className='fs-2 fw-bold text-center pt-5 mt-0 mb-5 text-black'>THANK YOU FOR CHOOSING INFINITY IPTV</h1>
          <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '3' price='20' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '6' price='30' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '12' price='50' /></div>
                        
          </div>
        
      </section>

      <section className={`${styles.section5}`}>
        <Sportmovie/>
      </section>

      <section className={`container ${styles.section6}`}>
        <div className='row '>
                <div className="col-12 col-lg-6 ">
                      <Chatwhatsap/>
                          
                </div>
                <div className='col-12 col-lg-6 '>
                    
                    <h1 className="fs-1 fw-bold mt-3 text-center mb-4"> Ready to get started? </h1>
                    <Forme />
                    
                </div>
          </div>
      </section>


      

      

         
    </>
  )
}
