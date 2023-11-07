import img from '@/public/bak.webp'
import styles from './Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import styled from '@/pages/about/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import whatsa from '@/public/whatsappp'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import aboutLottie from '@/public/aboutLottie'
import Barre from '@/components/barre'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Lottie from 'lottie-react'

const Carouseltwo = dynamic(()=>import('@/components/carouseltwo'))
const Carouselone = dynamic(()=>import('@/components/carouselone'))
const Card = dynamic(()=>import('@/components/card'))
const Sportmovie = dynamic(()=>import('@/components/sportmovie'))
const CarouselReview = dynamic(()=>import('@/components/carouselReview'))
const Chooseus = dynamic(()=>import('@/components/chooseus'))
const Foot = dynamic(()=>import('@/components/foot'))
const Movie = dynamic(()=>import('@/components/movie'))
const Sportmovies = dynamic(()=>import('@/components/sportmovies'))




export default function Home() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>  
      <Head>
        
        <title>IPTV Streaming in USA-UK-CANADA-FRANCE-Germany</title>
        <meta name="description" content="IPTV Streaming is the best IPTV Subscription Service Provider, 
               We give you the stability and reliability of the service." />
        <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/logo1.png" sizes="32x32" />
        <meta name=" robots" content=" index, follow,max-snippet: -1, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js" />
        <meta name=" author" content="IPTV Streaming"/>
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
        <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/ogusa.PNG"/>
        
    </Head>

    <div className={`${styles.whatsapBtn}`}>

            <a href={"https://wa.me/33774600876"}>

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
      
      
    <h1 style={{display : "none"}}>Top IPTV Streaming Subscription Services for Ultimate Entertainment</h1>
      <section className={`pt-5 ${styles.section1}`}>
          
                
                 <Image
                    src={img}
                    alt="IPTV Streaming in USA"
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

              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='69,99'  mois = '12 Months Subscription' price='49.99' id='64e3e7d83a767'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='39.99'  mois = '6 Months Subscription' price='34.99' id='64e40104f2f95' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='29.99'   mois = '3 Months Subscription' price='24.99' id='64e4013f2de52' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='19.99' mois = '1 Month Subscription' price='11.99' id='652878f95473a'/></div>
          </div>
        
      </section>

      <section className={`${styles.section3}`}>
        <Barre/>
      </section>

     

      <section className={`container-fluid text-white  ${styles.section7}`}>
        
        <div className='row pt-5'>

          <div className='col-12 col-lg-6 text-center'>
              <Lottie className={`mx-auto `} loop={false} animationData={aboutLottie} />
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
      
      
      
    

         
    </>
  )
}
