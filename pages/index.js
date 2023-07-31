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


export default function Home() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>ipTv Infinity - Best IPTV Subscription Service Provider</title>
        <meta name="description" content="ipTv Infinity is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service. Get the next GEN+ IPTV." />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="ipTv Infinity - Best IPTV Subscription Service Provider"/>
        <meta property="og:description" content="ipTv Infinity is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service. Get the next GEN+ IPTV."/>
        <meta property="og:url" content="https://"/>
        <meta property="og:site_name" content="IPTV-Infinity"/>
        <meta property="og:image" content="https://"/>
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
                            <div className={`pt-5 ${styles.title1}`}>
                            FASTEST <span style={{ color: "#e6d600" }}>IPTV</span> SERVICE
                            </div>

                            <div className={`pt-4 lh-sm px-2  ${styles.title2}`}>
                                <strong>
                                    The Best <span style={{ color: "#e6d600" }}>IPTV</span> <br />{" "}
                                    Subscription For Endless <br /> Entertainment
                                </strong>
                            </div>

                            <div className={`pt-4 px-2 ${styles.title1}`}>
                                  Watch Thousands Of TV Shows, Movies, And Sports Anytime, Anywhere.
                                  Level Up Your TV.
                            </div>

                            <div className="pt-5">
                                  <button onClick={handleClick} type="button" className={`ms-0  ${styles.btn1}`} >
                                      <span className={`${styles.btnlink}`} >
                                      Get Started
                                      </span>
                                  </button>
                                  <button type="button" className={`ms-4  ${styles.btn1}`} href="/contact">
                                      <Link className={`${styles.btnlink}`} href="/contact">
                                      Free Trial
                                      </Link>
                                  </button>
                            </div>
                </div>
      </section>
      
      {/* <section className={`pt-5 ${styles.section1}`}>
      
          <div className={`d-block pt-5 text-center mb-5`}>

                    <div className={`pt-5 ${styles.title1}`}>
                        FASTEST <span style={{color : "#e6d600"}}>IPTV</span> SERVICE
                    </div>  

                    <div className={`pt-4 lh-sm px-2  ${styles.title2}`}>
                        <strong>The Best <span style={{color : "#e6d600"}}>IPTV</span> <br/> Subscription For Endless <br/> Entertainment
                        </strong>
                    </div>

                    <div className={`pt-4 px-2 ${styles.title1}`}>
                            Watch Thousands Of TV Shows, Movies, And Sports Anytime, Anywhere. Level Up Your TV.
                    </div>

                    
                    <div className='pt-5'>
                          <button type="button" className={`ms-0  ${styles.btn1}`}><Link className={`${styles.btnlink}`} href="/contact">Get Started</Link></button>
                          <button type="button" className={`ms-4  ${styles.btn1}`}><Link className={`${styles.btnlink}`} href="/contact">Free Trial</Link></button>
                    </div>
                  

          </div>
          
      </section> */}

      <section className={`${styles.section2}`}>
        <Carousel />
      </section>

      <section className={`${styles.section3}`}>
        <Barre/>
      </section>

      <section ref={ref} className={`${styles.section4}`}>

          <h1 className='fs-2 fw-bold text-center pt-5 mt-0 mb-5 text-black'>THANK YOU FOR CHOOSING INFINITY IPTV</h1>
          <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '3' price='10' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '6' price='20' /></div>
              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '12' price='30' /></div>
                        
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
