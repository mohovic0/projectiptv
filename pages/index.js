import img from '@/public/bak.webp'
import styles from './Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import CountUp from 'react-countup';
import whatsa from '@/public/whatsa.png'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

const Carouseltwo = dynamic(()=>import('@/components/carouseltwo'))
const Carouselone = dynamic(()=>import('@/components/carouselone'))
const Card = dynamic(()=>import('@/components/card'))
const Barre = dynamic(()=>import('@/components/barre'))
const CarouselReview = dynamic(()=>import('@/components/carouselReview'))
const Chooseus = dynamic(()=>import('@/components/chooseus'))
const Foot = dynamic(()=>import('@/components/foot'))
const Movie = dynamic(()=>import('@/components/movie'))




export default function Home() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>  
      <Head>
        
        <title>4k iptv, the best streaming service in CANADA & USA </title>
        <meta name="description" content="4k IPTV streaming services 
                available in CANADA & United States" />
        <link rel="icon" href="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/logo.ico"  type="image/x-icon"/>
        <meta name=" robots" content=" index, follow,max-snippet: -1, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js" />
        <meta name=" author" content="4k iptv"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="4k iptv , iptv 4k"/>
        <meta property="og:description" content="4k IPTV streaming services 
                available in CANADA & United States"/>
        <meta name="keywords" content="4k iptv, 4k iptv service"/>
        <meta property="og:url" content="https://www.iptv-streaming.me/"/>
        <meta property="og:site_name" content="IPTV Streaming 4k"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/ogusa.PNG"/>
        
    </Head>
    <div className={`mx-auto ${styles.whatsapBtn}`}>

            <a href={"https://wa.me/33774600876"}>

                {/* <Lottie className={` ${styles.icone}`} loop={true} animationData={whatsa} /> */}
                <Image src={whatsa} width={50} height={50} alt='4k IPTV Streaming in USA & CANADA'/>
                
            </a>
            <span style={{color : "#4cd464"}}>Trial</span>
    </div>
      
      
      <section className={`${styles.section1}`}>
          
                
                 <Image
                    src={img}
                    alt="4k IPTV Streaming in USA"
                    layout='fill'
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    priority={true}
                    
                /> 

                <div className={`d-block pt-5 text-center  ${styles.contenu}`}>
                            
                            <div className={`pt-2 ${styles.title1}`}>
                                <p>FASTEST <span style={{ color: "#FF5F1F" }}>4K IPTV</span> SERVICE </p>
                            </div>

                            <div className={`pt-2 px-2  ${styles.title2}`} >
                                <p>
                                    
                                      High Quality <span style={{ color: "#FF5F1F" }}>4K IPTV</span> Subscription 
                                    
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
                                    
      <section className={`${styles.section2}`}>
          <Chooseus />
      </section>

      
      <section className={`${styles.section9}`}>
          <Foot />
      </section>

      <section className={`${styles.section9}`}>
          <Movie />
      </section>
                          

      



      <section ref={ref} className={`${styles.section4}`}>

          <div className={`text-center pt-1 mt-0 mb-4 ${styles.chooseplan}`}>Choose Your Plan</div>
          <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='69,99'  mois = '12 Months Subscription' price='59.99' id='?add-to-cart=194'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='39.99'  mois = '6 Months Subscription' price='34.99' id='?add-to-cart=187' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='29.99'   mois = '3 Months Subscription' price='24.99' id='?add-to-cart=145' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='19.99' mois = '1 Month Subscription' price='12.99' id='?add-to-cart=144'/></div>
          </div>
        
      </section>

      <section className={`${styles.section3}`}>
        <Barre/>
      </section>

     

      

      
      <section className={` ${styles.section8}`}>
         <CarouselReview />
      </section>


         
    </>
  )
}
