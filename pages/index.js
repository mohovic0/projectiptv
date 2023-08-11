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
import imgsub from '@/public/iptvarticle.jpg'


export default function Home() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Best IPTV Subscription Service Provider - Infinity IPTV - </title>
        <meta name="description" content="Infinity IPTV is the best on the planet, 
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
              mag 322 w1 iptv box subscription, best arabic iptv 2023 subscription services, 
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

      <section className='container pt-5' >
            <Image
                    className='container'
                    src={imgsub}
                    alt="image subscraption"
                    
            />
            <h1 className='text-center'>Unleashing the Ultimate Entertainment Experience: Exploring <strong>IPTV subscription</strong> Services</h1>
            <h2>Introduction</h2>
            <p>In the dynamic landscape of modern entertainment, Internet Protocol Television (IPTV) subscription services have emerged as a groundbreaking solution, redefining the way we consume television content. With an impressive range of channels, on-demand programs, and interactive features, <strong>IPTV subscriptions</strong> have swiftly become a cornerstone of contemporary leisure. This article delves into the captivating realm of <strong>IPTV subscription</strong> services, shedding light on their benefits, features, and the profound impact they ve had on transforming our TV-watching habits.</p>
            <h2>Evolution of Television with <strong>IPTV subscriptions</strong></h2>
            <p><strong>IPTV subscription</strong> services represent a paradigm shift in how we access and enjoy television. Departing from conventional cable and satellite broadcasting, IPTV utilizes internet protocols to deliver captivating audiovisual content directly to viewers screens. This innovation empowers users to indulge in their preferred shows, movies, and live events through an array of devices, including smart TVs, smartphones, tablets, and computers.</p>
            <h2>Key Elements of <strong>IPTV subscription</strong> Services</h2>
            <p>a) Diverse Content Selection: IPTV subscription services boast an impressive array of channels spanning genres like news, sports, entertainment, lifestyle, and more. This rich diversity caters to a wide spectrum of preferences, ensuring every viewer finds their desired content.

            b) On-Demand Delights: A standout feature of <strong>IPTV subscriptions</strong> is the provision of video-on-demand (VOD) content. With an extensive library of movies, TV series, and special programs, users can curate their own viewing schedules.

            c) Engagement Redefined: IPTV brings an element of interactivity to the TV-watching experience. Users can participate in real-time polls, interactive quizzes, and engage in live chats related to their favorite shows, fostering a sense of community.

            d) Seamless Multi-Device Access: The flexibility of <strong>IPTV subscriptions</strong> shines as users effortlessly switch between devices. Whether at home or on the go, viewers can pick up where they left off, ensuring an uninterrupted entertainment journey.
            </p>
            <h2>Navigating the <strong>IPTV subscription</strong> Landscape</h2>
            <p>
            When selecting an <strong>IPTV subscription</strong> service, making an informed choice can significantly enhance your entertainment venture. Consider these factors to ensure a satisfying and dependable experience:

            a) Content Versatility: Evaluate the range and quality of available channels and VOD options, aligning them with your interests and preferences.

            b) Streaming Quality: Prioritize services that offer high-definition (HD) and 4K streaming to elevate your viewing experience to new heights.

            c) Device Compatibility: Confirm that your preferred devices, such as smart TVs, smartphones, tablets, and streaming gadgets, are supported by the chosen service.

            d) Reliability and Consistency: Research the service s reputation for stability and uptime to avoid interruptions during your favorite shows or live events.
            
            e) Responsive Customer Support: Opt for services that provide responsive customer support to promptly address any technical queries or concerns.
            </p>

            <h2>Conclusion</h2>
            
            <p>
            <strong>IPTV subscription</strong> services have ushered in an era of entertainment that marries convenience, flexibility, and interactive features. With an extensive selection of channels, on-demand content, and the freedom to view across multiple devices, <strong>IPTV subscriptions</strong> seamlessly cater to the evolving preferences of today s viewers. For <strong>IPTV subscription</strong> providers,  attract a broader audience, and solidify a strong position in the competitive entertainment domain. As technology continues to evolve, <strong>IPTV subscriptions</strong> are poised to play a pivotal role in shaping the future of television consumption, enriching our entertainment experiences beyond imagination.
            </p>

      </section>

         
    </>
  )
}
