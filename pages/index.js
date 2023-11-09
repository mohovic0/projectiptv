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
        
        <title>IPTV Streaming - USA & CANADA </title>
        <meta name="description" content="Explore a world of entertainment with IPTV Streaming in the 
        USA, UK, Canada, and Germany. Access diverse content from multiple 
        countries..." />
        <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/auzomaki/imagesogiptvinfinity/main/logo1.png" sizes="32x32" />
        <meta name=" robots" content=" index, follow,max-snippet: -1, max-image-preview:large" />
        <link rel="canonical" href="https://www.iptv-streaming-4k.com"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js" />
        <meta name=" author" content="IPTV Streaming"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="IPTV Streaming - USA & CANADA"/>
        <meta property="og:description" content="Explore a world of entertainment with IPTV Streaming in the 
        USA, UK, Canada, and Germany. Access diverse content from multiple 
        countries..."/>
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

    <div className={`mx-auto ${styles.whatsapBtn}`}>

            <a href={"https://wa.me/33774600876"}>

                {/* <Lottie className={` ${styles.icone}`} loop={true} animationData={whatsa} /> */}
                <Image src={whatsa} width={50} height={50} alt='IPTV Streaming in USA & CANADA'/>
                
            </a>
            <span style={{color : "#4cd464"}}>Trial</span>
    </div>
      
      
      <section className={`${styles.section1}`}>
          
                
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

              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='69,99'  mois = '12 Months Subscription' price='49.99' id='64e3e7d83a767'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='39.99'  mois = '6 Months Subscription' price='34.99' id='64e40104f2f95' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='29.99'   mois = '3 Months Subscription' price='24.99' id='64e4013f2de52' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card oldprice='19.99' mois = '1 Month Subscription' price='11.99' id='652878f95473a'/></div>
          </div>
        
      </section>

      <section className={`${styles.section3}`}>
        <Barre/>
      </section>

     

      

      
      <section className={` ${styles.section8}`}>
         <CarouselReview />
      </section>

      <section className={`${styles.section11}`}>
        <div className={`${styles.soussection11}`}>
      <h1>Unlock the Ultimate Entertainment Experience with 4K IPTV Streaming and Subscriptions in the USA</h1>

        In today is digital age, accessing high-quality content has become easier than ever. IPTV (Internet Protocol Television) is at the forefront of this revolution, offering viewers a vast array of options for an immersive and customized entertainment experience. In this article, we will explore the world of IPTV, focusing on 4K quality streaming, subscription options in the USA, the benefits of buying an IPTV service, and why it is considered the best choice for devices like Firestick.

        <h2>IPTV Streaming in Stunning 4K Quality</h2>

        IPTV streaming has evolved to meet the demands of modern viewers, and 4K quality is now a standard feature. This ultra-high definition allows you to enjoy your favorite shows, movies, and sports events with unparalleled clarity and vividness. Whether you are a sports enthusiast, a movie buff, or a binge-watcher, 4K IPTV streaming delivers an extraordinary viewing experience.

        <h2>IPTV Subscription in the USA: A World of Choices</h2>

        When it comes to IPTV subscriptions in the USA, you are spoiled for choice. The market offers a wide range of subscription plans to cater to different preferences and budgets. From basic plans with essential channels to premium packages with sports, movies, and international content, you can tailor your subscription to your specific needs.

        <h2>Why Buy an IPTV Service?</h2>

        Investing in an IPTV service comes with numerous advantages. First and foremost, it offers cost-effective access to a vast library of content. With an IPTV subscription, you can watch what you want, when you want, without long-term contracts or expensive cable bills. The flexibility and affordability make it a compelling choice for cord-cutters.

        <h2>Best IPTV for Firestick: Seamless Integration</h2>

        Many viewers prefer the convenience of streaming content through devices like Amazon Firestick. IPTV services are fully compatible with Firestick, providing a user-friendly interface for accessing your favorite channels and content. With the best IPTV service, you can turn your Firestick into a versatile entertainment hub.

        <h2>Reliable IPTV Service: Your Gateway to Endless Entertainment </h2>

        In conclusion, IPTV streaming in 4K quality, combined with flexible subscription options in the USA, makes it a top choice for modern entertainment. Buying an IPTV service not only saves you money but also grants you access to a world of content on your terms. Whether you are using a Firestick or any other device, IPTV ensures a seamless and enjoyable viewing experience. Embrace the future of entertainment with IPTV and discover the endless possibilities it offers.
        </div>
      </section>
      
      
      
    

         
    </>
  )
}
