import img from '@/public/bak.webp'
import styles from './Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Carouseltwo from '@/components/carouseltwo'
import Carouselone  from '@/components/carouselone'
import Barre from '@/components/barre'
import { useEffect, useRef, useState } from 'react'
import Card from '@/components/card'
import Sportmovie from '@/components/sportmovie'
import Lottie from 'lottie-react'
import CarouselReview from '@/components/carouselReview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import whats from '@/public/whatsap.svg'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import aboutLottie from '@/public/aboutLottie'
import styled from '@/pages/about/About.module.css'
import Chooseus from '@/components/chooseus'
import whatsa from '@/public/whatsappp'
import Foot from '@/components/foot'
import Movie from '@/components/movie'
import CountUp from 'react-countup';



export default function Home() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>  
      <Head>
        
        <title>The Best IPTV Subscription Service Provider-USA-UK-Canada-France ...</title>
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
        <meta name="keywords" content="
              iptv streaming service, buy iptv, iptv premium 2023, best iptv on firestick, 
              iptv service provider, iptv firestick 2023, iptv subscription in usa, iptv subscription android
              best iptv for firestick 2023, iptv for sale, best iptv subscription for firestick, top iptv providers, best service iptv,
              iptv providers, best iptv reddit, iptv sub, iptv subscribe, iptv subscription service, iptv deals, iptv service subscription, top iptv, iptv best provider, best iptv server, best iptv, iptv service, iptv subscription, iptv subscription legal, best iptv subscription, iptv subscription reddit, 
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
        <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/oguk.png"/>
        
    </Head>

    <div className={`${styles.whatsapBtn}`}>

            <a href={"https://wa.me/447466729726"}>

                <Lottie className={`mx-auto ${styles.icone}`} loop={true} animationData={whatsa} />
                {/* <Image
                  priority
                  src={whats}
                  alt="whatsap"
                  width={55}
                  height={55}
                /> */}
            </a>
            <span style={{color : "#4cd464"}}>Trial</span>
      </div>
      
      
      
      <section className={`pt-5 ${styles.section1}`}>
                
                 <Image
                    
                    src={img}
                    alt="The Best IPTV Subscription in UK-Canada-France"
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    priority={true}
                    
                /> 

                <div className={`d-block pt-5 text-center  ${styles.contenu}`}>
                            
                            <div className={`pt-2 ${styles.title1}`}>
                                <p>FASTEST <span style={{ color: "#FF5F1F" }}>IPTV</span> SERVICE </p>
                            </div>

                            <div className={`pt-2 px-2  ${styles.title2}`} >
                                <p>
                                    
                                      High Quality <span style={{ color: "#FF5F1F" }}>IPTV</span> Subscription 
                                    
                                </p>
                            </div>

                            <div className={`pt-2 ${styles.title3}`}>
                                <p >All Devices Are Supported Money Back Guarantee</p>
                            </div>

                            {/* <h2 className={`pt-2 px-2 ${styles.title1}`}>
                                  Watch Thousands Of TV Shows, Movies, And Sports Anytime, Anywhere.
                                  Level Up Your TV.
                            </h2> */}

                            <div className="pt-3">
                                  <button onClick={handleClick} type="button" className={`ms-0  ${styles.btn1}`} >
                                      <span className={`${styles.btnlink}`} >
                                      PRICES & PLANS
                                      </span>
                                  </button>
                                  {/* <button type="button" className={`ms-4  ${styles.btn1}`} href="/contact">
                                      <Link className={`${styles.btnlink}`} href="https://wa.me/33774600876">
                                      Free Trial
                                      </Link>
                                  </button> */}
                            </div>

                            

                            <div className={`${styles.car1}`}>
                                  <Carouselone />
                            </div>

                                

                            <div className={`${styles.car2}`}>
                                <Carouseltwo />
                                {/* <Carouselthre /> */}
                            </div>
                            
                                {/* <CarouselFour /> */}
                              
                              <div className={`pt-4 ${styles.title4}`}>
                                <p>WE COVER WORLDWIDE CHANNELS</p>
                              </div>
                              <div className={`pt-3 pb-3 container-fluid text-center  d-block d-md-flex  justify-content-lg-evenly ${styles.divcount}`}>
                                  <div>
                                  
                                      <span className={`${styles.count}`}><CountUp end={20} duration={5} enableScrollSpy prefix="+" suffix="K"/></span>
                                      <p className={`${styles.parag}`} >HD Channels Available</p>

                                  </div>
                                  <div>
                                      <span className={`${styles.count}`}><CountUp end={10} duration={5} enableScrollSpy prefix="+" suffix="K"/></span>
                                      <p className={`${styles.parag}`}>Vods & TV Shows</p>
                                    
                                  </div>
                                  <div>
                                      <span className={`${styles.count}`}><CountUp end={5} duration={5} enableScrollSpy prefix="+" suffix="K"/></span>
                                      <p className={`${styles.parag}`}>Active Subscriptions</p>
                                  </div>
                            </div>
                            
                            
                            
                </div>
                
      </section>
                                    
      <section className={`pt-5 ${styles.section2}`}>
          <Chooseus />
      </section>

      
      <section className={`pt-5 ${styles.section9}`}>
          <Foot />
      </section>

      <section className={`pt-5 ${styles.section9}`}>
          <Movie />
      </section>
                          

      <section className={`pt-5 ${styles.section5}`}>
        <Sportmovie/>
      </section>



      <section ref={ref} className={`pb-1 pt-5 ${styles.section4}`}>

          <div className={`text-center pt-1 mt-0 mb-4 ${styles.chooseplan}`}>Choose Your Plan</div>
          <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='79,99'  mois = '12 Months Subscription' price='59.99' id='64e3e7d83a767'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='49.99'  mois = '6 Months Subscription' price='39.99' id='64e40104f2f95' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='39.99'   mois = '3 Months Subscription' price='29.99' id='64e4013f2de52' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='29.99' mois = '1 Month Subscription' price='11.99' id='652878f95473a'/></div>
          </div>
        
      </section>

      <section className={`${styles.section3}`}>
        <Barre/>
      </section>

     

      <section className={`container-fluid text-white  ${styles.section7}`}>
        
        <div className='row pt-5'>

          <div className='col-12 col-lg-6'>
                  <Lottie className={`mx-auto `} loop={true} animationData={aboutLottie} />
          </div>
          <div className='col-12 col-lg-6'>
                  <div className={`mb-5 ${styles.title}`}>We Provide Best IPTV Server In The World Wide</div>
                  <h6>Today, we are revolutionizing the way you access the television. With +13000 channels and unique apps, you’ll be watching IPTV in a radically new, intelligent, and intuitive way.</h6>
                  
                  <div className='ms-1 me-1 row mt-5 '>
                    <ul className='col list-group list-group-flush'>
                      <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start  border-0 mb-4  list-group-item text-black '><FontAwesomeIcon className={styled.icon} icon={faCheck} /> 150+ Countries Live Channles</li>
                      <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start  border-0 list-group-item mb-4 text-black '><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Expert technical team</li>
                      <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start  border-0 list-group-item mb-2 text-black  '><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Reasonable price packages</li>
                    </ul>
                    <ul className='col list-group list-group-flush'>
                      <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start border-0 list-group-item mb-4 text-black'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Trusted & recommended  </li>
                      <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start border-0 list-group-item mb-4 text-black'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> 24/7 quick support</li>
                      <li style={{ background: "#ffd470" }} className='rounded-5 rounded-bottom rounded-start border-0 list-group-item mb-2 text-black'><FontAwesomeIcon className={styled.icon} icon={faCheck} /> Best Network Server</li>
                    </ul>
                  </div>
                  
                  <div className='mb-5'>
                    <button onClick={handleClick} type="button" className={`btn btn-warning mt-3 ms-0 p-2 ${styled.btn1}`}>
                      <span className={`${styled.btnlink}`} >
                        Subscription Now <FontAwesomeIcon className={styled.fonticone} icon={faArrowRightLong} />
                        </span>
                    </button>
                  </div>    
                  
          </div>

        </div>
      </section>

      
      <section className={`pt-4 ${styles.section8}`}>
        <CarouselReview />
      </section>
      
      
      
      {/* <section className={`container-fluid ${styles.section6}`}>
        <div className='row '>
                <div className="col-12 col-lg-6 ">
                      <Chatwhatsap/>
                          
                </div>
                <div className='col-12 col-lg-6 '>
                    
                    <h1 className="fs-1 fw-bold mt-3 text-center mb-4 "> Ready to get started? </h1>
                    <Forme />
                    
                </div>
          </div>
      </section> */}

         
    </>
  )
}
